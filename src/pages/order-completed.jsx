import { PATH } from "@/config/path";
import React from "react";
import { Link } from "react-router-dom";

export const OrderCompleted = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Icon */}
            <div className="mb-7 font-size-h1">❤️</div>
            {/* Heading */}
            <h2 className="mb-5">Your Order is Completed!</h2>
            {/* Text */}
            <p className="mb-7 text-gray-500">
              Your order has been completed. Your order details are shown for
              your personal accont.
            </p>
            {/* Button */}
            <div className="flex gap-2">
              <Link className="btn btn-dark mr-6" to={PATH.Profile.Order}>
                View My Orders
              </Link>
              <Link className="btn btn-dark" to={PATH.Product}>
                Continue Shoping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
