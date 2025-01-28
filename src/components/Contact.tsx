import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// (property) React.RefAttributes<HTMLFormElement>.ref?: React.LegacyRef<HTMLFormElement> | undefined

const Contact = () => {
  // const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formParameters = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Krishna Koturu",
      message: formData.message,
    };

    // Handle form submission here
    console.log(formData);
    e.preventDefault();
    emailjs
      .send("service_ejvhboh", "template_cuovzjl", formParameters, {
        publicKey: "xE2WL_SzrygJJiBXu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">
                  krishna.koturu08@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">+91 7569271785</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-600">Hyderabad</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
