import { getPageContent } from "./components/getPageContent";

const HomePage = async () => {
  const pageData = await getPageContent("homepage");

  if (!pageData) {
    return <h1>Homepage content not found</h1>;
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

export default HomePage;
