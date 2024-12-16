'use client';

import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import { useState } from 'react';

interface SnippetEditFormProps {
   snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
   const [codeValue, setCodeValue] = useState(snippet.code);
   const handleEditorChange = (value: string = '') => {
      setCodeValue(value);
   };

   return (
      <div>
         <h1>Edit your code!</h1>
         <Editor
            height="40vh"
            theme="vs-dark"
            language="javascript"
            defaultValue={snippet.code}
            options={{
               minimap: { enabled: false },
            }}
            onChange={handleEditorChange}
         />
      </div>
   );
}
