import React from "react";
import sourabh from "../../../assets/Team/sourabh.jpg";
import angella from "../../../assets/Team/angella.jpg";
import sophia from "../../../assets/Team/sophia.jpg";
import belinda from "../../../assets/Team/belinda.jpg";

//dictionary for the social media colors
const socialColors = {
  portfolio: "hover:text-[#39569c]", // Portfolio brand color
  linkedin: "hover:text-[#00acee]", // LinkedIn brand color
  github: "hover:text-[#bd2c00]", // GitHub brand color
};

//dictionary for the SVG content for each social media icon
const socialIconContent = {
  portfolio: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  ),
  linkedin: (
    <>
      <path
        fillRule="evenodd"
        d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clipRule="evenodd"
      />
      <path d="M3 5.012H0V15h3V5.012Z" />
    </>
  ),
  github: (
    <path
      fillRule="evenodd"
      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
      clipRule="evenodd"
    />
  ),
};

const SocialIcon = ({ network, link }) => {
  const viewBox =
    network === "linkedin"
      ? "0 0 15 15"
      : network === "github"
      ? "0 0 20 20"
      : network === "portfolio"
      ? "0 0 21 20"
      : "0 0 24 24"; // default case

  return (
    <a
      href={link}
      className={`inline-block text-gray-500 dark:text-gray-400 ${socialColors[network]} transition-transform duration-300 ease-in-out transform hover:scale-110`} // Apply transition and hover styles
    >
      <svg
        className="w-6 h-6" // Set the icon size
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox={viewBox} // Use the specific viewBox for each icon
      >
        {socialIconContent[network]}
      </svg>
    </a>
  );
};

// TeamMember component
const TeamMember = ({ name, imageUrl, role, socialLinks }) => {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" // Use Tailwind classes for styling
        src={imageUrl}
        alt={`${name} Avatar`}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h3>
      <p>{role}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <SocialIcon network={link.network} link={link.href} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sourabh Beniwal",
      role: "Software Developer/Designer",
      imageUrl: sourabh,
      socialLinks: [
        {
          network: "linkedin",
          href: "https://www.linkedin.com/in/sourabhbeniwal1/",
        },
        { network: "github", href: "https://github.com/bsour" },
        { network: "portfolio", href: "#" },
      ],
    },
    {
      name: "Belinda Shan",
      role: "Software Developer/Designer",
      imageUrl: belinda,
      socialLinks: [
        {
          network: "linkedin",
          href: "https://www.linkedin.com/in/belinda-shan-126bs414/",
        },
        { network: "github", href: "https://github.com/blingblingda" },
        {
          network: "portfolio",
          href: "https://belinda-shan.onrender.com/",
        },
      ],
    },
    {
      name: "Yu Ji",
      role: "Software Developer/Back-End",
      imageUrl: sophia,
      socialLinks: [
        {
          network: "linkedin",
          href: "https://www.linkedin.com/in/yu-ji-785718113/",
        },
        { network: "github", href: "https://github.com/YuJi-2023" },
        {
          network: "portfolio",
          href: "https://yuji-2023.github.io/index.html",
        },
      ],
    },
    {
      name: "Angella Lao",
      role: "Software Developer/Back-End",
      imageUrl: angella,
      socialLinks: [
        {
          network: "linkedin",
          href: "https://www.linkedin.com/in/angella-lao/",
        },
        { network: "github", href: "https://github.com/angellalao" },
        { network: "portfolio", href: "#" },
      ],
    },
  ];

  return (
    <section className="bg-base-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet the Matchmakers 💖
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            From insightful developers and creative designers, each member
            brings a unique skill set dedicated to fostering deep, genuine
            connections. We champion love, one match at a time.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
