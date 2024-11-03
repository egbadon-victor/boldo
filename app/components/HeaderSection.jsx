import React from 'react'
import Header from './Header';
import Hero from './Hero';

export default function HeaderSection(props) {
    

    return (
      <header className="relative bg-primary pt-14">
        <div className='relative z-10'>
          <Header />
          <Hero />
        </div>
        <div className="bg-primary-light absolute -right-[600px] -top-[700px] z-[0] h-[1200px] w-[1200px] rounded-full animate-float"/>
      </header>
    );
}
