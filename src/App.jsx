import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 4cd61f5f-8b5c-4a51-9e86-91e38f3abb55
