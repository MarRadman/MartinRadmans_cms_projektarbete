import { getPageContent } from "../components/getPageContent";

const Contact = async () => {
  const pageData = await getPageContent("contact");

  if (!pageData) {
    return <h1>Contact content not found</h1>;
  }

  const { title, address, email, phone } = pageData;

  return (
    <div>
      <h1>{title}</h1>
      <p>Address: {address}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        Phone: <a href={`tel:${phone}`}>{phone}</a>
      </p>
    </div>
  );
};

export default Contact;
