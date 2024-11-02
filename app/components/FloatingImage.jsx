import React from "react";
import Image from "next/image";

export default function FloatingImage({ url, secondaryUrl, alt, position }) {
    const floatingImageStyles = {
        right: "right-8",
        left:"left-8"
    }
  return (
    <div className="relative max-w-[500px] aspect-[9/10] mx-auto mb-32">
      <Image
        className="rounded-3xl"
        
        fill
        src={url}
        alt={alt}
      />

      <div className={`absolute -bottom-1/4 ${floatingImageStyles[position]} animate-float`}>
        <Image src={secondaryUrl} />
      </div>
    </div>
  );
}
