import { getPageContent } from "../../components/getPageContent";

const Project = async ({ params }: { params: { slug: string } }) => {
  const pageData = await getPageContent(params.slug);

  if (!pageData) {
    return <h1>Project content not found</h1>;
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      {pageData.content}
    </div>
  );
};

export default Project;
