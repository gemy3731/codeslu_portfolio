import About from "./_components/About";
import ContactUs from "./_components/ContactUs";
import HomeSlider from "./_components/HomeSlider";
import NewSlider from "./_components/NewSlider";
import Portfolio from "./_components/Portfolio";
import Reviews from "./_components/Reviews";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <NewSlider />
        <About />
        <Portfolio />
        <Reviews />
        <ContactUs />
      </div>
    </>
  );
}
