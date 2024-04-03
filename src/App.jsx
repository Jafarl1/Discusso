import AppRouter from "./AppRouter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <div className="app">
        <AppRouter />
      </div>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
