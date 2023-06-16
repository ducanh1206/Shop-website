import { PATH } from "@/config/path";
import { useCart } from "@/hooks/useCart";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartDrawer } from "../CartDrawer";
import { useDispatch } from "react-redux";
import { SearchDrawer } from "../SearchDrawer";
import { Button, Popover } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { cartActions } from "@/store/cart";

export const Header = () => {
  const dispatch = useDispatch();
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const { cart, openCartOver } = useCart();
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false);
  return (
    <>
      <SearchDrawer
        open={openSearchDrawer}
        onClose={() => setOpenSearchDrawer(false)}
      ></SearchDrawer>
      <CartDrawer
        open={openCartDrawer}
        onClose={() => setOpenCartDrawer(false)}
      />
      <div>
        {/* MODALS */}
        {/* Newsletter: Horizontal */}
        <div
          className="modal fade"
          id="modalNewsletterHorizontal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Content */}
              <div className="row no-gutters">
                <div className="col-12 col-lg-5">
                  {/* Image */}
                  <img
                    className="img-fluid"
                    src="/img/covers/cover-25.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-12 col-lg-7 d-flex flex-column px-md-8">
                  {/* Body */}
                  <div className="modal-body my-auto py-10">
                    {/* Heading */}
                    <h4>Subscribe to Newsletter and get 15% Discount</h4>
                    {/* Text */}
                    <p className="mb-7 font-size-lg">On your next purchase</p>
                    {/* Form */}
                    <form>
                      <div className="form-row">
                        <div className="col">
                          {/* Input */}
                          <label
                            className="sr-only"
                            htmlFor="modalNewsletterHorizontalEmail"
                          >
                            Enter Email *
                          </label>
                          <input
                            className="form-control form-control-sm"
                            id="modalNewsletterHorizontalEmail"
                            type="email"
                            placeholder="Enter Email *"
                          />
                        </div>
                        <div className="col-auto">
                          {/* Button */}
                          <button className="btn btn-sm btn-dark" type="submit">
                            <i className="fe fe-send" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Footer */}
                  <div className="modal-footer pt-0">
                    {/* Checkbox */}
                    <div className="custom-control custom-checkbox">
                      {/* Input */}
                      <input
                        className="custom-control-input"
                        id="modalNewsletterHorizontalCheckbox"
                        type="checkbox"
                      />
                      {/* Label */}
                      <label
                        className="custom-control-label font-size-xs"
                        htmlFor="modalNewsletterHorizontalCheckbox"
                      >
                        Prevent this Pop-up
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter: Vertical */}
        <div
          className="modal fade"
          id="modalNewsletterVertical"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Body */}
              <div
                className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white"
                style={{ backgroundImage: "url(./img/covers/cover-26.jpg)" }}
              >
                {/* Heading */}
                <h4>Subscribe to Newsletter and get 15% Discount</h4>
                {/* Text */}
                <p className="mb-0 font-size-lg">On your next purchase</p>
              </div>
              {/* Body */}
              <div className="modal-body py-9">
                {/* Form */}
                <form>
                  <div className="form-row">
                    <div className="col">
                      {/* Input */}
                      <label
                        className="sr-only"
                        htmlFor="modalNewsletterVerticalEmail"
                      >
                        Enter Email *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="modalNewsletterVerticalEmail"
                        type="email"
                        placeholder="Enter Email *"
                      />
                    </div>
                    <div className="col-auto">
                      {/* Button */}
                      <button className="btn btn-sm btn-dark" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Footer */}
              <div className="modal-footer justify-content-center pt-0">
                {/* Checkbox */}
                <div className="custom-control custom-checkbox">
                  {/* Input */}
                  <input
                    className="custom-control-input"
                    id="modalNewsletterVerticalCheckbox"
                    type="checkbox"
                  />
                  {/* Label */}
                  <label
                    className="custom-control-label font-size-xs"
                    htmlFor="modalNewsletterVerticalCheckbox"
                  >
                    Prevent this Pop-up
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Password Reset */}
        <div
          className="modal fade"
          id="modalPasswordReset"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Header*/}
              <div className="modal-header line-height-fixed font-size-lg">
                <strong className="mx-auto">Forgot Password?</strong>
              </div>
              {/* Body */}
              <div className="modal-body text-center">
                {/* Text */}
                <p className="mb-7 font-size-sm text-gray-500">
                  Please enter your Email Address. You will receive a link to
                  create a new password via Email.
                </p>
                {/* Form */}
                <form>
                  {/* Email */}
                  <div className="form-group">
                    <label
                      className="sr-only"
                      htmlFor="modalPasswordResetEmail"
                    >
                      Email Address *
                    </label>
                    <input
                      className="form-control form-control-sm"
                      id="modalPasswordResetEmail"
                      type="email"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  {/* Button */}
                  <button className="btn btn-sm btn-dark">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Product */}
        <div
          className="modal fade"
          id="modalProduct"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Content */}
              <div className="container-fluid px-xl-0">
                <div className="row align-items-center mx-xl-0">
                  <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                    {/* Image */}
                    <img
                      className="img-fluid"
                      src="/img/products/product-7.jpg"
                      alt="..."
                    />
                    {/* Button */}
                    <Link
                      className="btn btn-sm btn-block btn-primary"
                      to={PATH.Product}
                    >
                      More Product Info <i className="fe fe-info ml-2" />
                    </Link>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                    {/* Heading */}
                    <h4 className="mb-3">Leather Sneakers</h4>
                    {/* Price */}
                    <div className="mb-7">
                      <span className="h5">$85.00</span>
                      <span className="font-size-sm">(In Stock)</span>
                    </div>
                    {/* Form */}
                    <form>
                      <div className="form-group">
                        {/* Label */}
                        <p>
                          Color:{" "}
                          <strong id="modalProductColorCaption">White</strong>
                        </p>
                        {/* Radio */}
                        <div className="mb-8 ml-n1">
                          <div className="custom-control custom-control-inline custom-control-img">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="modalProductColorOne"
                              name="modalProductColor"
                              data-toggle="form-caption"
                              data-target="#modalProductColorCaption"
                              defaultValue="White"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductColorOne"
                            >
                              <span
                                className="embed-responsive embed-responsive-1by1 bg-cover"
                                style={{
                                  backgroundImage:
                                    "url(./img/products/product-7.jpg)",
                                }}
                              />
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-img">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="modalProductColorTwo"
                              name="modalProductColor"
                              data-toggle="form-caption"
                              data-target="#modalProductColorCaption"
                              defaultValue="Black"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductColorTwo"
                            >
                              <span
                                className="embed-responsive embed-responsive-1by1 bg-cover"
                                style={{
                                  backgroundImage:
                                    "url(./img/products/product-49.jpg)",
                                }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        {/* Label */}
                        <p>
                          Size:{" "}
                          <strong>
                            <span id="modalProductSizeCaption">7.5</span> US
                          </strong>
                        </p>
                        {/* Radio */}
                        <div className="mb-2">
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeOne"
                              defaultValue={6}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeOne"
                            >
                              6
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeTwo"
                              defaultValue="6.5"
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                              disabled
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeTwo"
                            >
                              6.5
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeThree"
                              defaultValue={7}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeThree"
                            >
                              7
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeFour"
                              defaultValue="7.5"
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeFour"
                            >
                              7.5
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeFive"
                              defaultValue={8}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeFive"
                            >
                              8
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeSix"
                              defaultValue="8.5"
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeSix"
                            >
                              8.5
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeSeven"
                              defaultValue={9}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                              disabled
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeSeven"
                            >
                              9
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeEight"
                              defaultValue="9.5"
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                              disabled
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeEight"
                            >
                              9.5
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeNine"
                              defaultValue={10}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeNine"
                            >
                              10
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeTen"
                              defaultValue="10.5"
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeTen"
                            >
                              10.5
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeEleven"
                              defaultValue={11}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeEleven"
                            >
                              11
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeTwelve"
                              defaultValue={12}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeTwelve"
                            >
                              12
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeThirteen"
                              defaultValue={13}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeThirteen"
                            >
                              13
                            </label>
                          </div>
                          <div className="custom-control custom-control-inline custom-control-size mb-2">
                            <input
                              type="radio"
                              className="custom-control-input"
                              name="modalProductSize"
                              id="modalProductSizeFourteen"
                              defaultValue={14}
                              data-toggle="form-caption"
                              data-target="#modalProductSizeCaption"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="modalProductSizeFourteen"
                            >
                              14
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="form-row">
                          <div className="col-12 col-lg-auto">
                            {/* Quantity */}
                            <select className="custom-select mb-2">
                              <option value={1} selected>
                                1
                              </option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                          <div className="col-12 col-lg">
                            {/* Submit */}
                            <button
                              type="submit"
                              className="btn btn-block btn-dark mb-2"
                            >
                              Add to Cart{" "}
                              <i className="fe fe-shopping-cart ml-2" />
                            </button>
                          </div>
                          <div className="col-12 col-lg-auto">
                            {/* Wishlist */}
                            <button
                              className="btn btn-outline-dark btn-block mb-2"
                              data-toggle="button"
                            >
                              Wishlist <i className="fe fe-heart ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className="modal fixed-right fade"
          id="modalSidebar"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-vertical" role="document">
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Body */}
              <div className="modal-body px-10 my-auto">
                {/* Nav */}
                <ul
                  className="nav nav-vertical nav-unstyled font-size-h2"
                  id="sidebarNav"
                >
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="collapse"
                      href="#sidebarHome"
                    >
                      Home
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sidebarHome"
                      data-parent="#sidebarNav"
                    >
                      <ul className="list-styled font-size-lg py-3 mb-0">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Home}>
                            Default
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Classic
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Fashion
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Boxed
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Simple
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Asymmetric
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Sidenav
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Product}>
                            Landing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="collapse"
                      href="#sidebarCatalog"
                    >
                      Catalog
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sidebarCatalog"
                      data-parent="#sidebarNav"
                    >
                      <div className="row">
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5 font-weight-bold">Clothing</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg py-3">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                All Clothing
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Blouses &amp; Shirts
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Coats &amp; Jackets
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Dresses
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Hoodies &amp; Sweats
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Denim
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Jeans
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Jumpers &amp; Cardigans
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Leggings
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5 font-weight-bold">
                            Shoes &amp; Boots
                          </h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                All Shoes &amp; Boots
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Branded Shoes
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Boots
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Heels
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Trainers
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Sandals
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Shoes
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Wide Fit Shoes
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5 font-weight-bold">
                            Bags &amp; Accessories
                          </h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                All Bags &amp; Accessories
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Accessories
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Bags &amp; Purses
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Luggage
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Belts
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Hats
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Hair Accessories
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Jewellery
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Travel Accessories
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="collapse"
                      href="#sidebarShop"
                    >
                      Shop
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sidebarShop"
                      data-parent="#sidebarNav"
                    >
                      <div className="row">
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5">Shop</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Default
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Topbar
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Collapse
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Simple
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Masonry
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5">Product</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Default
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Images Left
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Image Grid
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Image Slider
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a className="list-styled-link" href="#">
                                Images Stacked
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5">Support</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.ShoppingCart}
                              >
                                Shopping Cart
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Checkout}
                              >
                                Checkout
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.OrderCompleted}
                              >
                                Order Completed
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.ShippingAndReturns}
                              >
                                Shipping &amp; Returns
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5">Account</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Order}
                              >
                                Order
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Order}
                              >
                                Orders
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Wishlist}
                              >
                                Wishlist
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.index}
                              >
                                Personal Info
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Address}
                              >
                                Addresses
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.AddressEdit}
                              >
                                Addresses: New
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Payment}
                              >
                                Payment
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Payment}
                              >
                                Payment: New
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Profile.Payment}
                              >
                                Payment: Choose
                              </Link>
                            </li>
                            <li className="list-styled-item">
                              <Link
                                className="list-styled-link"
                                to={PATH.Account}
                              >
                                Auth
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-12 py-3">
                          {/* Heading */}
                          <h6 className="mb-5">Modals</h6>
                          {/* Links */}
                          <ul className="list-styled font-size-lg">
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterHorizontal"
                              >
                                Newsletter: Horizontal
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalNewsletterVertical"
                              >
                                Newsletter: Vertical
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalProduct"
                              >
                                Product
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSearch"
                              >
                                Search
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalShoppingCart"
                              >
                                Shopping Cart
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalSizeChart"
                              >
                                Size Chart
                              </a>
                            </li>
                            <li className="list-styled-item">
                              <a
                                className="list-styled-link"
                                data-toggle="modal"
                                href="#modalWaitList"
                              >
                                Wait List
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="collapse"
                      href="#sidebarPages"
                    >
                      Pages
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sidebarPages"
                      data-parent="#sidebarNav"
                    >
                      <ul className="list-styled font-size-lg py-3 mb-0">
                        <li className="list-styled-item">
                          <Link
                            className="list-styled-link"
                            to={PATH.ContactUs}
                          >
                            About
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link
                            className="list-styled-link"
                            to={PATH.ContactUs}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link
                            className="list-styled-link"
                            to={PATH.StoreLocator}
                          >
                            Store Locator
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Faq}>
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    {/* Toggle */}
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="collapse"
                      href="#sidebarBlog"
                    >
                      Blog
                    </a>
                    {/* Collapse */}
                    <div
                      className="collapse"
                      id="sidebarBlog"
                      data-parent="#sidebarNav"
                    >
                      <ul className="list-styled font-size-lg py-3 mb-0">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.Blog}>
                            Blog
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to={PATH.BlogPost}>
                            Blog Post
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./docs/getting-started.html">
                      Docs
                    </a>
                  </li>
                </ul>
              </div>
              {/* Body */}
              <div className="moda-body px-10 py-9">
                {/* Social links */}
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="text-gray-350"
                      href="https://www.facebook.com/"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-gray-350"
                      href="https://www.youtube.com/"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-gray-350" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-gray-350"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-gray-350"
                      href="https://www.linkedin.com/"
                    >
                      <i className="fab fa-linkedin-m" />
                    </a>
                  </li>
                </ul>
                {/* Footer */}
                <div className="font-size-xxs text-gray-350">
                  © 2019 All rights reserved. Designed by Unvab.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Size Chart */}
        <div
          className="modal fade"
          id="modalSizeChart"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Header*/}
              <div className="modal-header line-height-fixed font-size-lg">
                <strong className="mx-auto">Size Chart</strong>
              </div>
              {/* Body */}
              <div className="modal-body border-bottom">
                {/* Header */}
                <div className="d-flex mb-7">
                  {/* Heading */}
                  <h5 className="mb-0">Clothing</h5>
                  {/* Toggles */}
                  <div
                    className="btn-group btn-group-toggle ml-auto"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                      <input
                        type="radio"
                        name="modalSizeChartUnitOne"
                        defaultChecked
                      />{" "}
                      IN
                    </label>
                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                      <input type="radio" name="modalSizeChartUnitOne" /> CM
                    </label>
                  </div>
                </div>
                {/* Table */}
                <div className="table-responsive">
                  <table className="table table-bordered table-sm table-hover mb-0">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US</th>
                        <th>Bust</th>
                        <th>Waist</th>
                        <th>Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XS</td>
                        <td>2</td>
                        <td>32</td>
                        <td>24 - 25</td>
                        <td>33 - 34</td>
                      </tr>
                      <tr>
                        <td>S</td>
                        <td>4</td>
                        <td>34 - 35</td>
                        <td>26 - 27</td>
                        <td>35 - 26</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>6</td>
                        <td>36 - 37</td>
                        <td>28 - 29</td>
                        <td>38 - 40</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>8</td>
                        <td>38 - 29</td>
                        <td>30 - 31</td>
                        <td>42 - 44</td>
                      </tr>
                      <tr>
                        <td>XL</td>
                        <td>10</td>
                        <td>40 - 41</td>
                        <td>32 - 33</td>
                        <td>45 - 47</td>
                      </tr>
                      <tr>
                        <td>XXL</td>
                        <td>12</td>
                        <td>42 - 43</td>
                        <td>34 - 35</td>
                        <td>48 - 50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Body */}
              <div className="modal-body">
                {/* Header */}
                <div className="d-flex mb-7">
                  {/* Heading */}
                  <h5 className="mb-0">Shoes</h5>
                  {/* Toggles */}
                  <div
                    className="btn-group btn-group-toggle ml-auto"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                      <input
                        type="radio"
                        name="modalSizeCharUnitTwo"
                        defaultChecked
                      />{" "}
                      IN
                    </label>
                    <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                      <input type="radio" name="modalSizeCharUnitTwo" /> CM
                    </label>
                  </div>
                </div>
                {/* Tables */}
                <div className="row">
                  <div className="col-12 col-lg-6">
                    {/* Table */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm table-hover mb-lg-0">
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>US</th>
                            <th>Foot Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>36</td>
                            <td>5</td>
                            <td>22.8</td>
                          </tr>
                          <tr>
                            <td>26.5</td>
                            <td>5.5</td>
                            <td>23.1</td>
                          </tr>
                          <tr>
                            <td>37</td>
                            <td>6</td>
                            <td>23.5</td>
                          </tr>
                          <tr>
                            <td>37.5</td>
                            <td>6.</td>
                            <td>23.5</td>
                          </tr>
                          <tr>
                            <td>38</td>
                            <td>7</td>
                            <td>24.1</td>
                          </tr>
                          <tr>
                            <td>38.5</td>
                            <td>7.5</td>
                            <td>24.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    {/* Table */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>US</th>
                            <th>Foot Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>36</td>
                            <td>5</td>
                            <td>22.8</td>
                          </tr>
                          <tr>
                            <td>39</td>
                            <td>8</td>
                            <td>24.1</td>
                          </tr>
                          <tr>
                            <td>40</td>
                            <td>9</td>
                            <td>25.4</td>
                          </tr>
                          <tr>
                            <td>40.5</td>
                            <td>9.5</td>
                            <td>25.7</td>
                          </tr>
                          <tr>
                            <td>41</td>
                            <td>10</td>
                            <td>26.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Wait List */}
        <div
          className="modal fade"
          id="modalWaitList"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              {/* Close */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="fe fe-x" aria-hidden="true" />
              </button>
              {/* Header*/}
              <div className="modal-header line-height-fixed font-size-lg">
                <strong className="mx-auto">Wait List</strong>
              </div>
              {/* Body */}
              <div className="modal-body">
                <div className="row mb-6">
                  <div className="col-12 col-md-3">
                    {/* Image */}
                    <Link to={PATH.Product}>
                      <img
                        className="img-fluid mb-7 mb-md-0"
                        src="/img/products/product-6.jpg"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="col-12 col-md-9">
                    {/* Label */}
                    <p>
                      <Link
                        className="font-weight-bold text-body"
                        to={PATH.Product}
                      >
                        Cotton floral print Dress
                      </Link>
                    </p>
                    {/* Radio */}
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeOne"
                        defaultValue={6}
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeOne"
                      >
                        3XS
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeTwo"
                        defaultValue="6.5"
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeTwo"
                      >
                        2XS
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeThree"
                        defaultValue={7}
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeThree"
                      >
                        XS
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeFour"
                        defaultValue="7.5"
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                        defaultChecked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeFour"
                      >
                        S
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeFive"
                        defaultValue={8}
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeFive"
                      >
                        M
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeSix"
                        defaultValue="8.5"
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeSix"
                      >
                        LG
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeSeven"
                        defaultValue={9}
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeSeven"
                      >
                        XL
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeEight"
                        defaultValue="9.5"
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeEight"
                      >
                        2XL
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeNine"
                        defaultValue={10}
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeNine"
                      >
                        3XL
                      </label>
                    </div>
                    <div className="custom-control custom-control-inline custom-control-size mb-2">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="modalWaitListSize"
                        id="modalWaitListSizeTen"
                        defaultValue="10.5"
                        data-toggle="form-caption"
                        data-target="#modalWaitListSizeCaption"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="modalWaitListSizeTen"
                      >
                        4XL
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    {/* Text */}
                    <p className="font-size-sm text-center text-gray-500">
                      Justo ut diam erat hendrerit morbi porttitor, per eu
                      curabitur diam sociis.
                    </p>
                  </div>
                </div>
                <div className="form-row mb-2">
                  <div className="col-12 col-md-6">
                    {/* Form group */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="listName">
                        Your Name
                      </label>
                      <input
                        className="form-control"
                        id="listName"
                        type="text"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Form group */}
                    <div className="form-group">
                      <label className="sr-only" htmlFor="listEmail">
                        Your Name
                      </label>
                      <input
                        className="form-control"
                        id="listEmail"
                        type="email"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    {/* Button */}
                    <button className="btn btn-dark" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NAVBAR */}
        <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
          <div className="container">
            {/* Promo */}
            <div className="mr-xl-8">
              <i className="fe fe-truck mr-2" />{" "}
              <span className="heading-xxxs">Free shipping worldwide</span>
            </div>
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#topbarCollapse"
              aria-controls="topbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="topbarCollapse">
              {/* Nav */}
              <ul className="nav nav-divided navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <img
                      className="mb-1 mr-1"
                      src="/img/flags/usa.svg"
                      alt="..."
                    />{" "}
                    United States
                  </a>
                  {/* Menu */}
                  <div className="dropdown-menu minw-0">
                    <a className="dropdown-item" href="#!">
                      <img
                        className="mb-1 mr-2"
                        src="/img/flags/usa.svg"
                        alt="USA"
                      />
                      United States
                    </a>
                    <a className="dropdown-item" href="#!">
                      <img
                        className="mb-1 mr-2"
                        src="/img/flags/canada.svg"
                        alt="Canada"
                      />
                      Canada
                    </a>
                    <a className="dropdown-item" href="#!">
                      <img
                        className="mb-1 mr-2"
                        src="/img/flags/germany.svg"
                        alt="Germany"
                      />
                      Germany
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    USD
                  </a>
                  {/* Menu */}
                  <div className="dropdown-menu minw-0">
                    <a className="dropdown-item" href="#!">
                      USD
                    </a>
                    <a className="dropdown-item" href="#!">
                      VND
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* Toggle */}
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    English
                  </a>
                  {/* Menu */}
                  <div className="dropdown-menu minw-0">
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                    <a className="dropdown-item" href="#">
                      Tiếng Việt
                    </a>
                  </div>
                </li>
              </ul>
              {/* Nav */}
              <ul className="nav navbar-nav mr-8">
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.ShippingAndReturns}>
                    Shipping
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Faq}>
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.ContactUs}>
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Nav */}
              <ul className="nav navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link text-gray-350"
                    href="https://www.facebook.com/"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="nav-item ml-xl-n4">
                  <a
                    className="nav-link text-gray-350"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item ml-xl-n4">
                  <a
                    className="nav-link text-gray-350"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="nav-item ml-xl-n4">
                  <a
                    className="nav-link text-gray-350"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            {/* Brand */}
            <Link className="navbar-brand" to={PATH.Home}>
              <img style={{ width: "50px" }} src="/img/logo.svg" />
              E-Commerce
            </Link>
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Collapse */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              {/* Nav */}
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Home}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Product}>
                    Product
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={PATH.Product}>
                    Laptop
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={PATH.Product}>
                    Computer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={PATH.Product}>
                    Sale Product
                  </Link>
                </li>
              </ul>
              {/* Nav */}
              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="modal"
                    href="#modalSearch"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setOpenSearchDrawer(true);
                    }}
                  >
                    <i className="fe fe-search" />
                  </a>
                </li>
                <li className="nav-item ml-lg-n4">
                  <Link className="nav-link" to={PATH.Profile.Wishlist}>
                    <i className="fe fe-heart" />
                  </Link>
                </li>
                <li className="nav-item ml-lg-n4">
                  <Popover
                    onOpenChange={(visible) => {
                      if (!visible) {
                        dispatch(cartActions.togglePopover(false));
                      }
                    }}
                    trigger={["click"]}
                    open={openCartOver}
                    placement="bottomRight"
                    content={
                      <>
                        <p className="mb-0 flex gap-2 items-center justify-center align-center">
                          <CheckCircleTwoTone
                            twoToneColor={"green"}
                            style={{
                              margin: "5px",
                              verticalAlign: "middle",
                              display: "inline",
                            }}
                          />
                          Add to cart successfully!
                        </p>
                        <Link
                          to={PATH.ShoppingCart}
                          onClick={() =>
                            dispatch(cartActions.togglePopover(false))
                          }
                          className="btn btn-xs btn-dark flex items-center justify-center gap-3 mt-2"
                        >
                          Check cart and checkout
                        </Link>
                      </>
                    }
                  >
                    <a
                      onClick={(ev) => {
                        ev.preventDefault();
                        setOpenCartDrawer(true);
                      }}
                      className="nav-link"
                      href="#modalShoppingCart"
                    >
                      <span data-cart-items={cart?.totalQuantity || undefined}>
                        <i className="fe fe-shopping-cart" />
                      </span>
                    </a>
                  </Popover>
                </li>
                <li className="nav-item ml-lg-n4">
                  <Link className="nav-link" to={PATH.Account}>
                    <i className="fe fe-user" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* PROMO */}
        <div className="py-3 bg-dark bg-pattern @@classList">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Text */}
                <div className="text-center text-white">
                  <span className="heading-xxs letter-spacing-xl">
                    ⚡️ Happy Holiday Deals on Everything ⚡️
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
