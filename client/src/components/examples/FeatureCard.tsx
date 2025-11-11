import FeatureCard from '../FeatureCard';
import { Wifi } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="p-8 max-w-md">
      <FeatureCard
        icon={Wifi}
        title="Built-in Wi-Fi"
        description="Seamlessly connect to your favorite streaming services with dual-band Wi-Fi support."
      />
    </div>
  );
}
