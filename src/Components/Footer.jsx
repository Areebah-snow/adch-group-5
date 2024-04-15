import Logo from "../assets/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#473BF0] w-full">
      <div className="max-w-[1440px] mx-auto mt-12 p-16">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-24">
          <div>
            <div className="flex md:justify-start justify-center">
              <img
                className="bg-[#D9D9D9] rounded-full p-6 mb-6"
                src={Logo}
                alt=""
              />
            </div>
            <p className="font-[600] text-[#bfbdbd]">
              Join us and discover the power of stress-free event .
            </p>
            <div className="flex gap-4 mt-4">
              <FaTwitter size={20} color="white" />
              <FaFacebook size={20} color="white" />
              <FaInstagram size={20} color="white" />
              <FaLinkedin size={20} color="white" />
            </div>
          </div>
          <div className="md:mt-16">
            <h5 className="mb-6 font-[400] text-[#bfbdbd]">Company</h5>
            <ul>
              <li className="my-2 text-white font-[400] text-[17px]">
                About us
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Contact us
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Careers
              </li>
            </ul>
          </div>
          <div className="md:mt-16">
            <h5 className="mb-6 font-[400] text-[#bfbdbd]">Product</h5>
            <ul>
              <li className="my-2 text-white font-[400] text-[17px]">
                Features
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Help desk
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Support
              </li>
            </ul>
          </div>
          <div className="md:mt-16">
            <h5 className="mb-6 font-[400] text-[#bfbdbd]">Legal</h5>
            <ul>
              <li className="my-2 text-white font-[400] text-[17px]">
                Privacy Policy
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Terms & Conditions
              </li>
              <li className="my-2 text-white font-[400] text-[17px]">
                Return Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
