import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/public/homepage/home";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";
import Login from "./pages/public/login";
import SignUp from "./pages/public/signup";
import NoFound from "./pages/public/noFound";
import Navbar from "./components/navBars/basicNavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
