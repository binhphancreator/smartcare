import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import Basic from "./pages/Basic";
import Doctor from "./pages/Doctor";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
