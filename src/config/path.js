const PROFILE = "/profile";

export const PATH = {
  Home: "/",
  Product: "/product",
  ProductDetail: "/:slug",
  Category: "/:slug/:id",
  ShoppingCart: "/shopping-cart",
  Checkout: "/checkout",
  Profile: {
    index: PROFILE,
    Order: PROFILE + "/order",
    Wishlist: PROFILE + "/wishlist",
    Address: PROFILE + "/address",
    AddressEdit: PROFILE + "/address-edit",
    Payment: PROFILE + "/payment",
  },
  Account: "/account",
  ContactUs: "/contact-us",
  OrderCompleted: "/order-completed",
  Blog: "/blog",
  BlogPost: "/blog-post",
  Faq: "/faq",
  ShippingAndReturns: "/shipping-and-returns",
  StoreLocator: "/store-locator",
  Page404: "/page404"
};
