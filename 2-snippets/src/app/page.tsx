import { db } from '@/db';

export default async function Home() {
   const snippets = await db.snippet.findMany();
   const renderedSnippets = snippets.map((snippet) => {
      return <div key={snippet.id}>{snippet.title}</div>;
   });

   return (
      <div>
         <h1>home page</h1>
         <div>{renderedSnippets}</div>
      </div>
   );
}
