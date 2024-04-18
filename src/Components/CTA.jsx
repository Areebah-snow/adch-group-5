import { Button } from "./Hero";
export default function CTA() {
  return (
    <section className="cta flex lg:p-36 p-6 justify-around md:flex-nowrap flex-wrap items-center">
      <div className="flex flex-col justify-start items-center text-center lg:text-left lg:w-[70ch] w-3\4 md:gap-6 gap-8">
        <h2 className="md:text-4xl text-3xl font-semibold md:leading-10 ">
          Ready to simplify your event management process?
        </h2>
        <p className="text-xl font-light leading-7 md:mb-0 mb-10">
          Get started today and experience effortless planning, seamless
          communication, and comprehensive analytics.
          <br />
          Join us now and revolutionize your event coordination!
        </p>
      </div>
      <Button text={"Create Event"} />
    </section>
  );
}
