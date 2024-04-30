import feature1 from "../assets/feat1.png";
import feature2 from "../assets/feat2.png";
import feature3 from "../assets/feat3.png";
import feature4 from "../assets/feat4.png";
import feature5 from "../assets/feat5.png";
import feature6 from "../assets/feat6.png";

const featuresArr = [
  {
    imgUrl: feature1,
    header: "Easy Event Creation",
    text: "Create beautiful event pages in minutes. Add details, set dates, and invite your guests with ease.",
  },
  {
    imgUrl: feature2,
    header: "RSVP Tracking",
    text: "Track RSVPs in real-time. See who's coming, who's not sure, and who's declined - all in one place.",
  },
  {
    imgUrl: feature3,
    header: "Real-time Notifications",
    text: "Send automated reminders and keep your guests informed with updates about your event.",
  },
  {
    imgUrl: feature4,
    header: "Customizable Event Details",
    text: "Offer flexible RSVP options like 'Maybe' or collect additional guest information with ease..",
  },
  {
    imgUrl: feature5,
    header: "Shareable Event Links",
    text: "Offer flexible RSVP options like 'Maybe' or collect additional guest information with ease.",
  },
  {
    imgUrl: feature6,
    header: "Plan on-the-go",
    text: "Manage your events and RSVPs on the go, from any device.",
  },
];
export default function Features() {
  return (
    <section
      className="features container-xl max-w-[1440px] mx-auto md:my-20 my-9 flex justify-center items-center flex-col"
      id="about"
    >
      <h2 className="feature-heading relative text-center md:p-10 pt-8 md:w-1/2 md:text-4xl text-2xl font-semibold mb-6">
        Our Powerful <br />
        Features for Seamless Planning
      </h2>
      <div className="flex justify-center items-center flex-wrap ">
        {featuresArr.map((f, i) => (
          <Feature key={i} imgUrl={f.imgUrl} header={f.header} text={f.text} />
        ))}
      </div>
    </section>
  );
}
// eslint-disable-next-line react/prop-types
function Feature({ imgUrl, header, text }) {
  return (
    <div className="feature flex items-center justify-center xl:px-24 p-10 py-6 flex-col lg:w-1/3 md:w-1/2 w-2\3 text-center gap-3 mb-8">
      <span className="rounded-full w-24 h-24 bg-[#473BF0] flex justify-center items-center">
        <img src={imgUrl} />
      </span>
      <h3 className="text-2xl font-semibold">{header}</h3>
      <p className="text-xl">{text}</p>
    </div>
  );
}
