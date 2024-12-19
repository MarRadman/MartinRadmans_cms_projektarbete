import { getPageContent } from "../components/getPageContent";

const About = async () => {
  const pageData = await getPageContent("about");

  if (!pageData) {
    return <h1>About content not found</h1>;
  }

  return (
    <div>
      <h1>
        {typeof pageData.title === "string" ? pageData.title : "Untitled"}
      </h1>
      <p>{pageData.content}</p>
      {pageData.images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default About;
