import About from "./_components/About";
import HomeSlider from "./_components/HomeSlider";


export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-40">
        <HomeSlider />
        <About />
      </div>
    </>
  );
}
