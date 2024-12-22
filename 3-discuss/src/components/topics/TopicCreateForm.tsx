import React from 'react';

import {
   Input,
   Button,
   Textarea,
   Popover,
   PopoverTrigger,
   PopoverContent,
} from '@nextui-org/react';
import * as actions from '@/actions';

export default function TopicCreateForm() {
   return (
      <Popover placement="left-start" backdrop="blur" showArrow={true}>
         <PopoverTrigger>
            <Button color="primary">Create a Topic</Button>
         </PopoverTrigger>
         <PopoverContent>
            <form action={actions.createTopic}>
               <div className="flex flex-col gap-4 p-4 w-80 justify-center">
                  <h3 className="text-lg">Create a Topic</h3>
                  <Input
                     name="name"
                     label="Name"
                     labelPlacement="outside"
                     placeholder="Name"
                  />
                  <Textarea
                     name="description"
                     label="Description"
                     labelPlacement="outside"
                     placeholder="Describe your topic"
                  />
                  <Button type="submit" color="primary" variant="ghost">
                     {' '}
                     <span className="text-md font-semibold">Submit</span>
                  </Button>
               </div>
            </form>
         </PopoverContent>
      </Popover>
   );
}
