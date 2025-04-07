"use client";

import Image from "next/image";
import { IBlogData } from "../(pages)/blog/[blogID]/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const ForumCard = ({ image, blog }: { image: string, blog: IBlogData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/blog/${blog?._id}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <a href={`/blog/${blog?._id}`} onClick={handleClick}>
      <div className="forumCard flex flex-col gap-6 w-full bg-gradient-to-b dark:from-[#1b1b1b] dark:via-black dark:to-[#1b1b1b] from-slate-100   via-white to-slate-100 p-4 my-4 rounded-3xl">
        <div className="w-full relative h-[50vh] sm:h-[70vh] rounded-t-3xl overflow-hidden">
          <Image
            src={image}
            alt={blog?.name}
            fill={true}
            className="rounded-t-3xl"
          ></Image>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
          <div className="flex flex-col gap-3 items-center md:items-start uppercase md:col-span-9">
            <p className=" text-[#8b96b3] dark:text-[#767b84] font-bold blogCard-title">
              {blog?.title}
            </p>
            <p className="" dangerouslySetInnerHTML={{ __html: blog?.description }}/>
            
          </div>
          <div className="flex flex-col gap-3 items-end justify-end uppercase md:col-span-3 ">
            <h5 className="text-[#8b96b3] dark:text-[#767b84]">
              {blog?.date}
            </h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ForumCard;
