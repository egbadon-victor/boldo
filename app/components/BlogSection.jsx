import React from "react";
import Container from "./Container";
import BlogCard from "./BlogCard";
import Button from "./Button";

export default function BlogSection(props) {
  const blogInfo = [
    {
      url: "#",
      summary: "Pitch termsheet backing validation focus release.",
      imgUrl: "/assets/img/blog-img-1.png",
      category: "Category",
      date: "November 22, 2021",
      author: "Chandler Bing",
      authorImgUrl: "/assets/img/author-img-1.png",
    },
    {
      url: "#",
      summary:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      imgUrl: "/assets/img/blog-img-2.png",
      category: "Category",
      date: "November 22, 2021",
      author: "Rachel Green",
      authorImgUrl: "/assets/img/author-img-2.png",
    },
    {
      url: "#",
      summary:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
      imgUrl: "/assets/img/blog-img-3.png",
      category: "Category",
      date: "November 22, 2021",
      author: "Monica Geller",
      authorImgUrl: "/assets/img/author-img-3.png",
    },
  ];

  return (
    <>
      <section className="bg-white py-20">
        <Container>
          <div className="mb-20 flex flex-col">
            <h2 className="font-secondary mb-4 text-center text-xl text-gray">
              Our Blog
            </h2>
            <p className="max-w-[850px] self-center text-center text-5xl leading-[4rem]">
              Value proposition accelerator product management venture
            </p>
          </div>
          <div className="mx-auto mb-20 grid max-w-[1000px] grid-cols-3 gap-5">
            {blogInfo.map(
              (
                { url, summary, imgUrl, category, date, author, authorImgUrl },
                index,
              ) => {
                return (
                  <BlogCard
                    key={index}
                    url={url}
                    summary={summary}
                    imgUrl={imgUrl}
                    category={category}
                    date={date}
                    author={author}
                    authorImgUrl={authorImgUrl}
                  />
                );
              },
            )}
          </div>
          <div className="flex justify-center">
            <Button text="Load more" variant="primary" outline />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container className="relative z-10">
          <div className="relative overflow-hidden rounded-xl bg-primary py-16 text-white">
            <div className="relative z-10 flex flex-col">
              <h2 className="mb-8 max-w-[700px] self-center text-center text-white">
                An enterprise template to ramp up your company website
              </h2>

              <form className="flex justify-center space-x-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full max-w-96 rounded-full px-4 py-3 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />

                <Button type="submit" text="Start now" variant="secondary" lg />
              </form>
            </div>
            <div className="bg-primary-light absolute -right-[500px] -top-[1000px] z-[0] h-[1200px] w-[1200px] animate-float rounded-full" />
          </div>
        </Container>
      </section>
    </>
  );
}
