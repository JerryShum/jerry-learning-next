import Link from 'next/link';

export default function Header() {
   return (
      <div className="absolute z-10 w-full text-white py-3 bg-black ">
         <nav className="container relative flex flex-wrap items-center justify-between mx-auto">
            <Link href={'/'} className="font-bold text-3xl ">
               Home
            </Link>
            <div className="space-x-4 text-xl">
               <Link href={'/performance'}>Performance</Link>
               <Link href={'/reliability'}>Reliability</Link>
               <Link href={'/scale'}>Scale</Link>
            </div>
         </nav>
      </div>
   );
}
