import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/shop" element={<HomePage />}></Route>

        <Route path="/about" element={<HomePage />}></Route>

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
