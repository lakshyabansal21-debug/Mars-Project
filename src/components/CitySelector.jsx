export default function CitySelector({ colonies, selectedColony, onSelectColony }) {
  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-xl">
      <h2 className="text-slate-400 font-bold mb-3 hidden md:block text-xs uppercase tracking-widest border-b border-slate-800 pb-2">
        Colony Sectors
      </h2>
      
      {/* Mobile: Horizontal scrollable strip | Desktop: Structured vertical list */}
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 custom-scrollbar">
        {colonies.map((colony) => {
          const isSelected = selectedColony.id === colony.id;

          return (
            <button
              key={colony.id}
              onClick={() => onSelectColony(colony)}
              style={isSelected ? { backgroundColor: colony.theme, borderColor: colony.theme } : {}}
              className={`whitespace-nowrap px-4 py-2.5 rounded-lg text-left transition-all duration-200 font-semibold text-sm border cursor-pointer select-none
                ${isSelected 
                  ? 'text-white shadow-lg shadow-black/50 translate-x-0 md:translate-x-1' 
                  : 'bg-slate-800 hover:bg-slate-700/80 text-slate-300 border-transparent hover:text-white'
                }`}
            >
              {colony.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}