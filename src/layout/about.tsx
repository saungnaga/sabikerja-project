import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";
import {
  faCoins,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <div className="container flex flex-col items-center lg:flex-row gap-5 justify-center p-3 md:p-10 min-w-full">
        <div className="flex flex-col justify-center items-center gap-5 text-center lg:w-2/3">
          <div className="text-2xl md:text-5xl font-semibold p-10 leading-relaxed border-b-2 shadow-md">
            "We're reimagining how Startups and Small businesses have
            difficulties getting great talent for the growth of their business."
          </div>
          <div className="hidden lg:flex flex-col items-center gap-4">
            <div className="flex gap-10 mt-10">
              <div>
                <div className="text-5xl text-red-600">10 Minutes</div>
                <div>To apply and find a good candidate</div>
              </div>
              <div>
                <div className="text-5xl text-red-600">30+</div>
                <div>Companies Trust Us</div>
              </div>
            </div>
            <div className="font-bold text-4xl">
              Take Your <span className="text-red-600">Talent Acquisition</span>{" "}
              To The Next Level!
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 lg:px-10">
          <div className="scroll-container">
            <div className="scroll-content">
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo4} alt="" />
              <img src={photo5} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-4 text-center items-center">
          <div className="flex items-center p-2">
            <div>
              <div className="text-5xl text-red-600">10 Minutes</div>
              <div>To apply and find a good candidate</div>
            </div>
            <div>
              <div className="text-5xl text-red-600">30+</div>
              <div>Companies Trust Us</div>
            </div>
          </div>
          <div className="font-bold text-4xl">
            Take Your <span className="text-red-600">Talent Acquisition</span>{" "}
            To The Next Level!
          </div>
        </div>
      </div>
      <div className="p-10 text-justify">
        <div className="text-3xl font-semibold">About SabiKerja</div>
        <div className="text-xl mt-4 leading-relaxed text-gray-500">
          SabiKerja is a one-stop solution for talent’s needs.
          <br />
          We are a headhunter and talent solutions provider that provides ideal
          talent to the company because we believe that a great company begins
          with great people who develop and grow together. <br />
          At SabiKerja, we value our service-level agreement between talent and
          company in order to provide fast and high-quality services. <br />
          We began in a pandemic situation in 2021 due to a severe experience
          with Employment agencies, and we aim to provide a better solution and
          experience to all of the companies we assist.
        </div>
        <div className="text-2xl mt-2 text-gray-700">SabiKerja? SabiLah!</div>
      </div>
      <div className="text-center mt-10">
        <div className="text-4xl font-bold text-red-600">
          We Help <span className="text-black">You</span> Solve{" "}
          <span className="text-black">These</span> Problem
        </div>
        <div className="flex gap-5 p-10 flex-col md:flex-row text-red-500">
          <div className="shadow-lg rounded-xl shadow-gray-400 w-full p-10 flex flex-col gap-8">
            <FontAwesomeIcon icon={faHandshake} className="h-16" />
            <div className="text-2xl font-semibold text-black">
              End-To-End Hiring Assistant
            </div>
            <div className="text-xl">
              Optimize the Hiring process{" "}
              <span className="text-gray-600">
                with comprehensive talanet experience with
              </span>{" "}
              tight screening process
            </div>
          </div>
          <div className="shadow-lg rounded-xl shadow-gray-400 w-full p-10 flex flex-col gap-8">
            <FontAwesomeIcon icon={faCoins} className="h-16" />
            <div className="text-2xl font-semibold text-black">
              Affordable Service Fee
            </div>
            <div className="text-xl">
              <span className="text-gray-600">Our fee is</span> custom-made{" "}
              <span className="text-gray-600">
                based on your yearly headcount and team
              </span>{" "}
              member needed
            </div>
          </div>
          <div className="shadow-lg rounded-xl shadow-gray-400 w-full p-10 flex flex-col gap-8">
            <FontAwesomeIcon icon={faUsers} className="h-16" />
            <div className="text-2xl font-semibold text-black">
              Employer Branding Consultation
            </div>
            <div className="text-xl">
              <span className="text-gray-600">
                Feels like your closing rate was
              </span>{" "}
              not good?{" "}
              <span className="text-gray-600">
                Let's discuss the EB side to strengthen the
              </span>{" "}
              recruitment process
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
