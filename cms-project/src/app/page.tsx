import { getPageContent } from "./components/getPageContent";
import Image from "next/image";

const HomePage = async () => {
  const pageData = await getPageContent("homepage");

  if (!pageData) {
    return <h1>Homepage content not found</h1>;
  }

  const { title, content, images } = pageData;

  return (
    <div>
      <h1>{typeof title === "string"}</h1>
      <p>{content}</p>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          width={500}
          height={300}
        />
      ))}
    </div>
  );
};

export default HomePage;
