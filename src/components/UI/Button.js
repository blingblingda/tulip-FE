// "use client";

// import { Button } from "flowbite-react";

// export default function LoginButton() {
//   return <Button gradientDuoTone="purpleToPink">Login</Button>;
// }

import React from "react";
import "./Button.css";

export default function Button() {
  return (
    <button class="button">
      <span class="lable">Login</span>
    </button>
  );
}
