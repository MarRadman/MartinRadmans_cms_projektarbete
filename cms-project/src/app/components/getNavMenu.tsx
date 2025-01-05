import { fetchData } from "../lib/contentful";

const getNavMenuItems = async (): Promise<
  { title: string; link: string }[]
> => {
  const data = await fetchData("navigationMenu");
  const itemsField = data[0]?.fields?.items;
  const items = Array.isArray(itemsField)
    ? itemsField.map((item: any) => ({
        title: item.fields.title,
        link: item.fields.link,
      }))
    : [];
  return items || [];
};

export default getNavMenuItems;
