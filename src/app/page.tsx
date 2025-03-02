import About from "./_components/About";
import HomeSlider from "./_components/HomeSlider";


export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-y-20">
        <HomeSlider />
        <About />
      </div>
    </>
  );
}
