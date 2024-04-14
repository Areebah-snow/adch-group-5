import png1 from "../assets/pngwing 2.png";
const Hero = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto text-center mt-12">
        <div className="max-w-[700px] leading-[65px] mx-auto text-[#223134] text-[48px] font-bold">
          <h1>
            The Simplest Way to <br /> Manage Your <br />
            Events
          </h1>
        </div>
        <p className="py-8 text-[24px] text-[#223134]">
          Create Your First Event. It is Simple and Free
        </p>
        <button className="text-white rounded-[42px] bg-[#473BF0] text-bold text-[20px] w-[201px] h-[66px]">
          Create Event
        </button>
      </div>
      <div className="hero1 relative mt-24">
        <div className="rounded-[30px] mx-auto max-w-[1188px] h-[400px] bg-[#473BF0]"></div>
        <img
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          src={png1}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
