import { Counter } from '@/components/Counter';
import { PATH } from '@/config/path';
import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      {/* CATEGORIES */}
      <section>
        <div
          className="row no-gutters d-block d-lg-flex flickity flickity-lg-none"
          data-flickity='{"watchCSS": true}'
        >
          {/* Item */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(./img/covers/computer-1.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Computer</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link
                  className="btn btn-white stretched-link"
                  to={PATH.Product}
                >
                  Computer Shop <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(./img/covers/smartphone-1.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Smartphone</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link
                  className="btn btn-white stretched-link"
                  to={PATH.Product}
                >
                  Smartphone Shop <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
            style={{ backgroundImage: "url(./img/covers/mouse-1.jpg)" }}
          >
            <div
              className="card bg-dark-5 bg-hover text-white text-center"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body mt-auto mb-n11 py-8">
                {/* Heading */}
                <h1 className="mb-0 font-weight-bolder">Mouse</h1>
              </div>
              <div className="card-body mt-auto py-8">
                {/* Button */}
                <Link
                  className="btn btn-white stretched-link"
                  to={PATH.Product}
                >
                  Mouse Shop <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="pt-7">
        <div className="container">
          <div className="row pb-7 border-bottom">
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
      {/* BEST PICKS */}
      <section className="pt-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              {/* Preheading */}
              <h6 className="heading-xxs mb-3 text-gray-400">New Collection</h6>
              {/* Heading */}
              <h2 className="mb-4">Best Picks 2019</h2>
              {/* Subheading */}
              <p className="mb-10 text-gray-500">
                Explode many new features, functions, applications, and
                experiences.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
              {/* Card */}
              <div
                className="card mb-7 text-white"
                style={{
                  minHeight: "400px",
                  backgroundImage: "url(./img/products/product-1.jpg)",
                }}
              >
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage: "url(./img/products/product-1.jpg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto text-center">
                  {/* Heading */}
                  <h4 className="mb-0">Gaming Mouse's Collection</h4>
                  {/* Link */}
                  <Link
                    className="btn btn-link stretched-link text-reset"
                    to={PATH.Product}
                  >
                    Shop Now <i className="fe fe-arrow-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
              {/* Card */}
              <div
                className="card mb-7 text-body"
                style={{ minHeight: "400px" }}
              >
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage: "url(./img/products/product-2.jpg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto px-md-10 text-center text-md-left">
                  {/* Circle */}
                  <div className="card-circle card-circle-lg card-circle-right">
                    <strong>save</strong>
                    <span className="font-size-h4 font-weight-bold">30%</span>
                  </div>
                  {/* Heading */}
                  <h4 className="mb-0">IPad's</h4>
                  {/* Link */}
                  <Link
                    className="btn btn-link stretched-link px-0 text-reset"
                    to={PATH.Product}
                  >
                    Shop Now <i className="fe fe-arrow-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
              {/* Card */}
              <div
                className="card mb-7 mb-md-0 text-body"
                style={{ minHeight: "400px" }}
              >
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage: "url(./img/products/product-3.jpg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto px-md-10 text-center text-md-left">
                  {/* Heading */}
                  <h4 className="mb-0">Computer For Work / Gaming</h4>
                  {/* Link */}
                  <Link
                    className="btn btn-link stretched-link px-0 text-reset"
                    to={PATH.Product}
                  >
                    Shop Now <i className="fe fe-arrow-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
              {/* Card */}
              <div className="card text-white" style={{ minHeight: "400px" }}>
                {/* Background */}
                <div className="card-bg">
                  <div
                    className="card-bg-img bg-cover"
                    style={{
                      backgroundImage: "url(./img/products/product-4.jpg)",
                    }}
                  />
                </div>
                {/* Body */}
                <div className="card-body my-auto text-center">
                  {/* Heading */}
                  <h4 className="mb-0">Laptop</h4>
                  {/* Link */}
                  <Link
                    className="btn btn-link stretched-link text-reset"
                    to={PATH.Product}
                  >
                    Shop Now <i className="fe fe-arrow-right ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TOP SELLERS */}
      {/* <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-4 text-center">Top month Sellers</h2>
              <div className="nav justify-content-center mb-10">
                <a
                  className="nav-link active"
                  href="#topSellersTab"
                  data-toggle="tab"
                >
                  Computer
                </a>
                <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                  Smartphone
                </a>
                <a className="nav-link" href="#topSellersTab" data-toggle="tab">
                  Mouse
                </a>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="topSellersTab">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="badge badge-white card-badge card-badge-left text-uppercase">
                      New
                    </div>
                    <div className="card-img">
                      <Link className="card-img-hover" to={PATH.Product}>
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-120.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-5.jpg"
                          alt="..."
                        />
                      </Link>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Shoes
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Leather mid-heel Sandals
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$129.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="card-img">
                      <Link className="card-img-hover" to={PATH.Product}>
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-121.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-6.jpg"
                          alt="..."
                        />
                      </Link>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Dresses
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Cotton floral print Dress
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$40.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                      Sale
                    </div>
                    <div className="card-img">
                      <Link className="card-img-hover" to={PATH.Product}>
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-122.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-7.jpg"
                          alt="..."
                        />
                      </Link>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Shoes
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Leather Sneakers
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">
                          $85.00
                        </span>
                        <span className="text-primary">$85.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a href="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-8.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Tops
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Cropped cotton Top
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$29.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="card-img">
                      <a href="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-9.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Dresses
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Floral print midi Dress
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$50.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="badge badge-dark card-badge card-badge-left text-uppercase">
                      Sale
                    </div>
                    <div className="card-img">
                      <Link className="card-img-hover" to={PATH.Product}>
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-123.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-10.jpg"
                          alt="..."
                        />
                      </Link>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Bags
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Suede cross body Bag
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <span className="font-size-xs text-gray-350 text-decoration-line-through">
                          $79.00
                        </span>
                        <span className="text-primary">$49.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="card-img">
                      <Link className="card-img-hover" to={PATH.Product}>
                        <img
                          className="card-img-top card-img-back"
                          src="/img/products/product-124.jpg"
                          alt="..."
                        />
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-11.jpg"
                          alt="..."
                        />
                      </Link>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Skirts
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Printed A-line Skirt
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$79.00</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card mb-7">
                    <div className="badge badge-white card-badge card-badge text-uppercase">
                      New
                    </div>
                    <div className="card-img">
                      <a href="#!">
                        <img
                          className="card-img-top card-img-front"
                          src="/img/products/product-12.jpg"
                          alt="..."
                        />
                      </a>
                      <div className="card-actions">
                        <span className="card-action"></span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart" />
                          </button>
                        </span>
                        <span className="card-action">
                          <button
                            className="btn btn-xs btn-circle btn-white-primary"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart" />
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <div className="font-size-xs">
                        <Link className="text-muted" to={PATH.Product}>
                          Shoes
                        </Link>
                      </div>
                      <div className="font-weight-bold">
                        <Link className="text-body" to={PATH.Product}>
                          Heel strappy Sandals
                        </Link>
                      </div>
                      <div className="font-weight-bold text-muted">$90.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="mt-7 text-center">
                <Link className="link-underline" to={PATH.Product}>
                  Discover more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* COUNTDOWN */}
      <section
        className="py-13 bg-cover mt-13"
        style={{ backgroundImage: "url(/img/covers/cover-4.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-md-8 col-lg-6">
              <h3 className="mb-7">
                Get -50% from <br />
                Summer Collection
              </h3>
              <Counter />
              <Link className="btn btn-dark" to={PATH.Product}>
                Shop Now <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* REVIEWS */}
      {/* <section className="py-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
              Preheading
              <h6 className="heading-xxs mb-3 text-gray-400">
                What buyers say
              </h6>
              Heading
              <h2 className="mb-10">Latest buyers Reviews</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              Slider
              <FlickitySlider />
            </div>
          </div>
        </div>
      </section> */}
      {/* BRANDS */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h2 className="mb-3">@shopper</h2>
              {/* Subheading */}
              <p className="mb-10 font-size-lg text-gray-500">
                Explode many new features, functions, applications, and
                experiences.
              </p>
            </div>
          </div>
          <div className="row mx-n1 mb-10">
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card mb-2">
                {/* Image */}
                <img
                  src="/img/products/product-16.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card mb-2">
                {/* Image */}
                <img
                  src="/img/products/product-17.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card mb-2">
                {/* Image */}
                <img
                  src="/img/products/product-18.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card mb-2">
                {/* Image */}
                <img
                  src="/img/products/product-19.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card">
                {/* Image */}
                <img
                  src="/img/products/product-20.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md px-1">
              {/* Card */}
              <div className="card">
                {/* Image */}
                <img
                  src="/img/products/product-21.jpg"
                  alt="..."
                  className="card-img"
                />
                {/* Overlay */}
                <Link
                  className="card-img-overlay card-img-overlay-hover align-items-center bg-dark-40"
                  to={PATH.BlogPost}
                >
                  <p className="my-0 font-size-xxs text-center text-white">
                    <i className="fe fe-heart mr-2" /> 248{" "}
                    <i className="fe fe-message-square mr-2 ml-3" /> 7
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/mango.svg"
                alt="..."
                className="img-fluid mb-7 mb-md-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/zara.svg"
                alt="..."
                className="img-fluid mb-7 mb-md-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/reebok.svg"
                alt="..."
                className="img-fluid mb-7 mb-md-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/asos.svg"
                alt="..."
                className="img-fluid mb-7 mb-md-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/stradivarius.svg"
                alt="..."
                className="img-fluid mb-6 mb-sm-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/adidas.svg"
                alt="..."
                className="img-fluid mb-6 mb-sm-0"
              />
            </div>
            <div className="col-4 col-sm-3 col-md text-center">
              {/* Brand */}
              <img
                src="/img/brands/gray-350/bershka.svg"
                alt="..."
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
