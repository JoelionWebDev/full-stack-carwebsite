import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Getdata from "./pages/Getdata";
import Getsub from "./pages/getsub";
import Home from "./home/Home";
import Error from "./pages/error";
import Success from "./pages/success";
import Success2 from "./pages/success2";
import Blogs from "./pages/Blogs";
import { Toaster } from "react-hot-toast";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <React.Fragment>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="error" element={<Error />} />
        <Route path="getdata" element={<Getdata />} />
        <Route path="getsub" element={<Getsub />} />

        <Route path="success" element={<Success />} />
        <Route path="success2" element={<Success2 />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
