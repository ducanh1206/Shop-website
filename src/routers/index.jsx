import { Home } from "@/pages";
import { MainLayouts } from "../layouts/MainLayouts";
import { Page404 } from "@/pages/404";
import { PATH } from "@/config/path";
import { Product } from "@/pages/product";
import { ViewCart } from "@/pages/shopping-cart";
import { Checkout } from "@/pages/checkout";
import { Account } from "@/pages/account";
import { ProductDetailPages } from "@/pages/[slug]";
import { PrivateRoute } from "@/components/PrivateRoute";
import { profile } from "./profile";
import { GuestRoute } from "@/components/GuestRoute";
import { OrderCompleted } from "@/pages/order-completed";
import { ContactUs } from "@/pages/contact-us";
import { Blog } from "@/pages/blog";
import { BlogPost } from "@/pages/blog-post";
import { Faq } from "@/pages/faq";
import { ShippingAndReturns } from "@/pages/shipping-and-returns";
import { StoreLocator } from "../pages/store-locator";

export const routers = [
  {
    element: <MainLayouts />,
    children: [
      {
        path: PATH.Home,
        element: <Home />,
      },

      {
        path: PATH.Product,
        element: <Product />,
      },

      {
        path: PATH.ProductDetail,
        element: <ProductDetailPages />,
      },

      {
        path: PATH.Category,
        element: <Product />,
      },

      {
        path: PATH.Blog,
        element: <Blog />,
      },

      {
        path: PATH.BlogPost,
        element: <BlogPost />,
      },

      {
        path: PATH.Faq,
        element: <Faq />,
      },
      {
        path: PATH.StoreLocator,
        element: <StoreLocator />,
      },

      {
        path: PATH.ShippingAndReturns,
        element: <ShippingAndReturns />,
      },

      {
        path: PATH.ShoppingCart,
        element: <ViewCart />,
      },

      {
        element: <PrivateRoute redirect={PATH.Account} />,
        children: profile,
        path: PATH.Profile.index,
      },

      {
        element: <GuestRoute redirect={PATH.Profile.index} />,
        path: PATH.Account,
        children: [
          {
            index: true,
            element: <Account />,
          },
        ],
      },

      {
        path: PATH.Checkout,
        element: <Checkout />,
      },

      {
        path: PATH.OrderCompleted,
        element: <OrderCompleted />,
      },

      {
        path: PATH.ContactUs,
        element: <ContactUs />,
      },

      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];
