// import { useLocation, useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
import Container from "../../components/container/Container";
import styles from "./home.module.css";

function Home() {
  // const location = useLocation();
  // console.log(location);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("post"));

  // const users = useSelector((state) => state.usersData.users);
  // console.log(users);


  return (
    <Container>
      <div className={styles.home}>Home</div>
    </Container>
  );
}

export default Home;
