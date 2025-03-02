import About from "./_components/About";
import HomeSlider from "./_components/HomeSlider";
import NewSlider from "./_components/NewSlider";
import Portfolio from "./_components/Portfolio";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <NewSlider />
        <About />
        <Portfolio />
      </div>
    </>
  );
}
