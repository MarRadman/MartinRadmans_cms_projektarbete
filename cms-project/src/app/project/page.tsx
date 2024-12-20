import { getPageContent, PageData } from "../components/getPageContent";
import Image from "next/image";

const Projects = async () => {
  const pageData: PageData | null = await getPageContent("projects");

  if (!pageData) {
    return <h1>Projects content not found</h1>;
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      {pageData.projects?.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.content}</p>
          {project.images.map((image, imgIndex) => (
            <Image
              key={imgIndex}
              src={image}
              alt={`Image ${imgIndex + 1}`}
              width={500}
              height={300}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
