import styles from "./form.module.css";

function Form(props) {
  return props.signin ? (
    <form
      // autoComplete="off"
      id="sign-in-form"
      onSubmit={props.handleSubmit}
    >
      <h2>Log in</h2>
      <label htmlFor="userEmail">
        E-mail
        <input type="email" id="userEmail" required />
      </label>
      <label htmlFor="userPassword">
        Password
        <input type="password" id="userPassword" required />
      </label>
      <div className={styles.buttonsGroup}>
        <button type="submit">Sign In</button>
      </div>
    </form>
  ) : (
    <form
      // autoComplete="off"
      id="sign-up-form"
      onSubmit={props.handleSubmit}
    >
      <h2>Create an account</h2>
      <label htmlFor="userName">
        Name
        <input type="text" id="userName" required />
      </label>
      <label htmlFor="userSurname">
        Surname
        <input type="text" id="userSurname" required />
      </label>
      <label htmlFor="userEmail">
        E-mail
        <input type="email" id="userEmail" required />
      </label>
      <label htmlFor="userBirthday">
        Birthday date
        <input type="date" id="userBirthday" required />
      </label>
      <label htmlFor="userPassword">
        Password
        <input type="password" id="userPassword" required />
      </label>
      <label htmlFor="confirmPassword">
        Confirm password
        <input type="password" id="confirmPassword" required />
      </label>
      <div className={styles.buttonsGroup}>
        <button type="button">Cancel</button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default Form;
