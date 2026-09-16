  "use client";
import Image from 'next/image';
  import { motion } from "framer-motion";
  
  
  {/* HERO CONTENT */}
  export default function Hero() {
    return (
      <>
      {/* HERO SECTION */}
      <section
        className="text-white py-16 text-center bg-black bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.png')" }}
      >
        <div id="intro" className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 90}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.9}}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
              {/* Text */}
            <div className="text-center">
                <p className="text-5xl font-bold text-pink-500">
                Emmanuel Adi
              </p>
              <p className="text-2xl mt-4">
                Software Developer | DevOps | Cloud Engineer
              </p>
            </div>

                <Image
              src="/images/adiemmanuel.png"
              alt="Emmanuel Adi"
              width={250}
              height={250}
              priority
              className=" rounded-full object-cover shadow-lg border-indigo-400 border-2"
            />
            </div>

                    {/* Call to Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#contact"
              className="bg-white text-indigo-600 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 focus:text-white active:bg-indigo-700 transition duration-300 px-6 py-3 rounded-full
                      hover:bg-gray-100 border border-gray-900 hover:text-indigo-700">
              Let’s Connect
            </a>

            <a href="#blog"
                    className="bg-black text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 focus:text-white active:bg-indigo-700  px-6 py-3 rounded-full font-sans hover:bg-gray-100
                          hover:text-indigo-600 transition duration-300 border border-indigo-300">
              Join Newsletter
            </a>
            
          </div>
          </motion.div>
        </div>
        </section>
        </>
        );
        }
