import { Button } from "./Hero";
export default function CTA() {
  return (
    <section className="cta flex p-36 justify-around items-center">
      <div className="flex flex-col justify-start items-center text-left w-[70ch] gap-6">
        <h2 className="text-4xl font-semibold leading-10 ">
          Ready to simplify your event management process?
        </h2>
        <p className="text-xl font-light leading-7">
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
