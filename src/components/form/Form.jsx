import styles from "./form.module.css";

function Form(props) {
  return props.signin ? (
    <form
      // autoComplete="off"
      id={styles.signInForm}
      onSubmit={props.handleSubmit}
    >
      <h2 className={styles.signFormH2}>Log in</h2>
      <label htmlFor="userEmail" className={styles.signFormLabel}>
        E-mail
        <input
          type="email"
          className={styles.signFormInput}
          id="userEmail"
          required
        />
      </label>
      <label htmlFor="userPassword" className={styles.signFormLabel}>
        Password
        <input
          type="password"
          className={styles.signFormInput}
          id="userPassword"
          required
        />
      </label>
      <div className={styles.buttonsGroup}>
        <button type="submit" className={styles.signFormBtn}>
          Sign In
        </button>
      </div>
    </form>
  ) : (
    <form
      // autoComplete="off"
      id={styles.signUpForm}
      onSubmit={props.handleSubmit}
    >
      <h2 className={styles.signFormH2}>Create an account</h2>
      <label htmlFor="userName" className={styles.signFormLabel}>
        Name
        <input
          type="text"
          className={styles.signFormInput}
          id="userName"
          required
        />
      </label>
      <label htmlFor="userSurname" className={styles.signFormLabel}>
        Surname
        <input
          type="text"
          className={styles.signFormInput}
          id="userSurname"
          required
        />
      </label>
      <label htmlFor="userEmail" className={styles.signFormLabel}>
        E-mail
        <input
          type="email"
          className={styles.signFormInput}
          id="userEmail"
          required
        />
      </label>
      <label htmlFor="userBirthday" className={styles.signFormLabel}>
        Birthday date
        <input
          type="date"
          className={styles.signFormInput}
          id="userBirthday"
          required
        />
      </label>
      <label htmlFor="userPassword" className={styles.signFormLabel}>
        Password
        <input
          type="password"
          className={styles.signFormInput}
          id="userPassword"
          required
        />
      </label>
      <label htmlFor="confirmPassword" className={styles.signFormLabel}>
        Confirm password
        <input
          type="password"
          className={styles.signFormInput}
          id="confirmPassword"
          required
        />
      </label>
      <div className={styles.buttonsGroup}>
        <button type="button" className={styles.signFormBtn}>
          Cancel
        </button>
        <button type="submit" className={styles.signFormBtn}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Form;
