import React from "react";
import Header from "../../UI/Header";
import ScreenShot from "../../../assets/screenShot.png";
import Intro1 from "../../../assets/intro-1.avif";
import Button from "../../UI/Button";
import Footer from "../../UI/Footer";
import DownloadBtn from "./DownloadBtn";

import { Collapse, initTE } from "tw-elements";

initTE({ Collapse });

export default function HomePage() {
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
              <Button />
            </div>
          </div>
        </section>
        {/* Why tulip */}
        <section>
          <div className="flex justify-center text-5xl py-20">
            <h2>Why tulip</h2>
          </div>
          <div class="hero pt-4 bg-white">
            <div class="hero-content flex-col lg:flex-row">
              <img src={Intro1} class="lg:w-80 rounded-lg shadow-2xl" alt="" />
              <div>
                <h3 class="text-4xl font-bold">Quality Over Quantity</h3>
                <p class="py-6">
                  While many dating apps play the numbers game, Tulip champions
                  the idea of quality over quantity. We understand that
                  meaningful connections aren't about how many matches you have,
                  but the depth and authenticity of each interaction.
                </p>
              </div>
            </div>
          </div>
          <div class="hero bg-white">
            <div class="hero-content flex-col lg:flex-row">
              <img src={Intro1} class="lg:w-80 rounded-lg shadow-2xl" alt="" />
              <div>
                <h3 class="text-4xl font-bold">Beyond Superficial Swipes</h3>
                <p class="py-6">
                  Tulip moves beyond the superficial swiping culture. Our
                  platform encourages users to delve deeper into conversations,
                  understand each other's values, and build a foundation that
                  can lead to lasting relationships.
                </p>
              </div>
            </div>
          </div>
          <div class="hero bg-white">
            <div class="hero-content flex-col lg:flex-row">
              <img src={Intro1} class="lg:w-80 rounded-lg shadow-2xl" alt="" />
              <div>
                <h3 class="text-4xl font-bold">Empowerment & Balance</h3>
                <p class="py-6">
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
        <section class="text-neutral-700 dark:text-neutral-300 bg-base-200">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl py-20">
            <h2 class="mb-6 text-5xl font-bold">What other say</h2>
          </div>
          <div class="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h4 class="mb-4 text-2xl font-semibold">Adam</h4>
                  <hr />
                  <p class="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block h-7 w-7 pr-2"
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
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h4 class="mb-4 text-2xl font-semibold">Jed</h4>
                  <hr />
                  <p class="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block h-7 w-7 pr-2"
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
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                    alt=""
                  />
                </div>
                <div class="p-6">
                  <h4 class="mb-4 text-2xl font-semibold">Adrain</h4>
                  <hr />
                  <p class="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block h-7 w-7 pr-2"
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
        <section id="accordionFlushExample">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl py-20">
            <h2 class="mb-6 text-5xl font-bold">FAQ</h2>
          </div>
          {/* Question1 */}
          <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingOne">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How Does the One Connection at a Time Feature Work?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="!visible border-0"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Once you match with someone on Tulip, you can focus solely on
                that individual, promoting more meaningful conversations and
                connections. You won't be able to make another connection until
                you decide to move on or the connection naturally fades,
                ensuring a dedicated and focused dating experience.
              </div>
            </div>
          </div>
          {/* Question2 */}
          <div class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingTwo">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Is Tulip Safe to Use?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Safety is our top priority. Tulip incorporates robust security
                features and protocols to ensure the privacy and safety of our
                users. We encourage a respectful and kind interaction space and
                have measures in place to report and block malicious users.
              </div>
            </div>
          </div>
          {/* Question3 */}
          <div class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="flush-headingThree">
              <button
                class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How Do I Set Up My Profile on Tulip?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <div class="px-5 py-4">
                Setting up your profile is simple. Download the Tulip app,
                follow the on-screen instructions to create an account, and fill
                in your profile information. You can customize your profile to
                showcase your personality, interests, and what you’re looking
                for in a connection.
              </div>
            </div>
          </div>
        </section>
        {/* Download */}
        <section className="flex flex-col items-center mt-10">
          <div className="flex justify-center text-5xl py-10">
            <h2>Download for mobile</h2>
          </div>
          {/* <DownloadBtn /> */}
          <Button />
        </section>
      </main>
      <Footer />
    </div>
  );
}
