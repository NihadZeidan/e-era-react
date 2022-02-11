import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

// You can use either useSelector and useDispatch or mapStateToProps and mapDispatchToProps.
import { useSelector } from "react-redux";

import CartIcon from "../cart-icon/cartIcon.component";
import CartDropdown from "../cart-dropdown/cartDropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { useDispatch } from "react-redux";
import { userSignOutStart } from "../../redux/user/user.actions";

function Header() {
  const isUserSignedIn = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectCartHidden(state));
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* <span> Electronic Era </span> */}
      </Link>

      <div className="options">
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <Link to="/shop" className="option">
          SHOP
        </Link>

        {isUserSignedIn ? (
          <div className="option" onClick={() => dispatch(userSignOutStart())}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <>
            <Link to="/sign-in" className="option">
              SIGN IN
            </Link>

            <Link to="/sign-up" className="option">
              REGISTER
            </Link>
          </>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

export default Header;
