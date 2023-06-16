import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { Portal } from "@/components/Portal";
import { PROFILE_TITLE_ID } from "@/config";
import { useAuthRedux } from "@/hooks/useAuthRedux";
import { useForm } from "@/hooks/useForm";
import { useQuery } from "@/hooks/useQuery";
import { userService } from "@/services/user";
import { setUserAction } from "@/store/auth";
import { confirm, regexp, required, validate } from "@/utils/validate";
import { handleError } from "@/utils/handleError";
import { DatePicker, message } from "antd";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { object } from "@/utils/object";
import { avatarDefault } from "@/config/assets";
import { fileService } from "@/services/file";
import { UploadFile } from "@/components/UploadFile";
import dayjs from "dayjs";
import { Radio } from "@/components/Radio";

const rules = {
  name: [required()],
  phone: [required(), regexp("phone")],
  currentPassword: [
    (_, forms) => {
      if (forms.newPassword) {
        const errorObj = validate(
          {
            currentPassword: [required()],
          },
          forms
        );
        return errorObj.currentPassword;
      }
    },
  ],

  newPassword: [
    (value, forms) => {
      if (forms.currentPassword) {
        if (forms.currentPassword === value)
          return "Please enter a different password than the old password !";
        const errorObj = validate(
          {
            newPassword: [required()],
          },
          forms
        );
        return errorObj.newPassword;
      }
    },
  ],
  confirmPassword: [confirm("newPassword")],
};

export const Profile = () => {
  const fileRef = useRef();
  const dispatch = useDispatch();
  const { user } = useAuthRedux();
  const userForm = useForm(rules, { initialValue: user });

  const { loading, refetch: updateProfileService } = useQuery({
    enabled: false,
    queryFn: ({ params }) => userService.updateProfile(...params),
  });

  const { loading: changePasswordLoading, refetch: changePasswordService } =
    useQuery({
      enabled: false,
      queryFn: ({ params }) => {
        userService.changePassword(...params);
      },
    });

  const onSubmit = async () => {
    const checkOldData = object.isEqual(
      user,
      userForm.values,
      "name",
      "phone",
      "birthday",
      "gender"
    );

    let avatar;
    if (fileRef.current) {
      const res = await fileService.uploadFIle(fileRef.current);

      if (res.link) {
        avatar = res.link;
      }
    }

    if (!avatar && !userForm.values.newPassword && checkOldData) {
      message.warning("Please enter to change information !");
      return;
    }

    if (userForm.validate()) {
      if (avatar || !checkOldData) {
        updateProfileService({
          ...userForm.values,
          avatar,
        }
        )
          .then((res) => {
            dispatch(setUserAction(res.data));
            fileRef.current = null;
            message.success("Update profile success!");
          })
          .catch(handleError);
      }

      if (userForm.values.newPassword) {
        changePasswordService({
          currentPassword: userForm.values.currentPassword,
          newPassword: userForm.values.newPassword,
        })
          .then(res => {
            userForm.setValues({
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
            message.success("Change password success !!!");
          })
          .catch(handleError);
      }
    }
  };

  return (
    <div>
      <Portal selector={PROFILE_TITLE_ID}>My Account</Portal>
      <div className="row">
        <div className="col-12">
          <UploadFile onChange={(file) => (fileRef.current = file)}>
            {(previewSrc, trigger) => (
              <div className="profile-avatar">
                <div className="wrap" onClick={trigger}>
                  <img
                    src={previewSrc || user.avatar || avatarDefault}
                    alt="avatar"
                  />
                  <i className="icon">
                    <img src="/img/icons/camera.svg" alt="icon" />
                  </i>
                </div>
              </div>
            )}
          </UploadFile>

        </div>
        <div className="col-12">
          <Field
            label="Full Name *"
            placeholder="Full Name *"
            {...userForm.register("name")}
          ></Field>
        </div>
        <div className="col-12">
          <Field
            label="Phone Number *"
            placeholder="Phone Number *"
            {...userForm.register("phone")}
          ></Field>
        </div>
        <div className="col-12">
          <Field
            label="Email Address *"
            placeholder="Email Address *"
            {...userForm.register("username")}
            disabled
          ></Field>
        </div>

        <div className="col-12">
          {/* Password */}
          <Field
            type="password"
            label="Current Password *"
            placeholder="Current Password *"
            {...userForm.register("currentPassword")}
            autoComplete="new-password"
          ></Field>
        </div>
        <div className="col-12 col-md-6">
          <Field
            type="password"
            label="New Password *"
            placeholder="New Password *"
            {...userForm.register("newPassword")}
            autoComplete="new-password"
          ></Field>
        </div>
        <div className="col-12 col-md-6">
          <Field
            type="password"
            label="Confirm Password *"
            placeholder="Confirm Password *"
            {...userForm.register("confirmPassword")}
            autoComplete="new-password"
          ></Field>
        </div>
        <div className="col-12 col-md-6">
          <Field
            label="Date of Birth"
            {...userForm.register("birthday")}
            renderField={(props) => (
              <DatePicker
                // format="DD/MM/YYYY"
                value={props.value ? dayjs(props.value) : undefined}
                onChange={(ev, date) => props.onChange(date)}
                className="form-control form-control-sm"
              ></DatePicker>
            )}
          ></Field>
        </div>
        <div className="col-12 col-md-6">
          {/* Gender */}
          <Field
            label="Gender"
            {...userForm.register("gender")}
            renderField={(props) => (
              <div className="btn-group-toggle">
                <Radio.Group
                  defaultValue={props.value}
                  onChange={(value) => props?.onChange?.(value)}
                >
                  <Radio.Toggle value="male">Male</Radio.Toggle>
                  <Radio.Toggle value="female">Female</Radio.Toggle>
                </Radio.Group>
              </div>
            )}
          ></Field>
        </div>
        <div className="col-12">
          {/* Button */}

          <Button onClick={onSubmit} loading={loading}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};
