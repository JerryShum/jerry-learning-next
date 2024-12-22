import { auth } from '@/auth';
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   // NavbarMenuToggle,
   // NavbarMenu,
   // NavbarMenuItem,
} from '@nextui-org/navbar';
import {
   Avatar,
   Button,
   Input,
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@nextui-org/react';
import Link from 'next/link';
import * as actions from '@/actions';

export default async function Header() {
   const session = await auth();

   let authContent: React.ReactNode;

   if (session?.user) {
      authContent = (
         <Popover placement="bottom">
            <PopoverTrigger>
               <Avatar src={session.user.image || ''} />
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

   return (
      <Navbar isBordered>
         <NavbarBrand>
            <Link href="/" className="font-bold">
               Discuss
            </Link>
         </NavbarBrand>
         <NavbarContent justify="center">
            <NavbarItem>
               <Input />
            </NavbarItem>
         </NavbarContent>
         <NavbarContent justify="end">{authContent}</NavbarContent>
      </Navbar>
   );
}
