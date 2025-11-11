import Navigation from '../Navigation';
import { Route } from 'wouter';

export default function NavigationExample() {
  return (
    <>
      <Navigation />
      <div className="h-screen pt-16 flex items-center justify-center">
        <p className="text-muted-foreground">Scroll to see the navigation transform</p>
      </div>
    </>
  );
}
