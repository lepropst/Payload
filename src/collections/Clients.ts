import { CollectionConfig } from "payload/types";

const Clients: CollectionConfig = {
  slug: "clients",

  upload: {
    staticDir: "/files",
    staticURL: "/files",
    mimeTypes: ["application/pdf"],
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
    },
    { name: "recent Notes", type: "richText" },
    {
      name: "files",
      type: "upload",
      relationTo: "file",
    },
  ],
};

export default Clients;
