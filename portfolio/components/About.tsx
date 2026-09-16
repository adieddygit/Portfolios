  "use client";
  
  {/* ABOUT PAGE */}

  const About = () => {

  return (
    <div id="about" className="bg-black text-gray-200 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="font-quicksand text-sm leading-loose tracking-wider max-w-8xl mx-auto">
          I began my career as a registered nurse delivering patient-centered care and leading health initiatives. While I found fulfillment in improving lives through healthcare, I also discovered a growing curiosity for technology and its potential to drive innovation. What started as an interest soon became a passion—the idea of building solutions that bridge healthcare and technology. With a commitment to lifelong learning, I transitioned into the tech industry, equipping myself with skills in software development, cloud, and DevOps. Today, I bring together the empathy and discipline of healthcare with the problem-solving mindset of technology, aspiring to create impactful solutions that make a difference.
        </p>
        <div id="resume" className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="">
            <a href="#0" className="inline-block border-white border text-white px-16 py-2 rounded hover:bg-indigo-500">HIRE ME</a>
        </span>
        <span className="">
            <a
              href="https://drive.google.com/file/d/1FedPr1lOL-j3yWGv_iXQXH-mLaXNeiE-/view?usp=sharing"
              className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-indigo-500 hover:text-indigo-100"
              download
              >DOWNLOAD RESUME
            </a>
        </span>
        </div>
    </div>
  );
};

export default About;