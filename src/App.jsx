import React, { useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  useEffect(() => {
    // Dynamically load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2KSKPQKFS2'; // Replace with your tracking ID
    document.head.appendChild(script);

    // Initialize Google Analytics
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-2KSKPQKFS2'); // Replace with your tracking ID
    };
  }, []);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-[#0d0d1a]"></div>
        <div className="blob" style={{width:'500px',height:'500px',top:'-80px',left:'-80px',background:'radial-gradient(circle, #7c3aed, transparent 70%)',animationDuration:'18s',animationDelay:'0s'}}></div>
        <div className="blob" style={{width:'400px',height:'380px',top:'20%',left:'60%',background:'radial-gradient(circle, #0ea5e9, transparent 70%)',animationDuration:'22s',animationDelay:'-7s'}}></div>
        <div className="blob" style={{width:'350px',height:'320px',top:'55%',left:'5%',background:'radial-gradient(circle, #ec4899, transparent 70%)',animationDuration:'16s',animationDelay:'-4s'}}></div>
        <div className="blob" style={{width:'280px',height:'280px',top:'10%',left:'42%',background:'radial-gradient(circle, #f97316, transparent 70%)',animationDuration:'25s',animationDelay:'-12s'}}></div>
        <div className="blob" style={{width:'320px',height:'300px',top:'70%',left:'68%',background:'radial-gradient(circle, #10b981, transparent 70%)',animationDuration:'20s',animationDelay:'-9s'}}></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Projects />
        <Technologies />
        <About />
      </div>
    </div>
  )
}

export default App