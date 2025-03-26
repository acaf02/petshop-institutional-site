import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Service from './pages/Service';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App
