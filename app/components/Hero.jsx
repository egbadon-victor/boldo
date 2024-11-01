import React from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import heroGraphics from "../../public/assets/img/hero graphics.svg";
import logoWall from "../../public/assets/img/logo wall.svg"

export default function Hero(props) {
  return (
    <section className=" mt-4">
      <Container>
        <div className="grid grid-cols-2 mb-14">
          <div className="text-white max-w-[555px] self-center">
            <h1 className="mb-4">
              Save time by building fast with Boldo Template
            </h1>
            <p className="mb-10">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex gap-6">
              <Button text="Buy Template" variant="secondary" lg />
              <Button text="Explore" variant="light" outline lg />
            </div>
          </div>
          <div>
            <Image className="ml-auto" src={heroGraphics} />
          </div>
        </div>
        <div>
          <Image className="mx-auto mb-16" src={logoWall} />
        </div>
      </Container>
    </section>
  );
}
