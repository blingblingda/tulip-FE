import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { Button } from "../../UI/Button";
import { Header } from "../../UI/Header";
import { Footer } from "../../UI/Footer";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
  <div className="flex-shrink-0">
    <Header />
  </div>

  {/* Center content for medium and larger screens but not on small screens */}
  <section class="bg-white dark:bg-gray-900 md:flex md:items-center md:justify-center md:min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mb-72">
      {/* Adjust the top margin for md and lg screens */}
      <div class="text-center md:mt-0 lg:mt-0">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-700 dark:text-primary-700 md:mb-24 lg:mb-24">
          404
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <a
          href="/"
          class="inline-flex text-white bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  </section>

  <div className="flex-shrink-0">
    <Footer />
  </div>
</div>
);


};

