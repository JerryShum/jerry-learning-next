import SnippetEditForm from '@/components/SnippetEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface EditSnippetPageProps {
   params: Promise<{
      snippetID: string;
   }>;
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
   const snippetID = parseInt((await props.params).snippetID);
   const snippet = await db.snippet.findFirst({
      where: { id: snippetID },
   });

   if (!snippet) {
      return notFound();
   }

   return (
      <div>
         <div>Editing snippet with Title: {snippet.title}</div>
         <SnippetEditForm snippet={snippet} />
      </div>
   );
}
