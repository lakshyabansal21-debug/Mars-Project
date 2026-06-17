import { useState } from 'react';
import initialColonyData from './db.json';

// Visual Layout Elements
import Navbar from './components/Navbar';
import CitySelector from './components/CitySelector';
import Dashboard from './components/Dashboard';
import LifeSupportGuide from './components/LifeSupportGuide';

export default function App() {
  const [colonies] = useState(initialColonyData);
  const [selectedColony, setSelectedColony] = useState(initialColonyData[0]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased pb-16">
      <Navbar />
      
      <main className="container mx-auto px-4 max-w-7xl">
        {/* Responsive Grid Structure Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          
          {/* Menu Sidebar (Changes layout natively between device dimensions) */}
          <div className="md:col-span-1 md:sticky md:top-6">
            <CitySelector 
              colonies={colonies} 
              selectedColony={selectedColony} 
              onSelectColony={setSelectedColony} 
            />
          </div>

          {/* Core Status Analytics Readouts */}
          <div className="md:col-span-3 space-y-6">
            <Dashboard colony={selectedColony} />
            <LifeSupportGuide colony={selectedColony} />
          </div>

        </div>
      </main>
    </div>
  );
}