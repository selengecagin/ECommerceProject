import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";

export default function PageContent() {
  return (
    <div>
      <Routes>
        <Route path="/sda" element={<ProductListPage />}></Route>

        <Route path="/" element={<AboutPage />}></Route>

        <Route path="/sadcs" element={<HomePage />}></Route>

        <Route path="/blog" element={<HomePage />}></Route>

        <Route path="/contact" element={<HomePage />}></Route>

        <Route path="/pages" element={<HomePage />}></Route>

        <Route path="/sign-in" element={<HomePage />}></Route>

        <Route path="/sign-up" element={<HomePage />}></Route>

        <Route path="*" element={<h1>404 Not Found Page</h1>} />
      </Routes>
    </div>
  );
}
