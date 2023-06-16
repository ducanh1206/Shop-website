import { useAuth } from "@/components/AuthContext";
import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useAsync } from "@/hooks/useAsync";
import { useBodyClass } from "@/hooks/useBodyClass";
import { useForm } from "@/hooks/useForm";
import { useQuery } from "@/hooks/useQuery";
// import { useSearch } from "@/hooks/useSearch";
import { userService } from "@/services/user";
import { loginAction, loginByCodeAction } from "@/store/auth";
import { cn, confirm, minMax, regexp, required } from "@/utils";
import { handleError } from "@/utils/handleError";
import { LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  useBodyClass("bg-light");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  // const {search} = useSearch()
  const { loading: resendEmailLoading, excute: resendEmailService } = useAsync(
    userService.resendEmail
  );
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const { loginLoading } = useAuth();
  const { loading, refetch: registerService } = useQuery({
    enabled: false,
    queryFn: () =>
      userService.register({
        ...formRegister.values,
        redirect: window.location.origin + window.location.pathname,
      }),
    limitDuration: 1000,
  });

  // useEffect(() => {
  //   if(search.code){
  //     dispatch(loginByCodeAction(search.code))
  //   }
  // }, [])

  const formLogin = useForm({
    username: [required(), regexp("email")],
    password: [required()],
  });

  const formRegister = useForm(
    {
      name: [required()],
      username: [required(), regexp("email")],
      password: [required()],
      confirmPassword: [required(), confirm("password")],
    },
    {
      dependencies: {
        password: ["confirmPassword"],
      },
    }
  );

  const onRegister = async () => {
    if (formRegister.validate()) {
      try {
        await registerService();
        setIsRegisterSuccess(true);
        message.success("Register Success");
      } catch (error) {
        handleError(error);
      }
    }
  };

  const onLogin = async () => {
    if (formLogin.validate()) {
      try {
        dispatch(loginAction(formLogin.values));
        message.success("Login Success");
      } catch (err) {
        handleError(err);
      }
    }
  };

  const onResendEmail = async (ev) => {
    ev.preventDefault();
    try {
      await resendEmailService({
        username: res.username,
      });
      message.success("Resend Email Success");
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        {isRegisterSuccess ? (
          <div className="container wrap flex flex-col text-center gap-10">
            <h1 className="text-2xl font-bold">Register Success</h1>
            <p>
              Please check email to verify, click "Here" to get resend email !!!{" "}
            </p>
            <div className="flex justify-center">
              <a
                onClick={onResendEmail}
                href="#"
                className={cn("link flex gap-2 ", {
                  "opacity-50 pointer-events-none": resendEmailLoading,
                })}
              >
                {resendEmailLoading && <LoadingOutlined />}
                Here
              </a>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">Returning Customer</h6>
                  {/* Form */}
                  <div>
                    <div className="row">
                      <div className="col-12">
                        {/* Email */}
                        <Field
                          placeholder="Email Address *"
                          {...formLogin.register("username")}
                        ></Field>
                      </div>
                      <div className="col-12">
                        {/* Password */}
                        <Field
                          placeholder="Password *"
                          type="password"
                          {...formLogin.register("password")}
                        ></Field>
                      </div>
                      <div className="col-12 col-md">
                        {/* Remember */}
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="loginRemember"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="loginRemember"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group">
                          <a
                            className="font-size-sm text-reset"
                            data-toggle="modal"
                            href="#modalPasswordReset"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Button */}
                        <Button onClick={onLogin} loading={loginLoading}>
                          Sign In
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">New Customer</h6>
                  {/* Form */}
                  <div>
                    <div className="row">
                      <div className="col-12">
                        <Field
                          placeholder="Fullname *"
                          {...formRegister.register("name")}
                          value={formRegister.values.name || ""}
                        ></Field>
                      </div>
                      <div className="col-12">
                        {/* Email */}
                        <Field
                          placeholder="Email Address *"
                          {...formRegister.register("username")}
                          value={formRegister.values.username || ""}
                        ></Field>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Password */}
                        <Field
                          placeholder="Password *"
                          type="password"
                          {...formRegister.register("password")}
                          value={formRegister.values.password || ""}
                        ></Field>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Password */}
                        <Field
                          placeholder="Confirm Password *"
                          type="password"
                          {...formRegister.register("confirmPassword")}
                          value={formRegister.values.confirmPassword || ""}
                        ></Field>
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group font-size-sm text-muted">
                          By registering your details, you agree with our Terms
                          &amp; Conditions, and Privacy and Cookie Policy.
                        </div>
                      </div>
                      <div className="col-12 col-md">
                        {/* Newsletter */}
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="registerNewsletter"
                              type="checkbox"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="registerNewsletter"
                            >
                              Sign me up for the Newsletter!
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Button */}
                        <Button loading={loading} onClick={onRegister}>
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
