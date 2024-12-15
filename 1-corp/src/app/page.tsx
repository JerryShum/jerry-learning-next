import Hero from '@/app/_components/Hero';
import homeImg from 'public/home.jpg';
export default function Home() {
   return (
      <Hero
         imgData={homeImg}
         imgAlt="car factory"
         title="Professional Cloud Hosting"
      />
   );
}
