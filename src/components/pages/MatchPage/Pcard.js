import React from "react";
import { Button } from "../../UI/Button";

export const Pcard = (props) => {
  return (
    <div
      className="block rounded-lg bg-white shadow-lg overflow-hidden text-center"
      onClick={props.onClick}
    >
      {/* Avatar Image */}
      <div className="flex justify-center mt-6">
        <img
          src={props.data.photo_url}
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-white object-cover"
        />
      </div>

      <div className="p-4">
        <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800">
          {props.data.name}
        </h5>
        <p className="mb-2 text-base text-neutral-600">
          {props.data.age}, {props.data.gender}, {props.data.state}
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
