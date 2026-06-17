export default function LifeSupportGuide({ colony }) {
  // Evaluates safety guidelines dynamically mapping from user instructions
  const getSafetyMetrics = (dustLevel) => {
    switch (dustLevel?.toLowerCase()) {
      case 'low':
        return { label: 'Safe', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
      case 'moderate':
        return { label: 'Warning', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      case 'high':
        return { label: 'Alert', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/30' };
      case 'extreme':
        return { label: 'Critical', badge: 'bg-red-500/10 text-red-400 border-red-500/30' };
      default:
        return { label: 'Unknown Risk', badge: 'bg-slate-500/10 text-slate-400 border-slate-500/30' };
    }
  };

  const status = getSafetyMetrics(colony.dustLevel);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl shadow-xl">
      <h3 
        style={{ color: colony.theme }} 
        className="text-sm font-black mb-4 uppercase tracking-widest border-b border-slate-800 pb-2"
      >
        Life Support Status Log
      </h3>
      
      <div className="space-y-4">
        {/* Status Indicator Bar */}
        <div className="flex items-center justify-between p-3.5 rounded-lg bg-slate-950/50 border border-slate-850">
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">Atmospheric Hazard Rating</p>
            <p className="text-sm font-bold text-slate-200 mt-0.5">{colony.dustLevel} Particulate Dispersion</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${status.badge}`}>
            {status.label}
          </span>
        </div>

        {/* Dynamic Theme Advisory Box */}
        <div 
          style={{ borderColor: `${colony.theme}40` }} /* Applies standard hex with 40% transparency layer */
          className="p-4 rounded-lg border bg-slate-950/30 backdrop-blur-sm"
        >
          <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1.5 flex items-center gap-1.5">
            <span style={{ color: colony.theme }}>●</span> Command Advisory Directive
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-mono">
            {colony.advisory}
          </p>
        </div>
      </div>
    </div>
  );
}