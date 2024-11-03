import React from "react";
import Image from "next/image";

export default function FloatingImage({ url, secondaryUrl, alt, position }) {
    const floatingImageStyles = {
        right: "right-8",
        left:"left-8"
    }
  return (
    <div className="relative max-w-[500px] aspect-[9/10] mx-auto mb-24 lg:mb-32">
      <Image
        className="rounded-3xl object-cover"
        fill
        src={url}
        alt={alt}
      />

      <div className={`absolute -bottom-1/4 ${floatingImageStyles[position]} animate-float w-[150px] sm:w-auto md:w-[200px] lg:w-auto`}>
        <Image className="w-full" src={secondaryUrl} />
      </div>
    </div>
  );
}
