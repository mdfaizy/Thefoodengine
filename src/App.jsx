import { Route, Routes } from "react-router-dom";
import Home from "./component/route/Home";
import About from "./component/route/About";
import Contact from "./component/route/Contact";
import Header from "./component/header/Header";
import Body from "./component/Body";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Body />
    </>
  );
}

export default App;
