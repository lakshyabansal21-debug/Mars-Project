export default function Dashboard({ colony }) {
  return (
    <div 
      style={{ borderColor: colony.theme }} 
      className="bg-slate-900 border-t-4 p-6 rounded-xl shadow-xl transition-all duration-300"
    >
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-extrabold block">Environmental Telemetry</span>
        <h2 
          style={{ color: colony.theme }} 
          className="text-3xl font-black tracking-tight mt-0.5 uppercase drop-shadow"
        >
          {colony.name}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Region Card */}
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/80 hover:border-slate-700 transition-colors group">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Martian Territory</p>
          <p className="text-lg font-bold text-slate-100 mt-1 group-hover:text-white transition-colors">{colony.region}</p>
        </div>

        {/* Temperature Card */}
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/80 hover:border-slate-700 transition-colors group">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Atmospheric Temp</p>
          <p className="text-lg font-bold text-slate-100 mt-1 group-hover:text-white transition-colors">{colony.temp}</p>
        </div>

        {/* Dust Level Card */}
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-800/80 hover:border-slate-700 transition-colors sm:col-span-2 md:col-span-1 group">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Particulate Density</p>
          <p className="text-lg font-bold text-slate-100 mt-1 group-hover:text-white transition-colors">{colony.dustLevel} Storm Matrix</p>
        </div>
      </div>
    </div>
  );
}