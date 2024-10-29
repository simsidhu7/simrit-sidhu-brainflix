import "./App.scss";
import Header from "../src/components/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import HomePage from "../src/pages/HomePage/HomePage";

function App() {





  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UploadPage" element={<UploadPage />} />
        <Route path="/videos/:id" element={<HomePage />} />
      </Routes>

    </BrowserRouter>
  );

};

export default App;
