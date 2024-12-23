'use server';

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

   console.log(result);

   // If there was an error in the information we parsed (validation failed):
   if (!result.success) {
      console.log(result.error);
      return {
         errors: result.error.flatten().fieldErrors,
      };
   }

   return {
      errors: {},
   };

   // TODO: Revalidate homepage after creating topic
}
