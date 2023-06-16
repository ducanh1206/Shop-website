import { currency } from "@/utils/currency";
import { Skeleton } from "../SkeletonLoading";
import { useCategory } from "@/hooks/useCategories";
import { useDispatch } from "react-redux";
import { updateCartItemAction } from "@/store/cart";
import { productService } from "@/services/product";
import { message } from "antd";
import { handleError } from "@/utils";
import { PATH } from "@/config/path";
import { useCart } from "@/hooks/useCart";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { useAuthRedux } from "@/hooks/useAuthRedux";
import { useAuth } from "../AuthContext";
import { Popconfirm } from "../PopConfirm";

export const ProductCard = ({
  id,
  images,
  showRemove,
  name,
  price,
  real_price,
  slug,
  onRemoveWishlistSuccess,
  showWishlist,
  discount_rate,
  rating_average,
  review_count,
  categories,
}) => {
  const img1 = images[0]?.thumbnail_url;
  const img2 = images[1] ? images?.[1].thumbnail_url : img1;
  const category = useCategory(categories);
  const dispatch = useDispatch();
  const { cart } = useCart();
  const { user } = useAuthRedux();
  const navigate = useNavigate();

  const onAddWishlist = async () => {
    const key = `add-wishlist-${id}`;
    try {
      message.loading({
        key,
        content: `Adding product "${name}" into Wishlist`,
        duration: 0,
      });
      await productService.addWishlist(id);
      // await delay(6000)
      message.success({
        key,
        content: `Adding "${name}" to Wishlist Successfully!`,
      });
    } catch (err) {
      // console.log(key);
      // handleError(err, key);
      message.error({
        key,
        content: `"${name}" existed in wishlist`,
      });
    }
  };

  const onRemovewWishlist = async () => {
    const key = `remove-wishlist-${id}`;
    try {
      message.loading({
        key,
        content: `Deleting product "${name}" out of Wishlist`,
        duration: 0,
      });
      await productService.removeWishlist(id); //tien hanh add wishlist
      // await delay(6000)
      message.success({
        key,
        content: `Delete "${name}" out of wishlist Successfully!`
      });
      onRemoveWishlistSuccess?.(id)
    } catch (err) {
      // console.log(key);
      // handleError(err, key);
      message.error({
        key,
        content: `"${name}" existed in wishlist`,
      });
    }
  };

  const onAddCartItem = () => {
    if (user) {
      const { listItems } = cart;
      const product = listItems.find((e) => e.product.id === id);
      dispatch(
        updateCartItemAction({
          productId: id,
          quantity: product ? product.quantity + 1 : 1,
          showPopover: true,
        })
      );
    } else {
      navigate(PATH.Account);
    }
  };

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        {discount_rate > 0 && (
          <div className="card-sale badge badge-dark card-badge card-badge-left text-uppercase">
            - {discount_rate}%
          </div>
        )}
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <Link className="card-img-hover" to={`/${slug}`}>
            <img className="card-img-top card-img-back" src={img1} alt="..." />
            <img className="card-img-top card-img-front" src={img2} alt="..." />
          </Link>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action"></span>
            <span className="card-action">
              <button
                onClick={onAddCartItem}
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            {showWishlist && (
              <Popconfirm
                disabled={!!user}
                title="Announcement"
                description="Please log-in before add product into wishlist"
                onConfirm={() => navigate(PATH.Account)}
                okText="Login"
                // showCancel={false}
                okButtonProps={{ style: { height: 50 } }}
              >
                <span className="card-action">
                  <button
                    onClick={user ? onAddWishlist : undefined}
                    className="btn btn-xs btn-circle btn-white-primary"
                    data-toggle="button"
                  >
                    <i className="fe fe-heart" />
                  </button>
                </span>
              </Popconfirm>
            )}

            {showRemove && (
              <span className="card-action">
                <button
                  onClick={onRemovewWishlist}
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-toggle="button"
                >
                  <i className="fe fe-x" />
                </button>
              </span>
            )}
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            {category && (
              <a className="text-muted" href="/product">
                {category.title}
              </a>
            )}
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body card-product-name" href="product.html">
              {name}
            </a>
          </div>
          <div className="card-product-rating">
            {review_count > 0 && (
              <>
                {rating_average}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  size={14}
                  color="#fdd836"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(253, 216, 54)" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  size={14}
                  color="#fdd836"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(253, 216, 54)" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  size={14}
                  color="#fdd836"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(253, 216, 54)" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  size={14}
                  color="#fdd836"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(253, 216, 54)" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  size={14}
                  color="#fdd836"
                  height={14}
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(253, 216, 54)" }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                ({review_count} reviews)
              </>
            )}
          </div>
          {/* Price */}
          <div className="card-product-price">
            {real_price < price ? (
              <>
                <span className="text-primary sale mr-2">
                  {currency(real_price)}
                </span>
                <span className="font-size-xs text-gray-350 text-decoration-line-through">
                  {currency(price)}
                </span>
              </>
            ) : (
              <span className="text-primary sale">{currency(real_price)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCardLoading = () => {
  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <Skeleton height={300} />
          </a>
          
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="/product">
              <Skeleton width={150} height="100%" />
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body card-product-name" href="product.html">
              <Skeleton height="100%" />
            </a>
          </div>
          <div className="card-product-rating">
            <Skeleton width={150} height="100%" />
          </div>
          {/* Price */}
          <div className="card-product-price">
            <Skeleton width={100} height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};
