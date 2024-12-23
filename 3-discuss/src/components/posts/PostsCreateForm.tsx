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
import { useActionState } from 'react';
import * as actions from '@/actions';
import FormButton from '@/components/common/FormButton';

export default function PostsCreateForm() {
   const [formState, action, isPending] = useActionState(actions.createPost, {
      errors: {},
   });

   return (
      <Popover placement="left">
         <PopoverTrigger>
            <Button color="primary">Create a Post</Button>
         </PopoverTrigger>

         <PopoverContent>
            <Form>
               <div className="flex flex-col gap-4 p-4 w-80">
                  <h3 className="text-lg">Create a Post</h3>

                  <Input
                     name="title"
                     label="Title"
                     labelPlacement="outside"
                     placeholder="Title"
                  />
                  <Input
                     name="Content"
                     label="Content"
                     labelPlacement="outside"
                     placeholder="Content"
                  />

                  <FormButton>Create a Post</FormButton>
               </div>
            </Form>
         </PopoverContent>
      </Popover>
   );
}
