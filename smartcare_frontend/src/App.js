import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NotFound from "./pages/NotFound";
import  Login from "./pages/Login"
import Register from './pages/Register'
import Dashboard from "./pages/Dashboard"
import AboutProduct from "./pages/AboutProduct";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product' element={<AboutProduct />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/aboutUs" element={<AboutUs />} />

      </Routes>
    </div>
  );
}

export default App;
