import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/home";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";
import Login from "./pages/public/login";
import SignUp from "./pages/public/signup";
import NoFound from "./pages/public/noFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </Router>
  );
}

export default App;
