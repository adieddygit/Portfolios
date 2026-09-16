"use client";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import InstagramIcon from "@mui/icons-material/Instagram";

const iconClass = "text-indigo-600 hover:text-white p-1 transition-all duration-200 hover:-translate-y-1";


{/* Social Links + Footer */}
const Footer = () => {
  return (
    <>
    <footer className="bg-mauve-900 py-12 px-6 sm:px-10 md:px-20 text-center">
  {/* Socials */}
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
    <div className="text-indigo-500 mb-6">&copy; 
      Copyright <span className="text-gray-400">
        EmmanuAdi</span> <span className="text-gray-400">
        {new Date().getFullYear()}</span> <span className="text-fuchsia-100">|
        </span> Designed by <span className="text-gray-400">
          ® Emmanuel Adi</span></div>      
    </footer>
    </>
  );
};

export default Footer;