// "use client";
// import React from "react";
// import { Navbar } from "flowbite-react";
// import Button from "./Button";
// import logoImg from "../../assets/tulip-192x192.png";

// export default function Header() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="https://flowbite-react.com">
//         <img
//           src={logoImg}
//           className="mr-5 h-10 sm:h-9 pr-3"
//           alt="Flowbite React Logo"
//         />
//         <span className="self-cente whitespace-nowrap text-2xl font-semibold dark:text-white">
//           tulip
//         </span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Button>Get started</Button>
//         <Navbar.Toggle />
//       </div>
//     </Navbar>
//   );
// }

import React from "react";
import Logo from "../../assets/tulip-192x192.png";
import Button from "../UI/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20">
      <div className="flex justify-between items-center w-12 h-12">
        <img src={Logo} alt="tulip logo" />
        <h1 className="text-4xl pl-4 ">tulip</h1>
      </div>
      <Button />
    </header>
  );
}
