import React from "react";

export default function FooterLink({ name, url, hiring }) {
  return (
    <li className="mb-10 text-gray">
      <a className="mr-3 text-xl" href={url}>
        {name}
      </a>
      {hiring && <span className="inline-block text-sm text-primary font-bold bg-secondary rounded-3xl py-1 px-3">Hiring!</span>}
    </li>
  );
}
