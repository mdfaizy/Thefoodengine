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
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="flex justify-between bg-slate-500 shadow-orange-200">
      <div className="w-20 rounded-sm">
        {/* Replace LOGO_URL with the path to your logo */}
        <img className='logo' src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 gap-4">
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>
          <li>
            <Link to="/about">About us </Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li> Cart </li>
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
