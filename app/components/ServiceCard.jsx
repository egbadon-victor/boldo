import React from 'react'
import Image from 'next/image'
import Link from './Link';

export default function ServiceCard({title, description, image, url}) {
    

    return (
      <div className="group flex justify-center mb-10">
        <div>
          <div className="mb-6 aspect-[3/2]">
            <Image className='w-full' src={image} alt={title}/>
          </div>
          <h3 className="md-2 sm:mb-3 text-2xl">{title}</h3>
          <p className="text-gray text-base md:text-xl w-full md:max-w-[300px] mb-3 sm:mb-7">{description}</p>
          <Link text="Explore page" url={url} />
        </div>
      </div>
    );
}
