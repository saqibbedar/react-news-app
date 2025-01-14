import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-12 pb-10">
      <div className="pt-10 flex items-center justify-between border-b-2 pb-2 w-[85%] m-auto">
        <h1 className="text-2xl font-bold">The News Daily</h1>
        <div className="flex gap-3">
          <Link to={"/"}>
            <BsTwitterX className="h-6 w-6" />
          </Link>
          <Link to={"/"}>
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link to={"/"}>
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link to={"/"}>
            <FaYoutube className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <p className="flex items-center justify-center mt-3 gap-1">
        All Rights Are Reserved © 2025 -{" "}
        <Link to={"/"} className="hover:text-[#d5352d] font-semibold">
          {" "}
          The News Daily
        </Link>
      </p>
    </div>
  );
};

export default Footer;
