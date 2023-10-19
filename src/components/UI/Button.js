// "use client";

// import { Button } from "flowbite-react";

// export default function LoginButton() {
//   return <Button gradientDuoTone="purpleToPink">Login</Button>;
// }

// import React from "react";
// import "./Button.css";

// export default function Button() {
//   return (
//     <button className="button">
//       <span className="lable">Login</span>
//     </button>
//   );
// }

import React from "react";
import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="button">
      <span className="lable">{text}</span>
    </button>
  );
}
