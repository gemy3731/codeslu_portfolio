import About from "./_components/About";
import ContactUs from "./_components/ContactUs";
import NewSlider from "./_components/NewSlider";
import Portfolio from "./_components/Portfolio";
import Reviews from "./_components/Reviews";
import MyFooter from "./_components/MyFooter";
import NewSplashScreen from "./_components/NewSplashScreen";
import Forum from "./_components/Forum";
import DataSlider from "./_components/DataSlider";
// import Maintenance from "./_components/Maintenance";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <NewSplashScreen />
        <NewSlider />
        <About />
        <Portfolio />
        <Forum />
        <DataSlider />
        <Reviews />
        <ContactUs />
        <MyFooter />
        {/* <Maintenance /> */}
      </div>
    </>
  );
}
