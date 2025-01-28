import React from "react";
import { Code2, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Working on laptop"
              className="rounded-lg shadow-lg"
            /> */}

            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate Front-End Developer specializing in building
              interactive and user-friendly web applications. With expertise in
              HTML, CSS, Bootstrap, React.js,Redux and Material-UI, Mysql I
              craft responsive and visually appealing interfaces that deliver
              seamless user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Code2 className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-600">
                  Modern, responsive web applications
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <Server className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-600">Scalable server solutions</p>
              </div>

              {/* <div className="p-4 bg-gray-50 rounded-lg">
                <Globe className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Full Stack</h3>
                <p className="text-gray-600">
                  End-to-end application development
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
