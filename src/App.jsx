import { Route, Routes } from "react-router-dom";
import Home from "./component/route/Home";
import About from "./component/route/About";
import Contact from "./component/route/Contact";
import Header from "./component/header/Header";
import Error from './component/Error';
import RestaurantMenu from './component/RestaurantMenu';
import Grocery from './component/Grocery'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/err' element={<Error/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route  path="/restaurants/:resId" element={<RestaurantMenu/>}/>
        <Route path='/grocery' element={<Grocery/>}/>
      </Routes>      
    </>
  );
}

export default App;
