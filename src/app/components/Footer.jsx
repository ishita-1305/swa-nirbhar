import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5e6f7] text-gray-700 mt-10 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand / About */}
          <div>
            <img
              src="/assets/swa.png"
              alt="Swanirbhar Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Building a strong community through events, innovation, and
              collaboration. Join us as we explore new horizons and
              opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#history" className="hover:underline">
                  History
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:underline">
                  Vision
                </a>
              </li>
              <li>
                <a href="#events" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
            <p className="text-sm mb-3">
              Subscribe for updates on upcoming events and initiatives.
            </p>
            <form className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <button
                type="submit"
                className="bg-[#6D3C52] text-[#FADCD5] px-4 py-2 rounded-lg hover:bg-[#765D67] transition text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-sky-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Swanirbhar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
