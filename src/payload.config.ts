import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Clients from './collections/Clients';
import Todos from './collections/Todos';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
 
  collections: [
    {
      slug:"file",
      fields: [
        {name:"alt",type:"text"}
      ],upload:{
        staticDir:"/files",
        staticURL:"/files",
        mimeTypes:["application/pdf"]
      },
    },
    Clients,
    Todos,
    Categories,
    Posts,
    Tags,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
