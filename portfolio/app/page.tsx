"use client";

// import { useEffect } from "react";
import About  from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Work from "@/components/Work";



export default function HomePage() {

  return (
    <main className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
        <Header />
        <Hero/>
        <About/>
        <Work/>
        <Services/>
        <Blog/>
        <Contact/>
        <Footer/>
    </main>
  );
};