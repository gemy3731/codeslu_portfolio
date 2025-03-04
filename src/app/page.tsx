import { Footer } from "flowbite-react";
import About from "./_components/About";
import ContactUs from "./_components/ContactUs";
import NewSlider from "./_components/NewSlider";
import Portfolio from "./_components/Portfolio";
import Reviews from "./_components/Reviews";
import MyFooter from "./_components/MyFooter";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <NewSlider />
        <About />
        <Portfolio />
        <Reviews />
        <ContactUs />
        <MyFooter />
      </div>
    </>
  );
}
