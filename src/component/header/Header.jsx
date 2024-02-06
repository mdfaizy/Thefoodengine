// import { NavLink } from "react-router-dom"
// import { useState } from "react";
// import '../../App.css'
// import {LOGO_URL} from '../../common/constants'
// const Header = () => {
//   const [btnNameReact, setBtnNameReact] = useState('Login');
//   return (
//     <div className="header">
//       <img src={LOGO_URL} alt="logo_img" />

//       <div>
//         <ul>
//           <li><NavLink to='/'>Home</NavLink></li>
//           <li><NavLink to='/about'> About </NavLink></li>
//           <li><NavLink to='/contact'>Contact</NavLink></li>
//           <li>
//             <NavLink className="links">Cart</NavLink>
//           </li>
//           <button
//             className="loginBtn"
//             onClick={() => {
//               //   btnName = 'Logout';
//               btnNameReact === 'Login'
//                 ? setBtnNameReact('Logout')
//                 : setBtnNameReact('Login');
//               console.log(btnNameReact);
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import "../../App.css";

// const Header = () => {
//   // let btnName = "Login";

//   const [btnNameReact, setBtnNameReact] = useState("Login");

//   useEffect(() => {
//     console.log("useEffect");
//   });

//   return (
//     <div className="header">
//       <div className="logo-container">
//         {/* <img className='logo' src= {LOGO_UR}/> */}
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>
//             <Link to="/"> Home </Link>{" "}
//           </li>

//           <li>
//             <Link to="/about">About us </Link>{" "}
//           </li>
//           <li>
//             {" "}
//             <Link to="/contact">Contact Us</Link>{" "}
//           </li>
//           <li> Cart </li>

//           <button
//             className="login"
//             onClick={() => {
//               btnNameReact === "login"
//                 ? setBtnNameReact("logout")
//                 : setBtnNameReact("login");
//               console.log(btnNameReact);
//             }}
//           >
//             {btnNameReact}
//           </button>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;





import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import {LOGO_URL} from '../../common/constants'
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
//Selector
// const cartItems =useSelector((store)=>store.cart.items);
 
// const {cart} = useSelector((state) => state);

const cart=useSelector((state) => state.cart.items);

useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="flex justify-between bg-slate-500 shadow-orange-200">
      <div className="w-20 rounded-sm">
        <img className='p-4' src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 gap-4 text-white font-bold">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <Link to='/cart'>
          <div className="relative py-1">
            <FaCartPlus className="w-8" />
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
              </div>
             </Link>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
