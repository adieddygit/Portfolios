  "use client";

// import Image from "next/image";

  const Work = () => {
    return (
  <>
  {/* PORTFOLIO */}
  <section id="portfolio" className="py-16 px-6 bg-indigo-950">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-3xl font-bold mb-6 text-white">
      My Works
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* 🔹 YouTube Project */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="text-md font-semibold mb-3">EcoWatchGh App</h3>
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/7S-wbsM12TY"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      </div>

      {/* 🔹 Google Slides */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold mb-3">Slide Deck</h3>
        <div className="relative w-full aspect-video">
          <iframe
            src="https://docs.google.com/presentation/d/1UxkIBZGtwpVvfD_RDQ8D7_N6_787G3Em7ZDxucPZiMY/embed"
            className="absolute inset-0 w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>

      {/* 🔹 Video Demo */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
        <h3 className="text-md font-semibold mb-2">HPT-DM Clinic</h3>
          <p className="text-gray-600 mb-2 text-sm">
            Full-stack app built with Python Flask backend.
          </p>
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <video
            src="/video/HPTDM Online Clinic.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div> 
        <a
          href="https://github.com/adieddygit/HPT-DM-CLINIC-"
          target="_blank"
          className="mt-auto bg-black text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800"
        >
          View on GitHub
        </a> 
      </div>
        

      {/* 🔹 Project Repo 2 */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between">
        <div>
          <h3 className="text-md font-semibold mb-2">Globafricollection</h3>
          <p className="text-gray-600 mb-4 text-sm">
            Frontend project built with HTML, CSS, and JS.
          </p>

          <div className="flex items-center gap-3 mb-4">
            <img src="https://img.shields.io/github/stars/adieddygit/Globafricollection?style=social" alt=""/>
            <img src="https://img.shields.io/github/forks/adieddygit/Globafricollection?style=social" alt=""/>
          </div>
        </div>
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <iframe
            src="https://adieddygit.github.io/Globafricollection/"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <a
          href="https://github.com/adieddygit/Globafricollection"
          target="_blank"
          className="mt-auto bg-black text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </div>
</section>
</>
    
    );
  };

export default Work;