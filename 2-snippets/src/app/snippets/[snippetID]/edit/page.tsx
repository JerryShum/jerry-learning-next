interface EditSnippetPageProps {
   params: Promise<{
      snippetID: string;
   }>;
}

export default async function EditSnippetPage(props: EditSnippetPageProps) {
   const snippetID = parseInt((await props.params).snippetID);

   return (
      <div>
         <div>Editing snippet with ID: {snippetID}</div>
      </div>
   );
}
