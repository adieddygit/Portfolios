"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import InstagramIcon from "@mui/icons-material/Instagram";
import { Menu, X } from "lucide-react"



const Header = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
    }, [])

/*-------------------- SCROLL HANDLER -------------------*/ 
useEffect(() => {
    const onScroll = () => {
        const y = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;

        setScrolled(y > 80); // threshold after main section starts
        setProgress(h > 0 ? y / h : 0);
    };

    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll)
}, []);


/* -------------------- ROUTE THEME -------------------- */
    const forceDark =
        pathname.startsWith("/#intro") 

    const isDark = forceDark || scrolled;

    /* ----------------- STYLE ----------------- */ 
    const iconClass = "hover:text-indigo-600 p-1 transition-all duration-200 hover:-translate-y-1";

    const headerClass = `
    fixed p-1.5 top-0 left-0 right-0 z-100 transition-all duration-300
    ${isDark ? "bg-black text-white shadow-lg" : "bg-white text-indigo-600 shadow-none"}`;
    return (
        <>
         {/* PROGRESS BAR */}
         <div className="fixed top-0 left-0 right-0 h-1 z-110">
            <div className="h-full bg-indigo-600 origin-left transition-transfrom duration-150" style={{ transform: mounted ? `scaleX(${progress})` : `scaleX(0)`}}/>
         </div>
          {/* NAV BAR */}
      <div className={headerClass}>
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

            <h1 className="hover:text-indigo-600 font-display text-2xl font-semibold tracking-tighter">
              EKAdi
            </h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-10 text-gray-400 text-sm">
              <Link href="#intro" className="hover:text-indigo-600">Intro</Link>
              <Link href="#about" className="hover:text-indigo-600">About</Link>
              <Link href="#portfolio" className="hover:text-indigo-600">Work</Link>
              <Link href="#services" className="hover:text-indigo-600">Services</Link>
              <Link href="#blog" className="hover:text-indigo-600">Blog</Link>
              <Link href="#contact" className="hover:text-indigo-600">Contact</Link>
            </nav>
            <div id="social" className="hidden md:flex space-x-4 transform transition duration-300 ease-in-out hover:translate-x-2">
              <div className="p-3">
                <Link
                  href="https://www.facebook.com/adieddygh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={iconClass}>  
                  <FacebookIcon fontSize="medium" />
                </Link>
                
                <Link
                  href="https://twitter.com/adieddy10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className={iconClass}>
                  <TwitterIcon fontSize="medium"/>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/emmanuel-a-618594265"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconClass}>
                  <LinkedInIcon fontSize="medium"/>
                </Link>
                <Link
                  href="https://wa.me/233266425838"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={iconClass}>
                  <WhatsAppIcon fontSize="medium"/>
                </Link>
                <Link
                  href="https://instagram.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={iconClass}>
                  <InstagramIcon fontSize="medium"/>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburgar Button */}
            <button
              onClick={() => {setMenuOpen((prev) => !prev)}}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              className="md:hidden text-indigo-400 text-2xl font-bold"
            >
               {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Overlay */}
      
        {menuOpen && (
          <div id="overlay"
            onClick={() => setMenuOpen(false)}
            className="md-hidden"
          />
        )}

        {/* Mobile Menu */}
        <div id="mobile-menu"
          className={`fixed top-0 left-0 mt-8 w-full bg-black text-indigo-600 transform transition-transform duration-500 z-10 flex flex-col items-center py-10 space-y-6
          ${menuOpen ? "translate-y-0 opacity-90 pointer-events-auto" : "-translate-y-full opacity-50 pointer-events-none"}`}
        >
          <a href="#intro">Intro</a>
          <a href="#about">About</a>
          <a href="#portfolio">Work</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <div className="space-x-4 text-3xl text-indigo-600 transform transition duration-300 ease-in-out hover:translate-x-2">
            <div className="p-2 text-4xl">
            <Link
              href="https://www.facebook.com/adieddygh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={iconClass}>  
              <FacebookIcon fontSize="large" />
            </Link>
            <Link
              href="https://twitter.com/adieddy10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={iconClass}>
              <TwitterIcon fontSize="large"/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/emmanuel-a-618594265"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconClass}>
              <LinkedInIcon fontSize="large"/>
            </Link>
            <Link
              href="https://wa.me/233266425838"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={iconClass}>
              <WhatsAppIcon fontSize="large"/>
            </Link>

            <Link
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconClass}>
              <InstagramIcon fontSize="large"/>
            </Link>
            </div>
          </div>
      </div>
    </>
    );
};
    
export default Header;