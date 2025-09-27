'use client'; 
import React from 'react'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Landing_page from './components/Landing_page';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Foot from './components/Foot';

const Page = () => {
  useEffect(() => {
    // Make sure the element exists and cast it as HTMLElement
    const container = document.querySelector('#main-container') as HTMLElement | null;

    if (!container) return;

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
    } as any);

    return () => scroll.destroy();
  }, []);

  return (
    <div id="main-container">
      <Navbar/>
      <Landing_page/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
     
        
      <Cards/>
      <Foot/>
      
    </div>
  );
};

export default Page;
