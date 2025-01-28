import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Krishna
          </a>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-xl font-bold text-gray-600 hover:text-blue-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl font-bold text-gray-600 hover:text-blue-900 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-xl font-bold text-gray-600 hover:text-blue-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xl font-bold text-gray-600 hover:text-blue-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xl font-bold text-gray-600 hover:text-blue-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex space-x-4">
            {/* <a
              href="https://github.com/koturukrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 "
            >
              <Github size={24} />
            </a> */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <Github size={24} />
            </a>
            {/* <a
              href="https://www.linkedin.com/in/krishna-koturu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:krishna.koturu08@gmail.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail size={24} />
            </a> */}

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            <a
              href="#home"
              className="py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
