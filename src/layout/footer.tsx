import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "../assets/images/logo.png";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="p-10 my-10">
      <img src={icon} alt="sabikerja" className="h-14 -ml-4" />
      <div className="flex flex-col md:grid md:grid-cols-4 gap-5 justify-between">
        <div className="flex flex-col gap-2 w-full">
          <div className="text-xl">Call Us</div>
          <div className="mt-2 leading-loose">
              <div className="text-xl text-red-500">
                +62 21 509-969-69 Ext 1307
                <br />
                +62 8517-9898-921​
              </div>
              <div className="text-[#696565]">
                Gedung Wirausaha Lantai 1 Unit 104
                <br /> Jalan Haji R. Rasuna Said Kavling C5, RT.3/RW.1, Karet,
                Kecamatan Setiabudi, Daerah Khusus Ibukota Jakarta 12920
              </div>
              <a
                href="mailto:hello@sabikerja.com"
                className="text-blue-500 hover:font-bold"
              >
                hello@sabikerja.com
              </a>
          </div>
        </div>
        <div>
          <div className="text-xl">For Candidates</div>
          <a
            href=""
            className="hover-text hover:translate-x-[12px] transition-all duration-300 hover:text-blue-700 mt-2"
          >
            Browse Jobs
          </a>
        </div>
        <div className="flex flex-col">
          <div className="text-xl">About Us</div>
          <div className="mt-2">
              <a
                href=""
                className="hover-text hover:translate-x-[12px] transition-all duration-300 hover:text-blue-700"
              >
                Contact Us
              </a>
              <div className="flex">
                <div className="w-[12px] h-[2px] bg-blue-700 translate-y-3 -translate-x-[2px]"></div>
                <a href="" className="hover:text-blue-700 text-[#696565]">
                  About Us
                </a>
          </div>
          </div>
        </div>
        <div>
          <div className="text-xl">Visit Us</div>
          <div className="flex gap-2 mt-2">
              <a href="https://www.linkedin.com/company/mitra-cahaya-inovasi/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="h-16 hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/sabikerja/" target="_blank">
                <FontAwesomeIcon icon={faSquareInstagram} className="h-16 hover:text-pink-600" />
              </a>
              <a href="http://wa.me/+6285179898921?text=Halo%20SabiKerja%20Saya%20mau%20tau%20tentang" target="_blank">
                <FontAwesomeIcon icon={faSquareWhatsapp} className="h-16 hover:text-green-500" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100076229206843" target="_blank">
                <FontAwesomeIcon icon={faSquareFacebook} className="h-16 hover:text-blue-700" />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
