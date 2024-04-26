import userPic1 from "../assets/Oval.png";
import userPic2 from "../assets/Oval2.png";
import userPic3 from "../assets/Oval3.png";
const userExps = [
  {
    img: userPic1,
    header: "“Exceeded my expectations.”",
    text: "Easy to create invitations, manage registrations, and communicate.\nHighly recommend!",
    userName: "James Rodriguez",
  },
  {
    img: userPic2,
    header: "“Presentation Made Easy”",
    text: "Personalized invitations, smooth registration, and great communication tools.",
    userName: "Sarah Thompson",
  },
  {
    img: userPic3,
    header: "“Amazing User Experience”",
    text: "Event creation and management made easy, with a smooth and highly accessible user interface.",
    userName: "Daniella Ferguson",
  },
];
export default function Testimonials() {
  return (
    <section className="testimonials bg-[#473BF01C]">
      <div className="testimonial-container my-4 md:p-24 flex items-center justify-evenly relative">
        <div className="test-con flex gap-36 mr-36">
          {userExps.map((exp, i) => (
            <UserExp
              key={i}
              header={exp.header}
              text={exp.text}
              img={exp.img}
              userName={exp.userName}
            />
          ))}
        </div>
        <div className="test-con flex gap-36 aria-hidden:">
          {userExps.map((exp, i) => (
            <UserExp
              key={i}
              header={exp.header}
              text={exp.text}
              img={exp.img}
              userName={exp.userName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line react/prop-types
function UserExp({ header, text, img, userName }) {
  return (
    <div className="userExp text-center flex flex-col justify-center items-center gap-4 p-6">
      <img src={img} alt="user-pic" />
      <h2 className="md:text-2xl text-xl font-semibold">{header}</h2>
      <p className="md:text-xl text-l w-[30ch]">{text}</p>
      <span className="text-[#473BF0]">{userName}</span>
    </div>
  );
}
