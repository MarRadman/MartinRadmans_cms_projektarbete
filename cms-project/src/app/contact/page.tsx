import { getPageContent } from "../components/getPageContent";

const Contact = async () => {
  const pageData = await getPageContent("contact");

  if (!pageData) {
    return <h1>About content not found</h1>;
  }

  console.log(pageData);
  return (
    <div>
      <h1>
        {typeof pageData.title === "string" ? pageData.title : "Untitled"}
      </h1>
      <p>{pageData.content}</p>
    </div>
  );
};

export default Contact;
