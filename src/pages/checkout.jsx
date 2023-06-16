import { Button } from "@/components/Button";
import { CartItem } from "@/components/CartItem";
import { Field } from "@/components/Field";
import { PATH } from "@/config/path";
import { useCart } from "@/hooks/useCart";
import { useForm } from "@/hooks/useForm";
// import { useQuery } from "@/hooks/useQuery";
// import { cartService } from "@/services/cart";
import { cartActions, removeCartItemAction } from "@/store/cart";
// import { userService } from "@/services/user";
import { currency, handleError, regexp, required } from "@/utils";
import { Spin } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const addressRules = {
  fullName: [required()],
  email: [required(), regexp("email")],
  phone: [required(), regexp("phone")],
  district: [required()],
  province: [required()],
  address: [required()],
};

export const Checkout = () => {
  const { preCheckoutResponse, preCheckoutLoading, preCheckoutData } = useCart();
  const noteRef = useRef()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [address, setAddress] = useState()

  // const saveAddress = async () => {
  //   const res = await userService.getAddress()
  //   setAddress(res.data)
  //   address === res.data
  // }

  // const { loading, refetch: checkoutService } = useQuery({
  //   queryFn: ({params}) => cartService.checkout(...params)
  // })

  useEffect(() => {
    if (!preCheckoutResponse.listItems) {
      navigate(PATH.ShoppingCart);
    }
  }, []);

  const onPlaceOrder = async () => {
    // const _address = saveAddress()

    if (addressForm.validate()) {
      // _address = addressForm.values;
      // return addressForm.values
      navigate(PATH.OrderCompleted);
      console.log(preCheckoutData.listItems);
      dispatch(removeCartItemAction(preCheckoutData.listItems));
    }

    // checkoutService({
    //   shipping: {
    //     shippingMethods: preCheckoutData.shippingMethods,
    //     fullName: addressForm.values.fullName,
    //     phone: addressForm.values.phone,
    //     email: addressForm.values.email,
    //     district: addressForm.values.district,
    //     province: addressForm.values.province,
    //     address: addressForm.values.address,
    //   },
    //   listItems: preCheckoutData.listItems,
    //   promotionCode: preCheckoutData.promotionCode,
    //   payment: preCheckoutResponse.paymentMethods,
    //   note: noteRef.current,
    // });
  }

  const addressForm = useForm(addressRules);

  const { promotion, listItems } = preCheckoutResponse;

  return (
    <div>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-4">Checkout</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="max-w-[300px] mb-7">
                <Link
                  to={PATH.ShoppingCart}
                  className="btn btn-outline-dark btn-xs w-full"
                >
                  <i className="fe fe-arrow-left mr-2" /> Back to shopping cart
                </Link>
              </div>
              {/* Form */}
              <form>
                {/* Heading */}
                <h6 className="mb-7">Shipping Details</h6>
                {/* Form */}
                <div className="row">
                  <div className="col-12">
                    <Field
                      label="Full Name *"
                      placeholder="Full Name *"
                      {...addressForm.register("fullName")}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field
                      label="Phone Number *"
                      placeholder="Phone Number *"
                      {...addressForm.register("phone")}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field
                      label="Email Address *"
                      placeholder="Email Address *"
                      {...addressForm.register("email")}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field
                      label="District *"
                      placeholder="District"
                      {...addressForm.register("district")}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <Field
                      label="Province / City *"
                      placeholder="Province / City"
                      {...addressForm.register("province")}
                    />
                  </div>
                  <div className="col-12">
                    <Field
                      label="Address *"
                      placeholder="Address "
                      {...addressForm.register("address")}
                    />
                  </div>
                </div>
              </form>
              {/* Heading */}
              <h6 className="mb-7">Payment</h6>
              {/* List group */}
              <div className="list-group list-group-sm mb-7">
                <div className="list-group-item">
                  {/* Radio */}
                  <div className="custom-control custom-radio">
                    {/* Input */}
                    <input
                      className="custom-control-input"
                      id="checkoutPaymentCard"
                      name="payment"
                      type="radio"
                      data-toggle="collapse"
                      data-action="show"
                      data-target="#checkoutPaymentCardCollapse"
                    />
                    {/* Label */}
                    <label
                      className="custom-control-label font-size-sm text-body text-nowrap"
                      htmlFor="checkoutPaymentCard"
                    >
                      Credit Card{" "}
                      <img
                        className="ml-2"
                        src="/img/brands/color/cards.svg"
                        alt="..."
                      />
                    </label>
                  </div>
                </div>
                <div className="list-group-item">
                  {/* Radio */}
                  <div className="custom-control custom-radio">
                    {/* Input */}
                    <input
                      className="custom-control-input"
                      id="checkoutPaymentPaypal"
                      name="payment"
                      type="radio"
                      data-toggle="collapse"
                      data-action="hide"
                      data-target="#checkoutPaymentCardCollapse"
                      checked={true}
                    />
                    {/* Label */}
                    <label
                      className="custom-control-label font-size-sm text-body text-nowrap"
                      htmlFor="checkoutPaymentPaypal"
                    >
                      Trả tiền khi nhận hàng
                    </label>
                  </div>
                </div>
              </div>
              {/* Notes */}
              <textarea
                onChange={(ev) => (noteRef.current = ev.target.value)}
                className="form-control form-control-sm mb-9 mb-md-0 font-size-xs"
                rows={5}
                placeholder="Order Notes (optional)"
                defaultValue={""}
              />
            </div>
            <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
              {/* Heading */}
              <h6 className="mb-7">Order Items (3)</h6>
              {/* Divider */}
              <hr className="mt-7 mb-0" />
              {/* List group */}
              <div className="product-card">
                <div className="card-body">
                  <ul className="list-group list-group-lg list-group-flush">
                    {listItems?.map((e) => (
                      <CartItem
                        className="px-0"
                        hideAction
                        key={e.productId}
                        {...e}
                        footer={
                          <>
                            x {e.quantity} = {currency(e.price)} VND
                          </>
                        }
                      />
                    ))}
                  </ul>
                </div>
              </div>
              {/* Card */}
              <div className="card mb-9 bg-light">
                <Spin spinning={preCheckoutLoading}>
                  <div className="card-body">
                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                      <li className="list-group-item d-flex">
                        <span>Subtotal</span>
                        <span className="ml-auto font-size-sm">
                          {currency(preCheckoutResponse?.subTotal)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex">
                        <span>Promotion</span>
                        <span className="ml-auto font-size-sm">
                          {promotion?.discount > 0 ? "- " : undefined}{" "}
                          {currency(promotion?.discount)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex">
                        <span>Tax</span>
                        <span className="ml-auto font-size-sm">
                          {currency(preCheckoutResponse?.tax)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex font-size-lg font-weight-bold">
                        <span>Total</span>
                        <span className="ml-auto font-size-sm">
                          {currency(preCheckoutResponse?.total)}
                        </span>
                      </li>
                    </ul>
                  </div>
                </Spin>
              </div>
              {/* Disclaimer */}
              <p className="mb-7 font-size-xs text-gray-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              {/* Button */}
              <Button style={{ width: "100%" }} onClick={onPlaceOrder} >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-light py-9">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-truck font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="heading-xxs mb-1">Free shipping</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    From all orders over $100
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-repeat font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Free returns</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    Return money within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-md-0">
                {/* Icon */}
                <i className="fe fe-lock font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Secure shopping</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    You're in safe hands
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex">
                {/* Icon */}
                <i className="fe fe-tag font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Over 10,000 Styles</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    We have everything you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
