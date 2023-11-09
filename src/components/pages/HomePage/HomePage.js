import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../UI/Header";
import ScreenShot from "../../../assets/screenShot.png";
import Why1 from "../../../assets/why-1.avif";
import Why2 from "../../../assets/why-2.webp";
import Why3 from "../../../assets/why-3.jpeg";
import { Button } from "../../UI/Button";
import { Footer } from "../../UI/Footer";
import { Accordion } from "./Accordion";
import Download from "../../../assets/download.jpg";
import { Modal } from "../../UI/Modal";
import { SignUp } from "../SignUpPage/SignUp";

export const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  // This effect handles the redirection after login.
  useEffect(() => {
    const userToken = localStorage.getItem('token');
    const shouldRedirect = localStorage.getItem('shouldRedirect');

    if (userToken && shouldRedirect) {
      // Clear the flag to avoid redirecting on subsequent visits.
      localStorage.removeItem('shouldRedirect');
      navigate('/match');
    }
  }, [navigate]);

  // This function checks if the user is authenticated
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <div>
      <Header />
      <main className="mx-auto">
        {/* Hero */}
        <section className="hero min-h-100 bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={ScreenShot}
              className="lg:w-80 md:w-32 rounded-lg shadow-2xl"
              alt="screenshot"
            />
            <div>
              <h1 className="text-8xl font-bold text-black">tulip</h1>
              <p className="py-6">Where connections blossom.</p>
              {!isAuthenticated() && (
              <div className="flex flex-col justify-center items-center">
              <Button
                text={"Sign Up"}
                onClick={() => setLoginModalOpen(true)}
              />
              </div>
              )}
            </div>
          </div>
        </section>
        {/* Why tulip */}
        <section>
          <div className="flex justify-center text-5xl py-20">
            <h2>Why tulip</h2>
          </div>
          <div className="hero pt-4 bg-white">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={Why1}
                className="lg:w-80 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h3 className="text-4xl font-bold">Quality Over Quantity</h3>
                <p className="py-6">
                  While many dating apps play the numbers game, Tulip champions
                  the idea of quality over quantity. We understand that
                  meaningful connections aren't about how many matches you have,
                  but the depth and authenticity of each interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="hero bg-white">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={Why2}
                className="lg:w-80 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h3 className="text-4xl font-bold">
                  Beyond Superficial Swipes
                </h3>
                <p className="py-6">
                  Tulip moves beyond the superficial swiping culture. Our
                  platform encourages users to delve deeper into conversations,
                  understand each other's values, and build a foundation that
                  can lead to lasting relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="hero bg-white">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={Why3}
                className="lg:w-80 rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h3 className="text-4xl font-bold">Empowerment & Balance</h3>
                <p className="py-6">
                  While other platforms may perpetuate certain gender norms,
                  Tulip stands for balance. We encourage all users, regardless
                  of gender, to take initiative and control of their dating
                  journey, fostering an environment of mutual respect and
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* What other say */}
        <section className="text-neutral-700 dark:text-neutral-300 bg-base-200">
          <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl py-20">
            <h2 className="mb-6 text-5xl font-bold">What other say</h2>
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
                  <p className="mt-4">
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
                    more intentional about my interactions, and I've had some of
                    the most meaningful conversations here.
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
                  <p className="mt-4">
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
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    Tulip offers a dating experience like no other. It
                    encourages taking things slow, understanding each other, and
                    building a real connection. I've had some of the most
                    meaningful conversations on this platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <Accordion />
        {/* Download */}
        <section className="flex flex-col items-center mt-10 mb-20">
          <div className="flex justify-center text-center text-5xl py-10">
            <h2>Download for mobile</h2>
          </div>
          <Button
            text={"Download"}
            onClick={() => document.getElementById("my_modal_5").showModal()}
          />
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div>
                <img src={Download} alt="download instruction" />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <Button text={"Close"} />
                </form>
              </div>
            </div>
          </dialog>
        </section>
      </main>
      <Footer />
      <Modal show={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
        <SignUp />
      </Modal>
    </div>
  );
};
