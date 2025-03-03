import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
const ReviewsCard = ({image}:{image:StaticImageData}) => {
  return (
    <div className="dark:bg-gradient-to-br dark:from-black dark:to-[#1b1b1b] bg-gradient-to-br from-white to-slate-100 rounded-xl p-8 flex flex-col gap-20 justify-between">
      <div className="flex justify-start gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="dark:text-white text-black" />
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
        vitae inventore cumque commodi aut provident sunt. Deserunt sit nam
        totam.
      </p>
      <div className="flex justify-start items-center gap-4">
        <Image src={image} alt="" className="w-[40px] h-[40px] rounded-full"></Image>
        <div>
            <h4>Osama Ahmed</h4>
            <p>CEO, CodeSlu</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
