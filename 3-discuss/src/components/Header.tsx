import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import HeaderAuth from './HeaderAuth';
import SearchInput from './SearchInput';
import { Suspense } from 'react';

export default function Header() {
   return (
      <Navbar isBordered>
         <NavbarBrand>
            <Link href="/" className="font-bold">
               Discuss
            </Link>
         </NavbarBrand>
         <NavbarContent justify="center">
            <NavbarItem>
               <Suspense>
                  <SearchInput />
               </Suspense>
            </NavbarItem>
         </NavbarContent>
         <NavbarContent justify="end">
            <HeaderAuth />
         </NavbarContent>
      </Navbar>
   );
}
