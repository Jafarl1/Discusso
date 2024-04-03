import Plans from "./Plans";
import Books from "./Books";
import Projects from "./Projects";

import styles from "./account.module.css";

function MiddleSection({ contentId }) {
  return (
    <section className={styles.middleContent}>
      <h2 className={styles.middleContentH2}>{contentId}</h2>
      {contentId === "plans" ? (
        <Plans />
      ) : contentId === "books" ? (
        <Books />
      ) : contentId === "projects" ? (
        <Projects />
      ) : (
        <h2> Hello !</h2>
      )}
    </section>
  );
}

export default MiddleSection;
