import { Portal } from "@/components/Portal";
import { PROFILE_TITLE_ID } from "@/config";
import { PATH } from "@/config/path";
import React from "react";
import { Link } from "react-router-dom";

export const Order = () => {
  return (
    <>
      <Portal selector={PROFILE_TITLE_ID}>My Orders</Portal>
      <div className="nav mb-10">
        <a className="nav-link active" href="#tab1" data-toggle="tab">
          All Orders
        </a>
        <a className="nav-link" href="#tab2" data-toggle="tab">
          Processing
        </a>
        <a className="nav-link" href="#tab2" data-toggle="tab">
          Confirmed
        </a>
        <a className="nav-link" href="#tab3" data-toggle="tab">
          Shipping
        </a>
        <a className="nav-link" href="#tab4" data-toggle="tab">
          Delivered
        </a>
        <a className="nav-link" href="#tab5" data-toggle="tab">
          Cancelled
        </a>
      </div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab1">
          {/* Order */}
          <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
              {/* Info */}
              <div className="card card-sm">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Order ID:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        871090437
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Ordered date:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        <time dateTime="2019-09-25">19 May, 2023</time>
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Status:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        Waiting for confirm
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Total price:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        $75.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="form-row mb-4 mb-lg-0">
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-11.jpg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="flex justify-end gap-3">
                    <a className="btn btn-xs btn-outline-dark" href="#!">
                      Cancel
                    </a>
                    <a
                      className="btn btn-xs btn-outline-dark"
                      href="account-order.html"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="tab2">
          {/* Order */}
          <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
              {/* Info */}
              <div className="card card-sm">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Order ID:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        871090437
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Ordered date:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        <time dateTime="2019-09-25">19 May, 2023</time>
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Status:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        Waiting for confirm
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Total price:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        $75.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="form-row mb-4 mb-lg-0">
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-11.jpg)",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="flex justify-end gap-3">
                    <a className="btn btn-xs btn-outline-dark" href="#!">
                      Cancel
                    </a>
                    <a
                      className="btn btn-xs btn-outline-dark"
                      href="account-order.html"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="tab3">
          {/* Order */}
          <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
              {/* Info */}
              <div className="card card-sm">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Order ID:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        673290789
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Ordered date:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        <time dateTime="2019-09-25">19 May, 2023</time>
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Status:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        Waiting for shipping
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Total price:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        $259.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="form-row mb-4 mb-lg-0">
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-5.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-112.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-7.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div className="embed-responsive embed-responsive-1by1 bg-light">
                        <Link
                          className="embed-responsive-item embed-responsive-item-text text-reset"
                          to={PATH.Product}
                        >
                          <div className="font-size-xxs font-weight-bold">
                            +2 <br /> Pics
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="flex justify-end gap-2">
                    {/* Button */}
                    <a
                      className="btn btn-xs btn-outline-dark inline-block"
                      href="account-order.html"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="tab4">
          {/* Order */}
          <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
              {/* Info */}
              <div className="card card-sm">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Order ID:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        891230563
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Ordered date:</h6>
                      {/* Text */}
                      <p className="mb-lg-0 font-size-sm font-weight-bold">
                        <time dateTime="2019-09-25">19 May, 2023</time>
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Status:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        Delivered
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      {/* Heading */}
                      <h6 className="heading-xxxs text-muted">Total price:</h6>
                      {/* Text */}
                      <p className="mb-0 font-size-sm font-weight-bold">
                        $69.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="form-row mb-4 mb-lg-0">
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-5.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-112.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div
                        className="embed-responsive embed-responsive-1by1 bg-cover"
                        style={{
                          backgroundImage: "url(/img/products/product-7.jpg)",
                        }}
                      />
                    </div>
                    <div className="col-3">
                      {/* Image */}
                      <div className="embed-responsive embed-responsive-1by1 bg-light">
                        <a
                          className="embed-responsive-item embed-responsive-item-text text-reset"
                          href="#!"
                        >
                          <div className="font-size-xxs font-weight-bold">
                            +2 <br /> Pics
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="flex justify-end gap-3">
                    <a className="btn btn-xs btn-outline-dark" href="#!">
                      Repurchase
                    </a>
                    <a
                      className="btn btn-xs btn-outline-dark"
                      href="account-order.html"
                    >
                      Details
                    </a>
                    <a
                      className="btn btn-xs btn-outline-dark"
                      href="account-order.html"
                    >
                      Return
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="tab5">
          <div className="modal-body flex-grow-0 my-auto">
            {/* Heading */}
            <h6 className="mb-7 text-center">Your order list is empty</h6>
            {/* Button */}
            <Link className="btn btn-block btn-outline-dark" to={PATH.Product}>
              Continue Shopping
            </Link>
          </div>
          {/* <div className="flex items-center flex-col gap-5 text-center">
            <img width={200} src="/img/empty-order.png" alt />
            <p>Chưa có đơn hàng nào</p>
          </div> */}
        </div>
      </div>
      {/* Pagination */}
      <nav className="d-flex justify-content-center justify-content-md-end mt-10">
        <ul className="pagination pagination-sm text-gray-400">
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-left" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <i className="fa fa-caret-right" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
