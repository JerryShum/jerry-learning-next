'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';
import type { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createTopicSchema = z.object({
   name: z
      .string()
      .min(3)
      .regex(/^[a-z-]+$/, {
         message: 'Must be lowercase letters or dashes without spaces.',
      }),
   description: z.string().min(10),
});

interface CreateTopicFormState {
   errors: {
      name?: string[];
      description?: string[];
      _form?: string[];
   };
}

export async function createTopic(
   formState: CreateTopicFormState,
   formData: FormData
): Promise<CreateTopicFormState> {
   await new Promise((resolve) => setTimeout(resolve, 2500));

   const result = createTopicSchema.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
   });

   // If there was an error in the information we parsed (validation failed):
   if (!result.success) {
      console.log(result.error);
      return {
         errors: result.error.flatten().fieldErrors,
      };
   }

   //! Ensure the user is authenticated/loggedin
   const session = await auth();
   if (!session || !session.user) {
      return {
         errors: {
            _form: ['You must be signed in to create a new topic.'],
         },
      };
   }

   let topic: Topic;
   try {
      //! Assigning topic variable to the values that we are defining here to send to the DB
      topic = await db.topic.create({
         data: {
            slug: result.data.name,
            description: result.data.description,
         },
      });
   } catch (err: unknown) {
      if (err instanceof Error) {
         return {
            errors: {
               _form: [err.message],
            },
         };
      } else {
         return {
            errors: {
               _form: ['something went wrong.'],
            },
         };
      }
   }

   // TODO: Revalidate homepage after creating topic
   revalidatePath('/');

   //! Redirecting using the paths helper functions (/topics/slug) on successful creation of new topic
   redirect(paths.topicShow(topic.slug));
}
