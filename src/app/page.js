import Footer from "./components/Footer";
import History from "./components/History";
import Methodology from "./components/Methodology";
import Roadcom from "./components/Roadcom";
import Slider from "./components/Slider";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-white to-pink-100 min-h-1.5 overflow-x-hidden">
      {/* Navbar */}
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2
        w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]
        z-50 bg-gradient-to-r from-blue-100 via-white to-pink-100
        border border-[#6D3C52]/40
        rounded-2xl shadow-lg
        flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/swa.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Button (Responsive) */}
        <button className="bg-[#6D3C52] text-[#FADCD5] px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-xl hover:bg-[#765D67] transition">
          Join us
        </button>
      </nav>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-full md:fixed md:inset-0 z-0"
      >
        <source src="/assets/swan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="relative z-10 w-[95%] sm:w-[90%] lg:w-[85%] mx-auto">
        {/* Spacer for Hero section */}
        <div className="h-[0vh] sm:h-[10vh] md:h-[60vh] lg:h-[75vh]"></div>

        {/* Content Section */}
        <div className="md:sticky md:z-10 md:top-24 md:pt-10 rounded-t-3xl">
          <div className="bg-white rounded-t-3xl shadow-lg md:h-[90vh] md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <History id="history" />
            <Methodology />
            <Slider />
            <Vision id="vision" />
            <Roadcom />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
