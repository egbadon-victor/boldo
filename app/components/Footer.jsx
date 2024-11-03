import React from "react";
import Container from "./Container";
import FooterLink from "./FooterLink";
import Logo from "./Logo";

export default function Footer(props) {
  const landingsList = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Products",
      url: "#",
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  const companyList = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "Career",
      url: "#",
      hiring: true
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  const resourcesList = [
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Products",
      url: "#",
    },
    {
      name: "Services",
      url: "#",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-5">
            <Logo dark className="mb-10" />
            <p className="mb-16 text-gray max-w-[300px]">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
            <p className="text-gray">All rights reserved.</p>
          </div>
          <div className="col-span-7 grid grid-cols-9">
            <div className="col-span-7 flex justify-between">
              <div>
                <p className="mb-8 font-bold text-primary">Landings</p>
                <ul>
                  {landingsList.map(({ name, url }, index) => (
                    <FooterLink key={index} name={name} url={url} />
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-8 font-bold text-primary">Company</p>
                <ul>
                  {companyList.map(({ name, url, hiring }, index) => (
                    <FooterLink key={index} name={name} url={url} hiring={hiring}/>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-8 font-bold text-primary">Resources</p>
                <ul>
                  {resourcesList.map(({ name, url }, index) => (
                    <FooterLink key={index} name={name} url={url} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
