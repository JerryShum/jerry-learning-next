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

export async function createTopic(formData: FormData) {
   const result = createTopicSchema.safeParse({
      name: formData.get('name'),
      description: formData.get('description'),
   });

   console.log(result);

   // If there was an error in the information we parsed (validation failed):
   if (!result.success) {
      console.log(result.error.flatten().fieldErrors);
   }

   // TODO: Revalidate homepage after creating topic
}
