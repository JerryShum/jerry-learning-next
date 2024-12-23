'use client';

import {
   Button,
   Input,
   Popover,
   PopoverContent,
   PopoverTrigger,
   Textarea,
   Form,
} from '@nextui-org/react';
import { startTransition, useActionState } from 'react';
import * as actions from '@/actions';
import FormButton from '@/components/common/FormButton';

export default function PostsCreateForm() {
   const [formState, action, isPending] = useActionState(actions.createPost, {
      errors: {},
   });

   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      startTransition(() => {
         action(formData);
      });
   }

   return (
      <Popover placement="bottom" backdrop="blur">
         <PopoverTrigger>
            <Button color="primary">Create a Post</Button>
         </PopoverTrigger>

         <PopoverContent>
            <Form onSubmit={handleSubmit}>
               <div className="flex flex-col gap-4 p-4 w-80">
                  <h3 className="text-lg">Create a Post</h3>

                  <Input
                     name="title"
                     label="Title"
                     labelPlacement="outside"
                     placeholder="Title"
                     isInvalid={!!formState.errors.title}
                     errorMessage={
                        formState.errors.title
                           ? formState.errors.title.join(', ')
                           : ''
                     }
                  />
                  <Textarea
                     name="content"
                     label="Content"
                     labelPlacement="outside"
                     placeholder="Content"
                     isInvalid={!!formState.errors.content}
                     errorMessage={
                        formState.errors.content
                           ? formState.errors.content.join(', ')
                           : ''
                     }
                  />

                  {formState.errors._form ? (
                     <div className="border border-red-400 bg-red-200 p-2 rounded-lg">
                        {formState.errors._form.join(', ')}
                     </div>
                  ) : null}

                  <FormButton isLoading={isPending}>Create a Post</FormButton>
               </div>
            </Form>
         </PopoverContent>
      </Popover>
   );
}
