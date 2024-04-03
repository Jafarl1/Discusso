import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signInWithEmail } from "../../firebase/auth";
import { getDatabase, set, ref } from "../../firebase/firebase";
import Container from "../../components/container/Container";
import Form from "../../components/form/Form";

// import { useDispatch } from "react-redux";
// import { addUser } from "../../redux/usersSlice";

function SignIn() {
  // const dispatch = useDispatch();

  const { userLoggedIn, userSigning, onAuthChange } = useAuth();

  async function handleSignIn(event) {
    event.preventDefault();
    const form = event.target;

    try {
      const user = await signInWithEmail(
        form.userEmail.value,
        form.userPassword.value
      );
      const db = getDatabase();
      set(ref(db, "loggedUser"), user.user.uid);
      onAuthChange();
      userSigning(user);
      form.reset();
    } catch (error) {
      alert("An account with these credentials couldn't be found.");
    }
  }

  // function onGoogleSignIn(event) {
  //   event.preventDefault();
  //   if (!isSigningIn) {
  //     setIsSigningIn(true);
  //     doSignInWithGoogle().catch((error) => {
  //       setIsSigningIn(false);
  //     });
  //   }
  // }

  return userLoggedIn ? (
    <Navigate to="/account" state={{ fromSignInPage: true }} replace={true} />
  ) : (
    <Container>
      <Form signin handleSubmit={handleSignIn} />
    </Container>
  );
}

export default SignIn;
