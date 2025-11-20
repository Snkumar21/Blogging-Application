import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import ViewPost from "./pages/ViewPost";
import "./styles.css";
import BlogEditor from "./components/BlogEditor";
import BlogView from "./components/BlogView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<ViewPost />} />
        <Route path="/edit/:id" element={<BlogEditor />} />
        <Route path="/view/:id" element={<BlogView />} />
      </Routes>
    </Router>
  );
}

export default App;