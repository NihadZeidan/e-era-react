import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
function Header({ isUserSignedIn }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
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
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>

        <Link to="/contact" className="option">
          CONTACT
        </Link>

        {isUserSignedIn ? (
          <div className="option" onClick={() => auth.signOut()}>
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
      </div>
    </div>
  );
}

export default Header;