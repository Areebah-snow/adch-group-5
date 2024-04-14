import logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-6">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Support</li>
        </ul>
        <div className="flex gap-4">
          <button className="w-[104px] h-[40px] border-2 rounded-[24px] text-blue-500 border-blue-500">
            Login
          </button>
          <button className="w-[104px] h-[40px] border-2 rounded-[24px] bg-blue-500 text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
