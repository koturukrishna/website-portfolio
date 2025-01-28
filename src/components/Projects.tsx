import React from "react";
import { ExternalLink, Github } from "lucide-react";

// https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png

// image:
//         "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600&h=400",

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "The Nxt Trends App is a React-based e-commerce application designed to provide a seamless shopping experience. It features a user-friendly interface where users can browse and search for products, add items to the cart, and manage their selections efficiently.A secure login feature allows users to access their accounts. Test the app using: Username: rahul and Password: rahul@2021",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600&h=400",
      technologies: ["React", "Node.js", "CSS", "Redux"],
      githubUrl: "https://github.com/koturukrishna/Ecommerce-Trends-App",
      liveUrl: "https://krish-nxt-trends.netlify.app/",
    },
    {
      title: "Tasty Kitchen App",
      description:
        "Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food items to cart, and payments section",

      // image:
      //   "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600&h=400",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzm8vp0kNJX72uPcYQfaBKDRiJ9UmPWT7fg&s",
      technologies: ["React", "CSS", "HTML"],
      githubUrl: "https://github.com",
      liveUrl: "https://tastykitchens15.ccbp.tech/",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      technologies: ["React", "TypeScript", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzm8vp0kNJX72uPcYQfaBKDRiJ9UmPWT7fg&s
