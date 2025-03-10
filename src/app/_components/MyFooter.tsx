import Image from "next/image";
import imgOne from "../../../assests/logo.png";
import { MdArrowOutward } from "react-icons/md";
import FooterSlider from "./FooterSlider";

const MyFooter = () => {
  return (
    <>
    <section
      id="footer"
      className="px-4 pt-20 border-t border-gray-700 border-opacity-50"
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="cols-span-12 md:col-span-1 flex justify-center md:justify-start items-center">
            <Image
              src={imgOne}
              alt=""
              className="mr-3 w-[40px] md:w-[80px] h-[40px] md:h-[80px] rounded-full"
            ></Image>
            <h3 className="text-[1rem] md:text-[1.8rem] font-semibold">CodeSlu</h3>
          </div>
          <div className="cols-span-12 md:col-span-10 flex flex-col justify-between items-center">
            <h4 className="font-semibold text-[#515151] mb-3">
              REACH OUT TO US
            </h4>
            <p className="md:text-[1.5rem]">(+20) 1204811102</p>
            <p className="md:text-[1.5rem]">mohamedgamalz3731@gmail.com</p>
          </div>
          <div className="cols-span-12 md:col-span-1 flex flex-col justify-between items-center md:items-end">
            <h4 className="self-s font-semibold text-[#515151] mb-3">SOCIAL</h4>
            <ul className="flex flex-col items-end gap-3">
              <li>
                <a className="flex gap-1 items-center" href="">
                  <MdArrowOutward />
                  LINKEDIN
                </a>
              </li>
              <li>
                <a className="flex gap-1 items-center" href="">
                  <MdArrowOutward />
                  WHATSAPP
                </a>
              </li>
              <li>
                <a className="flex gap-1 items-center" href="">
                  <MdArrowOutward />
                  FACEBOOK
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="font-semibold text-[#515151] flex flex-col md:flex-row items-center md:justify-between justify-center mt-10">
        <p>© 2024 ALL RIGHTS RESERVED</p>
        <p>BASED IN HANOI, VIETNAM</p>
        </div>
      </div>
        
    </section>
      <div className="w-full  mb-0 p-0">
      <FooterSlider />
      </div>
    </>
  );
};

export default MyFooter;
