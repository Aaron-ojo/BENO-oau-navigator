import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import NavBar from "./NavBar";
import Chatbot from "./chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// AIzaSyAG8pcOybByeG7YZvs4W4sciuOZV9lXRq0
