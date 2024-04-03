import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Account from "./pages/account/Account";
import NotFound from "./pages/not-found/NotFound";
import AdminPanel from "./pages/admin/AdminPanel";
import BooksPage from "./pages/books/BooksPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Navigate to="/signin" replace />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/account" element={<Account />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/books" element={<BooksPage />} />
    </Routes>
  );
}

export default AppRouter;
