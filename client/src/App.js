import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components/sharedComponents";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import "./App.css";
function App() {
  return (
    <div className="p-0" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/edit/newpost" element={<NewPost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
