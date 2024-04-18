import userPic1 from "../assets/Oval.png";
import userPic2 from "../assets/Oval2.png";
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
];
export default function Testimonials() {
  return (
    <section className="testimonials bg-[#473BF01C] my-4 flex flex-wrap justify-evenly items-center md:p-24">
      {userExps.map((exp, i) => (
        <UserExp
          key={i}
          header={exp.header}
          text={exp.text}
          img={exp.img}
          userName={exp.userName}
        />
      ))}
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
