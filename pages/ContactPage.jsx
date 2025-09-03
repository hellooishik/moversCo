import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";

function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Questions? Need support? Fill the form and we will get back to you.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold">Office</h3>
            <p className="mt-2 text-sm text-gray-600">
              1234 Elm Street, Suite 100<br />City, Country 56789
            </p>
            <div className="mt-4 text-sm text-gray-600">
              Email: support@moversco.com<br />Phone: +1 (555) 123-4567
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
