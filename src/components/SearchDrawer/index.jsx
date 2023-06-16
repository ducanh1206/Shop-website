import { productService } from "@/services/product";
import { currency, slugify } from "@/utils";
import { Drawer } from "antd";
import { Skeleton } from "../SkeletonLoading";
import { useQuery } from "@/hooks/useQuery";
import { useDebounce } from "@/hooks/useDebounce";
import queryString from "query-string";
import { PATH } from "@/config/path";
import { Link, generatePath } from "react-router-dom";
import { useCategories, useCategory } from "@/hooks/useCategories";

export const SearchDrawer = ({ open, onClose }) => {
  const [value, setValue] = useDebounce("");
  const { data: categories } = useCategories();
  const [categoryID, setCategoryId] = useDebounce(0);
  const category = useCategory(parseInt(categoryID))

  const qsSearch = queryString.stringify({
    fields: "thumbnail_url,name,real_price,price",
    limit: 5,
    categories: categoryID || undefined,
    name: value,
  });

  const { data, loading } = useQuery({
    queryKey: [qsSearch],
    queryFn: ({ signal }) => productService.getProduct(`?${qsSearch}`, signal),
    enabled: !!value,
  });

  const qs = queryString.stringify({
    search: value,
  });

  const linkViewAll = (categoryID ? generatePath(PATH.Category, {slug: slugify(category.title), id: category.id}) : PATH.Product) + `?${qs}`;

  return (
    <Drawer
      width={470}
      open={open}
      onClose={onClose}
      headerStyle={{ display: "none" }}
      bodyStyle={{ padding: 0 }}
    >
      <div className="modal-content">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="close  !outline-nones"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="fe fe-x" aria-hidden="true" />
        </button>
        {/* Header*/}
        <div className="modal-header line-height-fixed font-size-lg">
          <strong className="mx-auto">Search Products</strong>
        </div>
        {/* Body: Form */}
        <div className="modal-body">
          <div className="form-group">
            <label className="sr-only" htmlFor="modalSearchCategories">
              Categories:
            </label>
            <select
              onChange={(ev) => setCategoryId(ev.target.value)}
              className="custom-select"
              id="modalSearchCategories"
            >
              <option value={0}>All Categories</option>
              {categories?.data?.map((e) => (
                <option value={e.id} key={e.id}>
                  {e.title}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group input-group-merge">
            <input
              onChange={(ev) => {
                setValue(ev.target.value);
              }}
              className="form-control"
              type="search"
              placeholder="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-border" type="submit">
                <i className="fe fe-search" />
              </button>
            </div>
          </div>
        </div>
        {/* Body: Results (add `.d-none` to disable it) */}
        <div className="modal-body border-top font-size-sm">
          {/* Heading */}
          <p>Search Results:</p>
          {/* Items */}
          {!loading && !data && (
            <div className="modal-body border">
              <p className="mb-3 font-size-sm text-center">
                Find any products you want
              </p>
            </div>
          )}
          {loading ? (
            Array.from(Array(5)).map((_, i) => {
              <SearchItemLoading key={i}></SearchItemLoading>;
            })
          ) : data?.data?.length === 0 ? (
            <div className="modal-body border">
              <p className="mb-3 font-size-sm text-center">
                Nothing matches your search
              </p>
              <p className="mb-0 font-size-sm text-center">🥹</p>
            </div>
          ) : (
            data?.data?.map((e) => <SearchItem key={e.id} {...e}></SearchItem>)
          )}
          <Link
            onClick={onClose}
            className="btn btn-link px-0 text-reset"
            to={linkViewAll}
          >
            View All <i className="fe fe-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

const SearchItem = ({ name, real_price, price, thumbnail_url }) => {
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        {/* Image */}
        <img className="img-fluid" src={thumbnail_url} alt={name} />
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <a className="stretched-link text-body" href="./product.html">
            {name}
          </a>
        </p>
        <div className="card-prudct-price">
          {real_price < price ? (
            <>
              <span className="sale text-primary">{currency(real_price)}</span>
              <strike className="text-muted line-through ml-1 inline-block">
                {currency(price)}
              </strike>
            </>
          ) : (
            <>
              <span className="text-muted ml-1 inline-block">
                {currency(real_price)}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchItemLoading = () => {
  return (
    <div className="row align-items-center position-relative mb-5">
      <div className="col-4 col-md-3">
        {/* Image */}
        <Skeleton height={86.81}></Skeleton>
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <a className="stretched-link text-body" href="#">
            <Skeleton width={250} height={20}></Skeleton>
          </a>
          <br />
        </p>
        <div className="card-prudct-price">
          <Skeleton width={150} height={43}></Skeleton>
        </div>
      </div>
    </div>
  );
};
