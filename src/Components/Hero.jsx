import png1 from "../assets/pngwing 2.png";
const Hero = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto text-center mt-2 md:mt-12 px-4">
        <div className="leading-[43.5px] md:leading-[65px] mx-auto text-[#223134] text-[32px] md:text-[48px] font-bold">
          <h1>
            The Simplest Way to <br /> Manage Your <br />
            Events
          </h1>
        </div>
        <p className="md:py-8 py-4 text-[16px] md:text-[24px] text-[#223134]">
          Create Your First Event. It is Simple and Free
        </p>
        <Button text={"Create Event"} />
      </div>
      <div className="hero1 relative mt-24 px-4">
        <div className="rounded-[30px] mx-auto max-w-[1188px] h-[292px] md:h-[400px] bg-[#473BF0]"></div>
        <img
          className="max-md:w-[350px] max-md:h-[460px] absolute bottom-4 md:bottom-0 left-1/2 transform -translate-x-1/2"
          src={png1}
          alt=""
        />
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
export function Button({ text }) {
  return (
    <button className="text-white rounded-[42px] bg-[#473BF0] text-bold text-[20px] w-[201px] h-[66px]">
      {text}
    </button>
  );
}
export default Hero;
