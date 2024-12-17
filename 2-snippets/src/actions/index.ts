'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
   console.log('edit snippet called' + id + code);
   await db.snippet.update({
      where: { id },
      data: { code },
   });

   redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
   await db.snippet.delete({
      where: { id },
   });

   redirect(`/`);
}

export async function createSnippet(
   formState: { message: string },
   formData: FormData
) {
   return {
      message: 'title must be longer.',
   };

   // // Check the user's inputs and make sure they're valid
   // const title = formData.get('title') as string;
   // const code = formData.get('code') as string;

   // // Create a new record in DB
   // const snippet = await db.snippet.create({
   //    data: {
   //       title: title,
   //       code: code,
   //    },
   // });

   // console.log(snippet);

   // // Automatically redirect to home page
   // redirect('/');
}
