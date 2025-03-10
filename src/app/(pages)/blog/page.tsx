import AnimatedHeader from "@/app/_components/AnimatedHeader";
import ForumCard from "@/app/_components/ForumCard";

const images = [
  { url: "https://i.ibb.co/qCkd9jS/img1.jpg", name: "Switzerland" },
  { url: "https://i.ibb.co/jrRb11q/img2.jpg", name: "Finland" },
  { url: "https://i.ibb.co/NSwVv8D/img3.jpg", name: "Iceland" },
  { url: "https://i.ibb.co/Bq4Q0M8/img4.jpg", name: "Australia" },
  { url: "https://i.ibb.co/jTQfmTq/img5.jpg", name: "Netherland" },
  { url: "https://i.ibb.co/RNkk6L0/img6.jpg", name: "Ireland" },
];
const page = () => {
  return (
    <div className="container mx-auto">
      <AnimatedHeader animation="fade-up" header="Blog" classes="forum-header" />
      {images.map((image, index) => (
        <div key={index}>
          <ForumCard image={image} />
        </div>
      ))}
    </div>
  );
};

export default page;
