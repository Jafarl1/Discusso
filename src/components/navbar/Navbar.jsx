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
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {userLoggedIn ? (
          <>
            <li>
              <NavLink to="/account">
                <img src={userIcon} alt="Account" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" onClick={signOut}>
                <img src={signOutIcon} alt="Sign out" />
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signin">
                <img src={signInIcon} alt="Sign in" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                <img src={signUpIcon} alt="Sign up" />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
