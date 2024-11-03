import React from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";

import heroGraphics from "../../public/assets/img/hero graphics.svg";
import logoWall from "../../public/assets/img/logo wall.svg";
import brandImg1 from "../../public/assets/img/brand-1.svg";
import brandImg2 from "../../public/assets/img/brand-2.svg";

export default function Hero(props) {
  return (
    <section className="mt-4">
      <Container>
        <div className="mb-14 grid grid-cols-12 sm:gap-10">
          <div className="col-span-12 w-full self-center text-white lg:col-span-6 lg:max-w-[555px]">
            <h1 className="mb-4">
              Save time by building fast with Boldo Template
            </h1>
            <p className="mb-10">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="flex flex-col gap-6 md:flex-row">
              <Button text="Buy Template" variant="secondary" lg />
              <Button text="Explore" variant="light" outline lg />
            </div>
          </div>
          <div className="col-span-12  lg:col-span-6 mt-8 sm:mt-0">
            <Image className="mx-auto w-full lg:ml-auto" src={heroGraphics} />
          </div>
        </div>
        <div class="mb-16 inline-flex w-full flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_40%,_black_calc(100%-40%),transparent_100%)]">
          <ul class="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
          </ul>
          <ul
            class="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
            aria-hidden="true"
          >
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
            <li>
              <Image src={brandImg1} alt="boldo" />
            </li>
            <li>
              <Image src={brandImg2} alt="presto" />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
