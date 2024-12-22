'use client';

import * as actions from '@/actions';
import { NavbarItem } from '@nextui-org/navbar';
import {
   Avatar,
   Button,
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@nextui-org/react';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {
   const session = useSession();

   let authContent: React.ReactNode;

   if (session.status === 'loading') {
      authContent = null;
   } else if (session.data?.user) {
      authContent = (
         <Popover placement="bottom">
            <PopoverTrigger>
               <Avatar src={session.data?.user.image || ''} />
            </PopoverTrigger>
            <PopoverContent>
               <div className="p-4">
                  <form action={actions.signOut}>
                     <button type="submit">Sign Out</button>
                  </form>
               </div>
            </PopoverContent>
         </Popover>
      );
   } else {
      authContent = (
         <>
            <NavbarItem>
               <form action={actions.signIn}>
                  <Button type="submit" color="secondary" variant="bordered">
                     Sign In
                  </Button>
               </form>
            </NavbarItem>
            <NavbarItem>
               <form action={actions.signIn}>
                  <Button type="submit" color="primary" variant="flat">
                     Sign Up
                  </Button>
               </form>
            </NavbarItem>
         </>
      );
   }

   return authContent;
}
