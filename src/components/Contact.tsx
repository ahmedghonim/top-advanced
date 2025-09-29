"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Contact Us
        </h2>
        <div className="grid grid-cols-3 items-center justify-between gap-8">
          <div className="col-span-1">
            <div className="fade-in">
              <h3
                style={{ color: "var(--primary-blue)", marginBottom: "2rem" }}
              >
                Get in Touch
              </h3>
              <p style={{ marginBottom: "2rem" }}>
                Ready to partner with us for your healthcare solutions needs?
                Contact our team to discuss how TOP ADVANCED can support your
                organization.
              </p>
              <div style={{ marginBottom: "1rem" }}>
                <i
                  className="fas fa-envelope"
                  style={{ color: "var(--primary-blue)", marginRight: "10px" }}
                ></i>
                <span>info@topadvanced.com</span>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <i
                  className="fas fa-phone"
                  style={{ color: "var(--primary-blue)", marginRight: "10px" }}
                ></i>
                <span>+966 54 345 6789</span>
              </div>
              <div>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "var(--primary-blue)", marginRight: "10px" }}
                ></i>
                <span>Saudi Arabia</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-[80%] mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-dark-navy font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-dark-navy font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-dark-navy font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300 resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-button text-white py-4 px-8 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
