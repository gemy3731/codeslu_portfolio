import Image from "next/image";
import imgThree from "../../../../../assests/1.jpg";
import ScreensSlider from "@/app/_components/ScreensSlider";

const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
];

const page = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20  mt-[156px] mb-10 border dark:border-gray-800 rounded-[32px] pt-[139px] pe-[111px] pb-[93px] ps-[84px] shadow-lg">
          <div className="flex flex-col gap-10 items-center">
            <Image
              src={imgThree}
              alt="product image"
              className="w-full max-w-[461px] max-h-[694px]"
            ></Image>
            <div className="mt-10 px-10 md:px-0">
              <ScreensSlider screens={images} />
            </div>
          </div>
          <div className="flex flex-col gap-16">
            <h2 className="leading-[43.57px] uppercase text-responsive1 font-semibold  dark:text-transparent dark:bg-clip-text  dark:bg-gradient-to-t dark:from-transparent dark:via-white dark:to-transparent after:bg-blacko">
              Project Name
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis aenean euismod
              ipsum vel vestibulum pellentesque mi bibendum egestas. Eget
              egestas sapien sapien imperdiet consectetur mi placerat. Amet
              eleifend nulla sit mauris scelerisque ac sit. Viverra tinci.Lorem
              ipsum dolor sit amet consectetur. Mattis aenean euismod ipsum vel
              vestibulum pellentesque mi bibendum egestas. Eget egestas sapien
              sapien imperdiet consectetur mi placerat. Amet eleifend nulla sit
              mauris scelerisque ac sit. Viverra tinci.
            </p>
            <h3 className="text-[24px] leading-[29.05px]">
              <span>Demo link : </span>{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-sky-300 underline"
              >
                Demo
              </a>
            </h3>
            <h3 className="text-[24px] leading-[29.05px]">
              <span>purchase link : </span>{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-sky-300 underline"
              >
                purchase
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
