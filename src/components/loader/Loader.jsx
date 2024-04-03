import { ClimbingBoxLoader } from "react-spinners";

import styles from "./loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <ClimbingBoxLoader color="#8c0075" />
      Loading..
    </div>
  );
}

export default Loader;
