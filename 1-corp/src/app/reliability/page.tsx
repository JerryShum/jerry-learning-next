import Hero from '@/app/_components/Hero';
import reliabilityImg from 'public/reliability.jpg';
export default function ReliabilityPage() {
   return (
      <Hero
         imgData={reliabilityImg}
         imgAlt="welding"
         title="Super High Reliability Hosting"
      />
   );
}
