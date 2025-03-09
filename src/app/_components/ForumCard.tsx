import Image from "next/image";

interface Iimage {
  url: string;
  name: string;
}

const ForumCard = ({ image }: { image: Iimage }) => {
  return (
    <div className="flex flex-col gap-6 w-full bg-gradient-to-b dark:from-[#1b1b1b] dark:via-black dark:to-[#1b1b1b] from-slate-100   via-white to-slate-100 p-4 my-4 rounded-3xl">
      <div className="w-full relative h-[50vh] sm:h-[70vh]">
        <Image
          src={image.url}
          alt={image.name}
          fill={true}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // className="w-full rounded-3xl"
          // width={300}
          // height={200}
        ></Image>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
        <div className="flex flex-col gap-3 items-center uppercase md:col-span-1">
        <h4 className="text-[#8b96b3] dark:text-[#5b5b5b] font-semibold">ADMIN</h4>
        <h5 className="text-[#8b96b3] dark:text-[#5b5b5b]">MARCH 1, 2023</h5>
        <h5 className="text-[#8b96b3] dark:text-[#5b5b5b]">DEVELOPMENT</h5>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start  uppercase md:col-span-2">
        <h4 className="text-[#8b96b3] dark:text-[#5b5b5b] font-semibold">title</h4>
        <p className="text-[12px] md:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quia.</p>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start  uppercase md:col-span-3">
        <h4 className="text-[#8b96b3] dark:text-[#5b5b5b] font-semibold">Description</h4>
        <p className="text-[12px] md:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est asperiores delectus animi consectetur ullam aliquid facilis dolorum? Reprehenderit, adipisci.</p>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
