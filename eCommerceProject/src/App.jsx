import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import SignUpPage from "./pages/SignUpPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/about-page" element={<AboutPage />}></Route>

        <Route path="/product-list-page" element={<ProductListPage />}></Route>

        <Route path="/team-page" element={<TeamPage />}></Route>

        <Route path="/blog-page" element={<BlogPage />}></Route>

        <Route path="/contact-page" element={<ContactPage />}></Route>

        <Route path="/pages" element={<ProductPage />}></Route>

        <Route path="/sign-in" element={<HomePage />}></Route>

        <Route path="/signup" element={<SignUpPage />}></Route>

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
