import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserProfileImage } from "../../redux/usersSlice";
import { useAuth } from "../../context/AuthContext";
import { doSignOut } from "../../firebase/auth";
import Loader from "../loader/Loader";
import signInIcon from "../../assets/icons/sign-in-icon.png";
import signUpIcon from "../../assets/icons/sign-up-icon.png";
import userIcon from "../../assets/icons/user-icon.png";
import signOutIcon from "../../assets/icons/sign-out-icon.png";
import styles from "./navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const { loading, userLoggedIn, userSigning } = useAuth();

  function signOut() {
    userSigning(null);
    dispatch(setUserProfileImage(null));
    doSignOut();
  }

  return loading ? (
    <Loader />
  ) : (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUl}>
        <li className={styles.navbarLi}>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navbarLi}>
          <NavLink to="/about" className={styles.navLink}>
            About
          </NavLink>
        </li>
        {userLoggedIn ? (
          <>
            <li className={styles.navbarLi}>
              <NavLink to="/account" className={styles.navLink}>
                <img
                  src={userIcon}
                  className={styles.navLinkImg}
                  alt="Account"
                />
              </NavLink>
            </li>
            <li className={styles.navbarLi}>
              <NavLink
                to="/signin"
                className={styles.navLink}
                onClick={signOut}
              >
                <img
                  src={signOutIcon}
                  className={styles.navLinkImg}
                  alt="Sign out"
                />
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navbarLi}>
              <NavLink to="/signin" className={styles.navLink}>
                <img
                  src={signInIcon}
                  className={styles.navLinkImg}
                  alt="Sign in"
                />
              </NavLink>
            </li>
            <li className={styles.navbarLi}>
              <NavLink to="/signup" className={styles.navLink}>
                <img
                  src={signUpIcon}
                  className={styles.navLinkImg}
                  alt="Sign up"
                />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
