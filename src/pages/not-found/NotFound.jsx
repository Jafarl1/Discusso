import notFoundIcon from "../../assets/icons/not-found-icon.png";
import styles from "./notFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFound}>
      <img src={notFoundIcon} alt="Not Found" width={200} />
      <h2 className={styles.notFoundH2}>Unfornately the page wasn't found.</h2>
    </div>
  );
}

export default NotFound;
