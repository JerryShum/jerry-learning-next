import Hero from '@/app/_components/Hero';
import scaleImg from 'public/scale.jpg';
export default function ReliabilityPage() {
   return (
      <Hero
         imgData={scaleImg}
         imgAlt="steel factory"
         title="Scale your app to infinity!"
      />
   );
}
