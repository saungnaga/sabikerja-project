import logo from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="flex justify-between py-9 h-16 items-center pr-5 border-b-2 shadow-md border-gray-50">
            <div className="flex gap-4 items-center">
                <a href="/"><img src={logo} alt="logo sabikerja" /></a>
                <div className=" md:flex hidden gap-6">
                    <a href="" className="hover:text-red-700">Home</a>
                    <a href="" className="hover:text-red-700">Find Jobs</a>
                    <a href="" className="hover:text-red-700">Blog</a>
                    <a href="" className="hover:text-red-700">About Us</a>
                    <a href="" className="hover:text-red-700">Contact Us</a>
                </div>
            </div>
            <button className="md:flex hidden gap-2 items-center bg-red-700 p-3 rounded text-white px-7 hover:bg-white hover:text-red-700 hover:scale-90 border-2 border-red-700 transition-all duration-200">
                Add Job Now
                <FontAwesomeIcon icon={faWhatsapp} />
            </button>
            <button className="flex md:hidden">
            <FontAwesomeIcon icon={faBars} className="h-8"/>
            </button>
        </div>
    )
}

export default Header