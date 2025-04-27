import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">We'd love to hear from you! Feel free to reach out for any inquiries or project ideas.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <form className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message here"
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
