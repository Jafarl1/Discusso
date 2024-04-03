import { useState } from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Container from "../../components/container/Container";
import Loader from "../../components/loader/Loader";
import ProfileImage from "./ProfileImage";
import Siderbar from "./Siderbar";
import styles from "./account.module.css";
import MiddleSection from "./MiddleSection";

function Account() {
  // const dispatch = useDispatch();
  const { loading, userLoggedIn } = useAuth();
  const [contentId, setContentId] = useState(null);

  return loading ? (
    <Loader />
  ) : userLoggedIn ? (
    <Container>
      <div className={styles.account}>
        <ProfileImage />
        <MiddleSection contentId={contentId} />
        <Siderbar setContentId={setContentId} />
      </div>
    </Container>
  ) : (
    <Navigate to="/" replace={true} />
  );
}

export default Account;
