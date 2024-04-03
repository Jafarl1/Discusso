// import { useDispatch } from "react-redux";
// import { addUser } from "../../redux/usersSlice";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { createUser } from "../../firebase/auth";
import { getDatabase, set, ref } from "../../firebase/firebase";
import Form from "../../components/form/Form";
import Container from "../../components/container/Container";

function SignUp() {
  const { userLoggedIn } = useAuth();

  async function handleSignUp(event) {
    event.preventDefault();
    const form = event.target;

    if (form.userPassword.value !== form.confirmPassword.value) {
      alert("password error");
      return;
    }

    // const userData = {
    //   name: form.userName.value,
    //   surname: form.userSurname.value,
    //   birthday: form.userBirthday.value,
    // };
    // console.log("userData: ", userData);

    try {
      const userData = await createUser(
        form.userEmail.value,
        form.userPassword.value
      );

      const userCredential = {
        id: userData.user.uid,
        name: form.userName.value,
        surname: form.userSurname.value,
        displayName: `${form.userName.value} ${form.userSurname.value}`,
        birthdayDate: form.userBirthday.value,
        photoURL: null,
        phoneNumber: null,
      };

      const db = getDatabase();
      set(ref(db, "users/" + userData.user.uid), userCredential);

      // console.log(userData);
      // userData.user = {
      //   ...userData.user,
      //   name: form.userName.value,
      //   surname: form.userSurname.value,
      //   birthday: form.userBirthday.value,
      // };
      // dispatch(addUser(userData));
      form.reset();
    } catch (error) {
      console.log(error);
      if (error.message.includes("already-in-use")) {
        alert("User with this email address already exists.");
      }
    }
  }

  return userLoggedIn ? (
    <Navigate to="/account" replace={true} />
  ) : (
    <Container>
      <Form signup handleSubmit={handleSignUp} />
    </Container>
  );
}

export default SignUp;
