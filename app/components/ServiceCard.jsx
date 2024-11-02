import React from 'react'
import Image from 'next/image'
import Link from './Link';

export default function ServiceCard({title, description, image, url}) {
    

    return (
      <div className="group flex justify-center">
        <div>
          <div className="mb-6">
            <Image src={image} />
          </div>
          <h3 className="mb-3 text-2xl">{title}</h3>
          <p className="text-gray text-xl max-w-[300px] mb-7">{description}</p>
          <Link text="Explore page" url={url} />
        </div>
      </div>
    );
}
