import { useCart } from "@/hooks/useCart";
import { removeCartItemAction, toggleCheckoutItemAction, updateCartItemAction } from "@/store/cart";
import { cn, currency } from "@/utils";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox";
import { Link } from "react-router-dom";
import { PATH } from "@/config/path";
import { Popconfirm } from "../PopConfirm";

export const CartItem = ({ footer, hideAction, allowSelect, productId, product, quantity, ...props }) => {
  const dispatch = useDispatch();
  const [_quantity, setQuantity] = useState(quantity);
  const {
    loading,
    preCheckoutData: { listItems },
  } = useCart();
  const _loading = loading[productId] || false;
  const [openPopconfirm, setOpenPopconfirm] = useState(false);
  const [openPopconfirmQuantity, setOpenPopconfirmQuantity] = useState(false);

  useEffect(() => {
    if (_quantity != quantity) {
      setQuantity(quantity);
    }
  }, [quantity]);
  const onChangeQuantityCurry = (val) => () => {
    if (val === 0) {
      dispatch(removeCartItemAction(productId));
    } else {
      setQuantity(val);
      dispatch(
        updateCartItemAction({
          productId,
          quantity: val,
        })
      );
    }
  };

  const onUpdateQuantity = (val) => {
    dispatch(
      updateCartItemAction({
        productId,
        quantity: val,
      })
    );
  };

  const onSelectCartItem = (checked) => {
    dispatch(
      toggleCheckoutItemAction({
        productId,
        checked,
      })
    );
  };

  const selected = !!listItems.find((e) => e === productId);

  return (
    <Spin spinning={_loading}>
      <li className={cn("list-group-item", props.className)}>
        <div className="row align-items-center">
          <div className="col-4 d-flex flex align-items-center gap-2">
            {allowSelect && (
              <Checkbox checked={selected} onChange={onSelectCartItem} />
            )}
            {/* Image */}
            <Link onClick={() => setOpenCartDrawer(false)} to={PATH.Product}>
              <img
                className="img-fluid"
                src={product.thumbnail_url}
                alt="..."
              />
            </Link>
          </div>
          <div className="col-8">
            {/* Title */}
            <p className="font-size-sm font-weight-bold mb-2">
              <a className="text-body" href="./product">
                {product.name}
              </a>{" "}
              <br />
              <span className="cart-product-price">
                {product.real_price < product.price ? (
                  <>
                    <span
                      className="text-primary sale mr-2"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {currency(product.real_price)}
                    </span>
                    <span className="font-size-xs text-gray-350 text-decoration-line-through">
                      {currency(product.price)}
                    </span>
                  </>
                ) : (
                  <span className="text-primary sale">
                    {currency(product.real_price)}
                  </span>
                )}
              </span>
            </p>
            {/*Footer */}
            {!hideAction && (
              <div className="d-flex align-items-center">
                {/* Select */}
                <div className="btn-group btn-quantity">
                  <Popconfirm
                    open={openPopconfirmQuantity}
                    onOpenChange={(visible) =>
                      setOpenPopconfirmQuantity(visible)
                    }
                    disabled={_quantity > 1}
                    okText="Yah Sure!"
                    showCancel={false}
                    placement="bottomRight"
                    title="Alert!"
                    description="Do you want to remove this product?"
                    onConfirm={() => {
                      setOpenPopconfirmQuantity(false);
                      onChangeQuantityCurry(0)();
                    }}
                  >
                    <button
                      onClick={
                        _quantity > 1
                          ? onChangeQuantityCurry(_quantity - 1)
                          : undefined
                      }
                      className="btn"
                    >
                      -
                    </button>
                  </Popconfirm>

                  <input
                    value={_quantity}
                    onChange={(ev) => setQuantity(ev.target.value)}
                    onBlur={(ev) => {
                      let val = parseInt(ev.target.value);
                      if (!val) {
                        val = 1;
                        setQuantity(val);
                      }

                      if (val !== quantity) {
                        onUpdateQuantity(val);
                      }
                    }}
                  />
                  <button
                    onClick={onChangeQuantityCurry(_quantity + 1)}
                    className="btn"
                  >
                    +
                  </button>
                </div>
                {/* Remove */}
                <Popconfirm
                  open={openPopconfirm}
                  onOpenChange={(visible) => setOpenPopconfirm(visible)}
                  okText="Yah Sure!"
                  showCancel={false}
                  placement="bottomRight"
                  title="Alert!"
                  description="Do you want to remove this product?"
                  onConfirm={() => {
                    setOpenPopconfirm(false);
                    onChangeQuantityCurry(0)();
                  }}
                >
                  <a
                    onClick={(ev) => ev.preventDefault()}
                    className="font-size-xs text-gray-400 ml-auto"
                    href="#!"
                  >
                    <i className="fe fe-x" /> Remove
                  </a>
                </Popconfirm>
              </div>
            )}
            {footer}
          </div>
        </div>
      </li>
    </Spin>
  );
};
