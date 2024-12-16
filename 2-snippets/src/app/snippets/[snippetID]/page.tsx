import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetShowPageProps {
   params: Promise<{
      snippetID: string;
   }>;
}
export default async function SnippetPage(props: SnippetShowPageProps) {
   await new Promise((r) => setTimeout(r, 2000));

   const { snippetID } = await props.params;

   const snippet = await db.snippet.findFirst({
      where: { id: parseInt(snippetID) },
   });

   if (!snippet) {
      return notFound();
   }

   return (
      <div>
         {snippet.title} | {snippet.code}
      </div>
   );
}
