import { auth } from '@/auth';
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem,
} from '@nextui-org/navbar';
import { Avatar, Button, Input } from '@nextui-org/react';
import Link from 'next/link';

export default async function Header() {
   const session = await auth();

   let authContent: React.ReactNode;

   if (session?.user) {
      authContent = <Avatar src={session.user.image || ''} />;
   } else {
      authContent = (
         <>
            <NavbarItem>
               <Button type="submit" color="secondary" variant="bordered">
                  Sign In
               </Button>
            </NavbarItem>
            <NavbarItem>
               <Button type="submit" color="primary" variant="flat">
                  Sign Up
               </Button>
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
