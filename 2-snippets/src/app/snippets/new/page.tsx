'use client';
import { db } from '@/db';
import { redirect } from 'next/navigation';
import { useActionState, startTransition } from 'react';
import * as actions from '@/actions';

export default function SnippetCreatePage() {
   const [formState, action] = useActionState(actions.createSnippet, {
      message: '',
   });

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      startTransition(() => {
         action(formData);
      });
   }

   return (
      <form onSubmit={handleSubmit}>
         <h3 className="font-bold m-3">Create a Snippet</h3>
         <div className="flex flex-col gap-4">
            <div className="flex gap-4">
               <label className="w-12" htmlFor="title">
                  Title
               </label>
               <input
                  name="title"
                  className="border rounded p-2 w-full"
                  id="title"
                  type="text"
               />
            </div>
            <div className="flex gap-4">
               <label className="w-12" htmlFor="code">
                  Code
               </label>
               <textarea
                  name="code"
                  className="border rounded p-2 w-full"
                  id="code"
               />
            </div>

            <div>{formState.message}</div>

            <button type="submit" className="rounded p-2 bg-blue-500">
               Create
            </button>
         </div>
      </form>
   );
}
