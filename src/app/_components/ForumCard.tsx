import Image from "next/image";
import Link from "next/link";

interface Iimage {
  url: string;
  name: string;
}

const ForumCard = ({ image }: { image: Iimage }) => {
  return (
    <Link href='/blog/blogID'>
      <div className="forumCard flex flex-col gap-6 w-full bg-gradient-to-b dark:from-[#1b1b1b] dark:via-black dark:to-[#1b1b1b] from-slate-100   via-white to-slate-100 p-4 my-4 rounded-3xl">
        <div className="w-full relative h-[50vh] sm:h-[70vh] rounded-t-3xl overflow-hidden">
          <Image
            src={image.url}
            alt={image.name}
            fill={true}
            className="rounded-t-3xl"
          ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
          <div className="flex flex-col gap-3 items-center md:items-start uppercase md:col-span-9">
            <p className=" text-[#8b96b3] dark:text-[#767b84] font-bold blogCard-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quia.
            </p>
            <p className="text-[12px] md:text-[14px] text-[#545a65]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis est asperiores delectus animi consectetur ullam
              aliquid facilis dolorum? Reprehenderit, adipisci.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-end justify-end uppercase md:col-span-3 ">
            <h5 className="text-[#8b96b3] dark:text-[#767b84]">
              MARCH 1, 2023
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForumCard;
