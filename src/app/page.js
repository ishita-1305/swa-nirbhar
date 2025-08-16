import Footer from "./components/Footer";
import History from "./components/History";
import Methodology from "./components/Methodology";
import Roadcom from "./components/Roadcom";
import Slider from "./components/Slider";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <div className="md:relative bg-black min-h-screen">
      {/* Navbar */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2
  w-[90%] md:w-[70%] z-50
  bg-gradient-to-r from-blue-100 via-white to-pink-100
  border border-[#6D3C52]/40
  rounded-2xl shadow-lg
  flex items-center justify-between px-6 py-3"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/swa.png"
            alt="Logo"
            className="h-14 w-32 object-contain"
          />
        </div>

        {/* Button */}
        <button className="hidden md:block bg-[#6D3C52] text-[#FADCD5] px-4 py-2 rounded-xl hover:bg-[#765D67] transition">
          Join us
        </button>
      </nav>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full md:fixed z-5"
      >
        <source src="/assets/swan.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="md:w-[95vw] lg:w-[90vw] mx-auto scrollbar-thin scrollbar-thumb-gray-500">
        <div className="md:h-[50vh] lg:h-[70vh] xl:h-[80vh] h-0"></div>

        <div className="md:sticky md:z-10 md:top-20 md:pt-20 rounded-t-3xl">
          <div className="md:h-[90vh] md:overflow-y-auto bg-[#FFFFFF] rounded-t-3xl md:z-10">
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
