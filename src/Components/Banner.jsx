import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import bg from "../assets/header_bg.png";
import profile from "../assets/profile.jpg";
import resume from "../assets/ShahriarCV.pdf";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-OpenSans">
      <div className="flex flex-col items-start justify-center space-y-6 px-4 sm:px-6 lg:px-10">
        <p className="text-color2 text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
          Hello, I'm Md. Shahriar Kabir
        </p>
        <h1 className="text-color4 font-bold text-3xl sm:text-4xl md:text-5xl text-center sm:text-left">
          Frontend Developer
        </h1>
        <p className="text-color3 text-sm sm:text-base md:text-lg text-center sm:text-left">
          Crafting responsive and interactive user interfaces with modern tools,
          frameworks, and attention to detail.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
          <button className="rounded-full p-2 sm:p-3 border border-color4">
            <a href="https://www.facebook.com/shahriar.kawsik" target="_blank">
              <FaFacebook className="text-color4 text-xl sm:text-2xl" />
            </a>
          </button>
          <button className="rounded-full p-2 sm:p-3 border border-color4">
            <a
              href="https://www.linkedin.com/in/shahriar-kawsik-21916117b"
              target="_blank"
            >
              <FaLinkedin className="text-color4 text-xl sm:text-2xl" />
            </a>
          </button>
          <button className="rounded-full p-2 sm:p-3 border border-color4">
            <a href="https://github.com/Shahriarkawsik" target="_blank">
              <FaGithub className="text-color4 text-xl sm:text-2xl" />
            </a>
          </button>
          <button className="rounded-full p-2 sm:p-3 border border-color4">
            <a href="https://x.com/ShahriarKawsik" target="_blank">
              <FaTwitter className="text-color4 text-xl sm:text-2xl" />
            </a>
          </button>
        </div>
        <div className="flex justify-center sm:justify-start">
          <button className="bg-color4 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-xl">
            <a
              href={resume}
              download="resume.pdf"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </button>
        </div>
      </div>

      <div
        className="flex items-center justify-end"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "90% 70%",
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img className="w-fit" src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Banner;
