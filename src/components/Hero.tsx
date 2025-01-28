import React from "react";
import { ArrowRight } from "lucide-react";

const customImage = {
  width: "600px",
  height: "600px",
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-blue-600">Krishna Koturu</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I’m a <span className="text-blue-500"> Frontend Developer </span>
              passionate about creating seamless and engaging user interfaces. I
              specialize in HTML, CSS, JavaScript, React.js, Material-UI, and
              Redux, delivering responsive and interactive applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/dm6idxzxg/image/upload/v1738045415/WhatsApp_Image_2025-01-28_at_11.51.18_AM_rcw9tf.jpg?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Developer workspace"
              className="rounded-lg shadow-xl w-[600px] h-[600px]"
              style={customImage}
              // style={{ width: "600px", height: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl small-image"
            /> */
}
