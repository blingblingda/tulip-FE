import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
import { MatchPage } from "./components/pages/MatchPage/MatchPage";
import { SignUp } from "./components/pages/SignUpPage/SignUp";
import { NotFoundPage } from "./components/pages/NotFoundPage/NotFoundPage";
import Loader from "./components/pages/LoadingScreen/Loader";



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HomePage } from "./components/pages/HomePage/HomePage";
// import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
// import { MatchPage } from "./components/pages/MatchPage/MatchPage";
// import { SignUp } from "./components/pages/SignUpPage/SignUp";
// import { NotFoundPage } from "./components/pages/NotFoundPage/NotFoundPage";
// import Loader from "./components/pages/LoadingScreen/Loader";

// export const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading data with useEffect and setTimeout
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000); // 3 seconds simulated load time

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <Loader />; // Or any other loading component you have
//   }

//   return (
//     <BrowserRouter>
//       {isLoading ? (
//         <Loader /> // Show loader while loading
//       ) : (
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/registration" element={<RegistrationPage />} />
//           <Route path="/match" element={<MatchPage />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//       )}
//     </BrowserRouter>
//   );
//       }