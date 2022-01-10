export default {
  type: "document",
  name: "contact",
  title: "Contact Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "heroImage",
      type: "defaultImage",
      title: "Hero Image",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
};
