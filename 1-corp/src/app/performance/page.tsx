import Hero from '@/app/_components/Hero';
import performanceImg from 'public/performance.jpg';
export default function PerformancePage() {
   return (
      <Hero
         imgData={performanceImg}
         imgAlt="welding"
         title="We serve high performance applications"
      />
   );
}
