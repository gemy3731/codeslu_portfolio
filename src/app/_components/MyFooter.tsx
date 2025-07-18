import Image from "next/image";
import imgOne from "../../../assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
import FooterSlider from "./FooterSlider";
import { bigShouldersInline, orbitron } from "../Fonts";
import TermsAndPolicy from "./TermsAndPolicy";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
interface IFooterData {
  _id: string;
  email: string;
  phone: string;
  all_rights: string;
  based_in: string;
  social_media: {
    _id: string;
    name: string;
    url: string;
  }[];
}
const MyFooter =async () => {
  const res = await fetch(`${apiUrl}/api/footer`,{cache:'no-cache'});
  const data:IFooterData[] = await res.json();
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
            <h3 className={`text-[1rem] md:text-[1.8rem] font-semibold tracking-widest ${orbitron.className}`}>CodeSlu</h3>
          </div>
          <div className="cols-span-12 md:col-span-10 flex flex-col justify-center items-center">
            <h4 className="font-semibold text-[#515151] mb-3">
              REACH OUT TO US
            </h4>
            <p className="md:text-[1.5rem]">(+20) {data[0].phone}</p>
            {/* <p className="md:text-[1.5rem]">{data[0].email}</p> */}
          </div>
          <div className="cols-span-12 md:col-span-1 flex flex-col justify-between items-center md:items-end">
            <h4 className="self-s font-semibold text-[#515151] mb-3">SOCIAL</h4>
            <ul className="flex flex-col items-end gap-3">
              {data[0].social_media.map((social) => (
                <li key={social._id}>
                  <a className="flex gap-1 items-center" href={social.url}>
                    <MdArrowOutward />
                    {social.name}
                </a>
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="font-semibold text-[#515151] flex flex-col md:flex-row items-center md:justify-between justify-center mt-10">
        <p>{data[0].all_rights}</p>
        <TermsAndPolicy />
        <p>{data[0].based_in}</p>
        </div>
      </div>
        
    </section>
      <div className={`w-full  mb-0 p-0 ${bigShouldersInline.className}`}>
      <FooterSlider />
      </div>
    </>
  );
};

export default MyFooter;
