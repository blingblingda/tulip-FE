import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../UI/Header";
import Why1 from "../../../assets/why-1.avif";
import Why2 from "../../../assets/why-2.webp";
import Why3 from "../../../assets/why-3.jpeg";
import { Footer } from "../../UI/Footer";
import { Accordion } from "./Accordion";
import Download from "../../../assets/download.jpg";
import { Modal } from "../../UI/Modal";
import { SignUp } from "../SignUpPage/SignUp";
import Loader from "../LoadingScreen/Loader";
import Team from "./Team";

export const HomePage = () => {
  // State management hooks
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false); // Start without loading
  const navigate = useNavigate();

  // Utility function for checking authentication
  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  useEffect(() => {
    // Only perform the redirect if the user is authenticated
    if (isAuthenticated()) {
      const shouldRedirect = localStorage.getItem("shouldRedirect");
      if (shouldRedirect) {
        setLoading(true); // Start loading while preparing to redirect
        localStorage.removeItem("shouldRedirect");
        navigate("/match");
      }
    } else {
      setLoading(false); // Ensure loading is false if not authenticated
    }
  }, [navigate]);

  // Loader to indicate page transition
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <main className="mx-auto">
        <section className="bg-base-200 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            {/* Alert for new sign up */}
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              Tulip is out! Sign Up for Free!
              {/* Arrow icon */}
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            {/* Hero Heading */}
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Where connections blossom🌷
            </h1>
            {/* Hero Subheading */}
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Rediscover the art of dating. Leave the swiping circus behind and
              embrace connections that count.
            </p>
            {/* Sign Up Button */}
            {!isAuthenticated() && (
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setLoginModalOpen(true)}
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg animate-bounce bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Sign Up
                  {/* Arrow icon */}
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
            {/* Featured In Section */}
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span className="font-semibold text-gray-400 uppercase">
                FEATURED IN
              </span>
              <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                {/* LinkedIn Logo with text */}
                <div className="mr-5 mb-5 lg:mb-0 flex items-center hover:text-gray-800 dark:hover:text-white">
                  <a
                    href="https://au.linkedin.com/company/holberton-school-australia"
                    className="flex items-center"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        clip-rule="evenodd"
                      />
                      <path d="M3 5.012H0V15h3V5.012Z" />
                    </svg>
                    <span className="ml-2 mt-3">LinkedIn</span>
                  </a>
                </div>
                {/* YouTube Logo with text */}
                <div className="mr-5 mb-5 lg:mb-0 flex items-center hover:text-gray-800 dark:hover:text-white">
                  <a
                    href="https://www.youtube.com/watch?v=ujILCaT4COA"
                    className="flex items-center"
                  >
                    <svg
                      className="w-[35px] h-[35px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 14"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 mt-2">YouTube</span>
                  </a>
                </div>
                {/* GitHub Logo with text */}
                <div className="mr-5 mb-5 lg:mb-0 flex items-center hover:text-gray-800 dark:hover:text-white">
                  <a
                    href="https://github.com/blingblingda/tulip-FE"
                    className="flex items-center"
                  >
                    <svg
                      className="w-[35px] h-[35px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 mt-2">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why tulip */}
        <section class="bg-white dark:bg-gray-900">
          <div class="py-20 text-center">
            <h2 class="text-5xl font-bold text-gray-900 dark:text-white">
              Why Tulip 👩‍❤️‍👨
            </h2>
          </div>
          <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            {/* First Item */}
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h3 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Quality Over Quantity
              </h3>
              <p class="mb-4">
                While many dating apps play the numbers game, Tulip champions
                the idea of quality over quantity. We understand that meaningful
                connections aren't about how many matches you have, but the
                depth and authenticity of each interaction.
              </p>
            </div>
            <img
              src={Why1}
              class="w-full rounded-lg shadow-2xl"
              alt="Quality Over Quantity"
            />

            {/* Second Item */}
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-8 lg:mt-0">
              <h3 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Beyond Superficial Swipes
              </h3>
              <p class="mb-4">
                Tulip moves beyond the superficial swiping culture. Our platform
                encourages users to delve deeper into conversations, understand
                each other's values, and build a foundation that can lead to
                lasting relationships.
              </p>
            </div>
            <img
              src={Why2}
              class="w-full rounded-lg shadow-2xl mt-4 lg:mt-10"
              alt="Beyond Superficial Swipes"
            />

            {/* Third Item */}
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mt-8 lg:mt-0">
              <h3 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Empowerment & Balance
              </h3>
              <p class="mb-4">
                While other platforms may perpetuate certain gender norms, Tulip
                stands for balance. We encourage all users, regardless of
                gender, to take initiative and control of their dating journey,
                fostering an environment of mutual respect and understanding.
              </p>
            </div>
            <img
              src={Why3}
              class="w-full rounded-lg shadow-2xl mt-4 lg:mt-10"
              alt="Empowerment & Balance"
            />
          </div>
        </section>

        {/* What others say */}
        <section className="bg-base-200 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="mb-6 text-5xl font-bold">What Others Say 🗣️</h2>
            </div>
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      alt=""
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Amy</h4>
                    <hr />
                    <p className="mt-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      I've tried multiple dating apps in the past, but Tulip is
                      truly a game-changer. The one-connection approach made me
                      more intentional about my interactions, and I've had some
                      of the most meaningful conversations here.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                      alt=""
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Amanda</h4>
                    <hr />
                    <p className="mt-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Tulip has taken the distraction out of online dating. It's
                      refreshing to focus on one person at a time, giving each
                      connection the attention it deserves. I've never felt this
                      connected on a dating platform before.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                  <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                  <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                      alt=""
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-4 text-2xl font-semibold">Adam</h4>
                    <hr />
                    <p className="mt-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block h-7 w-7 pr-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                      </svg>
                      Tulip offers a dating experience like no other. It
                      encourages taking things slow, understanding each other,
                      and building a real connection. I've had some of the most
                      meaningful conversations on this platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <Accordion />
        {/* Team */}
        <Team />
        {/* Download */}
        <section className="flex flex-col items-center mt-12 md:mb-40 mb-48 sm:mb-36">
          <div className="text-5xl py-10 text-center">
            <h2>Download for mobile 📲</h2>
          </div>
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Download
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div>
                <img
                  src={Download}
                  alt="download instruction"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="modal-action">
                <button
                  type="button"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  onClick={() => document.getElementById("my_modal_5").close()}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </section>
      </main>
      <section className="flex flex-col items-center my-24">
        <Footer />
      </section>
      <Modal show={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
        <SignUp />
      </Modal>
    </div>
  );
};
