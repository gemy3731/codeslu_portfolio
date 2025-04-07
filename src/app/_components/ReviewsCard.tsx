import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import { IReviewsData } from "./Reviews";
const ReviewsCard = ({image,review}:{image:StaticImageData,review:IReviewsData}) => {
  return (
    <div className="h-[325px] text-[14px] md:text-[18px] dark:bg-gradient-to-br dark:from-black dark:to-[#1b1b1b] bg-gradient-to-br from-white to-slate-100 rounded-xl p-8 flex flex-col gap-20 justify-between">
      <div className="flex justify-start gap-1">
        {[...Array(review.rating)].map((_, index) => (
          <FaStar key={index} className="dark:text-white text-black" />
        ))}
      </div>
      <p>
        {review.description}
      </p>
      <div className="flex justify-start items-center gap-4">
        <Image src={image} alt="" className="w-[40px] h-[40px] rounded-full"></Image>
        <div className="">
            <h4>{review.name}</h4>
            <p>{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
