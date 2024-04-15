import howItWorks from "../assets/how-it-works.png";
const steps = [
  {
    header: "Create an Event",
    text: "Begin by creating your event in a few simple steps",
  },
  {
    header: "Share Event Links",
    text: "With just a click, share event links with your guests via email or social media.",
  },
  {
    header: "Manage RSVPs",
    text: "Guests can effortlessly register for your event through the provided event links",
  },
  {
    header: "Send Updates",
    text: "Utilize our built-in communication tools to send event updates, reminders, and important announcements",
  },
];
export default function HowItWorks() {
  return (
    <section
      className="how-it-works max-w-[1440px] mx-auto text-[#161C2D]"
    >
      <h2 className="works-heading relative text-center pt-10 w-1/2 mx-auto text-4xl font-semibold mb-6">
        How It Works
      </h2>
      <p className="text-xl text-center mx-auto w-[70ch]">
        Our intuitive interface simplifies guest registration and RSVP, ensuring
        a smooth and convenient experience for your attendees.
      </p>
      <div className="flex justify-evenly items-start h-fit my-20">
        <img
          src={howItWorks}
          alt="how-it-works"
          width={"579.55px"}
          height={"388.07px"}
        />
        <div className="steps flex flex-col gap-10">
          {steps.map((step, i) => (
            <Step key={i} num={i + 1} header={step.header} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line react/prop-types
function Step({ num, header, text }) {
  return (
    <div className="step flex justify-center items-start gap-5 w-[45ch]">
      <span className="rounded-full p-6 bg-[#473bf024] w-4 h-4 aspect-square grid place-content-center text-[#473bf0]">
        <span className="text-xl">{num}</span>
      </span>
      <div>
        <h3 className="text-xl mb-4 font-semibold">{header}</h3>
        <p className="text-l text-left">{text}</p>
      </div>
    </div>
  );
}
