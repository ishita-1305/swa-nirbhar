const Roadcom = () => {
  const data = [
    {
      title: "50+",
      desc: "Hackathons, Designathons & Ideathons",
      color: "bg-[#e3f0ff]", // soft bluish
    },
    {
      title: "300+",
      desc: "Live Sessions by Industry Experts",
      color: "bg-[#f5e6f7]", // soft pinkish
    },

    {
      title: "1500+",
      desc: "Free Events Organized",
      color: "bg-[#dbeafe]", // light blue
    },
  ];

  return (
    <div className="relative overflow-hidden pt-20">
      {/* Background */}
      <div className="bg-gradient-to-t from-[#fdfbfb] via-[#f5e6f7] to-[#dbeafe] absolute inset-0 rotate-6 w-[260%] -ml-20 h-[60vh] md:h-[50vh] lg:h-[63vh] xl:h-[78vh] overflow-hidden"></div>

      <div className="relative">
        {/* Heading */}
        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="font-semibold font-kumbh text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-2 md:w-[80%] pt-5">
            <p>
              Explore exclusive live events crafted to elevate your expertise
              and immerse you in your favorite fields. Our sessions are led by
              industry experts with extensive knowledge.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10 my-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.color} flex flex-col items-center text-center justify-center p-6 rounded-2xl w-[70vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] xl:w-[16vw] shadow-lg h-[35vh]`}
            >
              <p className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 font-Monts">
                {item.title}
              </p>
              <p className="mt-3 text-xs md:text-sm lg:text-base text-gray-600 px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadcom;
