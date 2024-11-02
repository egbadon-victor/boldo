"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

import arrowLeft from "../../public/assets/icon/arrow-left.svg";

import "swiper/css";

export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const slidesPerView = 3;

  const testimonials = [
    {
      quote:
        "Buyer buzz partner network disruptive non-disclosure agreement business",
      name: "Albus Dumbledore",
      role: "Manager @ Howarts",
      imageSrc: "/assets/img/testimonial-img-1.png",
    },
    {
      quote:
        "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      name: "Severus Snape",
      role: "Manager @ Slytherin",
      imageSrc: "/assets/img/testimonial-img-2.png",
    },
    {
      quote:
        "Release facebook responsive web design business model canvas seed money monetization.",
      name: "Harry Potter",
      role: "Team Leader @ Gryffindor",
      imageSrc: "/assets/img/testimonial-img-3.png",
    },
  ];

  return (
    <div className="grid grid-cols-12 p-6">
      <h1 className="col-span-8 mb-16 max-w-[700px] text-white">
        An enterprise template to ramp up your company website
      </h1>
      <div className="col-span-4 mb-16 flex justify-end gap-7">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="z-10 self-end rounded-full bg-white p-4 shadow-md"
        >
          <Image src={arrowLeft} height={36} width={36} alt="decorative" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="z-10 self-end rounded-full bg-white p-4 shadow-md"
        >
          <Image
            className="-scale-x-100 transform"
            src={arrowLeft}
            height={36}
            width={36}
            alt="decorative"
          />
        </button>
      </div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        className="col-span-12 w-full"
      >
        {testimonials.length > slidesPerView
          ? testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  imageSrc={testimonial.imageSrc}
                />
              </SwiperSlide>
            ))
          : [...testimonials, ...testimonials].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  imageSrc={testimonial.imageSrc}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
