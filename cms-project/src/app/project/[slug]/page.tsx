import { getPageContent, PageData } from "../../components/getPageContent";

const Project = async () => {
  const pageData = await getPageContent("project");
  const projectData: PageData | null = await getPageContent("project");

  if (!pageData) {
    return <h1>Project content not found</h1>;
  }

  console.log("Page Data:", pageData);

  return (
    <div>
      <h1>{pageData.title}</h1>
      {pageData.content}
    </div>
  );
};

export default Project;
