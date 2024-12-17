import { fetchData } from "./lib/contentful";

const HomePage = async () => {
  const homepageData = await fetchData("homepage");
  const homepage = homepageData[0]?.fields;

  if (!homepage) {
    return <h1>Homepage content not found</h1>;
  }

  const extractText = (content: any) => {
    return content
      .map((text: any) => {
        if (text.nodeType === "text") {
          return text.value;
        } else if (text.content) {
          return extractText(text.content);
        }
        return "";
      })
      .join("");
  };

  let homepageContent = "";
  if (
    homepage.content &&
    typeof homepage.content === "object" &&
    "content" in homepage.content
  ) {
    homepageContent = extractText(homepage.content.content);
  }

  return (
    <div>
      <h1>
        {typeof homepage.title === "string" ? homepage.title : "Untitled"}
      </h1>
      <p>{homepageContent}</p>
    </div>
  );
};

export default HomePage;
