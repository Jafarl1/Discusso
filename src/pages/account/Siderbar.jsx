import styles from "./account.module.css";

const list = ["plans", "books", "projects"];

function Siderbar({ setContentId }) {
  const handleMiddleContent = (e) => {
    setContentId(e.target.id);
  };

  return (
    <ul className={styles.sidebar}>
      {list.map((item) => (
        <li
          className={styles.plans}
          id={item}
          key={item}
          onClick={handleMiddleContent}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Siderbar;
