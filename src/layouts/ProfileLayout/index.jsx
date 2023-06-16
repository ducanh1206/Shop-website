import { NavLink, Outlet } from "react-router-dom";
import { PATH } from "@/config/path";
import { logoutAction } from "@/store/auth";
import { useDispatch } from "react-redux";

export const ProfileLayout = () => {
  const dispatch = useDispatch()
  return (
    <>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading */}
              <h3 className="mb-10" id="profile-title"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Nav */}
              <nav className="mb-10 mb-md-0">
                <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={PATH.Profile.Order}
                  >
                    Orders
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={PATH.Profile.Wishlist}
                  >
                    Wishlist
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle"
                    end
                    to={PATH.Profile.index}
                  >
                    Personal Info
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={PATH.Profile.Address}
                  >
                    Addresses
                  </NavLink>
                  <NavLink
                    className="list-group-item list-group-item-action dropright-toggle "
                    to={PATH.Profile.Payment}
                  >
                    Payment Methods
                  </NavLink>
                  <a
                    onClick={(ev) => {
                      ev.preventDefault();
                      dispatch(logoutAction());
                    }}
                    className="list-group-item list-group-item-action dropright-toggle"
                    href="#!"
                  >
                    Logout
                  </a>
                </div>
              </nav>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
