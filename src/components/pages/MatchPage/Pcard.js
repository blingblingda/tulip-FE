import React from "react";
import { Button } from "../../UI/Button";

export const Pcard = (props) => {
  // Use avatarUrl from props
  const avatarUrl = "https://tecdn.b-cdn.net/img/new/avatars/2.webp";

  return (
    <div
      className="block rounded-lg bg-white shadow-lg overflow-hidden text-center"
      onClick={props.onClick}
    >
      {/* Top padding should be half the height of the avatar to prevent it from being cropped */}
      <div className="pt-16 pb-2 px-4">
        {/* Avatar Image */}
        <div className="flex justify-center -mt-16">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-white bg-cover" // Adjust the size as needed
          />
        </div>
      </div>

      <div className="p-4">
        <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800">
          {props.data.name}
        </h5>
        <p className="mb-2 text-base text-neutral-600">
          {props.data.age}, {props.data.gender}, {props.data.city}
        </p>
        {/* <p className="mb-2 text-base text-neutral-600">
          {props.data.passion.join(", ")}
        </p> */}

        {/* Button centered with flex container */}
        <div className="flex justify-center">
          <Button text={"More"} />
        </div>
      </div>
    </div>
  );
};
