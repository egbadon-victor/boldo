import React from "react";
import Container from "./Container";
import ServiceCard from "./ServiceCard";
import FloatingImage from "./FloatingImage";
import Button from "./Button";
import Image from "next/image";
import TestimonialSlider from "./TestimonialSlider";
import Accordion from "./Accordion";

import serviceCardImg1 from "../../public/assets/img/service-card-img-1.svg";
import serviceCardImg2 from "../../public/assets/img/service-card-img-2.svg";
import serviceCardImg3 from "../../public/assets/img/service-card-img-3.svg";
import serviceSectionSecondaryImg1 from "../../public/assets/img/service-section-secondary-img-1.svg";
import serviceSectionSecondaryImg2 from "../../public/assets/img/service-section-secondary-img-2.svg";
import bullet from "../../public/assets/icon/bullet.svg";
import listIcon1 from "../../public/assets/icon/leaf.svg";
import listIcon2 from "../../public/assets/icon/eye.svg";
import listIcon3 from "../../public/assets/icon/sun.svg";

export default function ServicesSection(props) {
  const servicesInfo = [
    {
      id: 1,
      title: "Cool Feature Title",
      description: "Learning curve network effects return on investment.",
      image: serviceCardImg1,
      url: "#",
    },
    {
      id: 2,
      title: "Even Cooler Feature",
      description: "Learning curve network effects return on investment.",
      image: serviceCardImg2,
      url: "#",
    },
    {
      id: 3,
      title: "Cool Feature Title",
      description: "Learning curve network effects return on investment.",
      image: serviceCardImg3,
      url: "#",
    },
  ];

  const accordionItems = [
    {
      question: "We connect our customers with the best?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, quibusdam. Enim quam, sunt labore alias temporibus ea consequatur, quibusdam repellat iste, numquam quod error ipsa unde repudiandae voluptatum quo sed?",
    },
    {
      question: "Android research & development rockstar?",
      answer: "The best in the business",
    },
  ];

  return (
    <>
      <section className="bg-white py-20">
        <Container>
          <div className="mb-20 flex flex-col">
            <h2 className="font-secondary mb-4 text-center text-xl text-gray">
              Our Services
            </h2>
            <p className="max-w-[850px] self-center text-center text-5xl leading-[4rem]">
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {servicesInfo.map(({ id, title, description, image, url }) => {
              return (
                <ServiceCard
                  key={id}
                  title={title}
                  description={description}
                  image={image}
                  url={url}
                />
              );
            })}
          </div>
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <FloatingImage
                url="/assets/img/service-section-img-1.png"
                secondaryUrl={serviceSectionSecondaryImg1}
                alt="Floating"
                position="right"
              />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-11 col-start-2 flex flex-col justify-center align-middle">
                <h2 className="mb-10">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h2>
                <ul className="mb-14">
                  {[
                    "We connect our customers with the best.",
                    "Advisor success customer launch party.",
                    "Business-to-consumer long tail.",
                  ].map((text, index) => {
                    return (
                      <li className="mb-6 flex align-middle" key={index}>
                        <Image className="mr-7" src={bullet} alt="decorative" />
                        <p className="self-center text-xl">{text}</p>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  className="self-start"
                  text="Start now"
                  variant="primary"
                  lg
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white pb-20 pt-10">
        <Container>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-12">
              <div className="col-span-11 col-start-2 flex flex-col justify-center align-middle">
                <h2 className="mb-16">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h2>
                <ul className="mb-14">
                  {[
                    {
                      text: "We connect our customers with the best.",
                      icon: listIcon1,
                    },
                    {
                      text: "Advisor success customer launch party.",
                      icon: listIcon2,
                    },
                    {
                      text: "Business-to-consumer long tail.",
                      icon: listIcon3,
                    },
                  ].map((item, index) => {
                    return (
                      <li
                        className={`${index === 0 ? "bg-primary text-white" : "bg-white"} mb-6 flex rounded-[4px] p-5 align-middle shadow-custom`}
                        key={index}
                      >
                        <Image
                          className="mr-5"
                          src={item.icon}
                          alt="decorative"
                        />
                        <p className="self-center text-xl">{item.text}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <FloatingImage
                url="/assets/img/service-section-img-2.png"
                secondaryUrl={serviceSectionSecondaryImg2}
                alt="Floating"
                position="left"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-primary py-20 text-white">
        <Container>
          <TestimonialSlider />
        </Container>
      </section>
      <section className="bg-white py-20">
        <Container>
          <div className="relative mx-auto mb-14 aspect-[11/4] w-full max-w-[1100px]">
            <Image
              alt="conference image"
              src="/assets/img/connect-img.png"
              fill
            />
          </div>

          <div className="grid grid-cols-2 max-w-[1100px] mx-auto gap-8">
            <h2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <Accordion items={accordionItems}/>
          </div>
        </Container>
      </section>
    </>
  );
}
