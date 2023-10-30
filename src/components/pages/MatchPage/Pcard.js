import React from "react";
import { TERipple } from "tw-elements-react";
import { Button } from "../../UI/Button";

export const Pcard = (props): JSX.Element => {
  console.log(props);
  return (
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      onClick={props.onClick}
    >
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg" src={props.data.url} alt="" />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>

      <div className="p-4">
        <h5 className="mb-4 text-xl font-medium leading-tight text-neutral-800">
          {props.data.name}
        </h5>
        <ul>
          <li className="mb-4 text-base text-neutral-600">
            {props.data.age}, {props.data.gender}, {props.data.city}
          </li>
          <li className="mb-4 text-base text-neutral-600">
            {props.data.passion.map((p) => p).join(", ")}
          </li>
        </ul>

        <Button text={"Let's talk"} />
      </div>
    </div>
  );
};
