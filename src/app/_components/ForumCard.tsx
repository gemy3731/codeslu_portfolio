import Image from "next/image";
import Link from "next/link";
import { IBlogData } from "../(pages)/blog/[blogID]/page";
// import { useEffect } from "react";
// import { IBlogData } from "../(pages)/blog/[blogID]/page";

// const apiUrl = process.env.NEXT_PUBLIC_API_URL;




const ForumCard =  ({ image,blog }: { image: string,blog:IBlogData }) => {
  // useEffect(()=>{
  //   const getData = async () => {
  //     const res = await fetch(`${apiUrl}/api/blog`);
  //     const blogs:IBlogData[] = await res.json();
  //     // const blog = blogs.find((blog)=>blog._id===blogID.blogID);
  //     console.log(blogs)
  //   }
  //   getData()
  // },[])
    // const res = await fetch(`${apiUrl}/api/blog`);
    // const blogs:IBlogData[] = await res.json();
  return (
    <Link href={`/blog/${blog?._id}`}>
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
    </Link>
  );
};

export default ForumCard;
