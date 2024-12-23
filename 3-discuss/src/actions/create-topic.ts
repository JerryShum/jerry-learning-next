'use server';

import { z } from 'zod';
import { auth } from '@/auth';

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

   return {
      errors: {},
   };

   // TODO: Revalidate homepage after creating topic
}
