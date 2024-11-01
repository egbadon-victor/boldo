import React from "react";
import Button from "./Button";

function NavListItem({ text }) {
  return (
    <li className="self-center">
      <a href="#" className="text-white hover:text-gray-300 text-base">
        {text}
      </a>
    </li>
  );
}

export default function NavList(props) {
  return (
    <ul className="flex space-x-6">
      {["Product","Services", "About"].map((item) => {
        return <NavListItem text={item} key={item}/>;
      })}
      <Button text="Log In" variant="light"/>
    </ul>
  );
}
