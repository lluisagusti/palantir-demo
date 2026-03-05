import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

const NewsFeed = ({ threats, onThreatSelect }) => {
    // Sort descending by timestamp
    const sortedThreats = [...threats].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);

    const getIcon = (weight) => {
        if (weight === 5) return <AlertCircle className="w-5 h-5 text-red-500" />;
        if (weight >= 3) return <AlertTriangle className="w-5 h-5 text-orange-500" />;
        return <Info className="w-5 h-5 text-yellow-500" />;
    };

    return (
        <div className="w-96 bg-slate-900/80 backdrop-blur-md border-l border-slate-800 h-full flex flex-col z-10 p-4 shadow-2xl">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Intel Feed
            </h2>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {sortedThreats.length === 0 ? (
                    <p className="text-slate-500 text-sm">Waiting for incoming transmission...</p>
                ) : (
                    sortedThreats.map((threat) => (
                        <div
                            key={threat.id || threat.timestamp}
                            className="bg-slate-800/60 p-3 rounded border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all cursor-pointer group"
                            onClick={() => onThreatSelect && onThreatSelect(threat)}
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1">{getIcon(threat.weight)}</div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2 rounded">
                                            {threat.region}
                                        </span>
                                        <span className="text-[10px] text-slate-500">
                                            {new Date(threat.timestamp).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-snug text-slate-200 group-hover:text-white transition-colors">
                                        {threat.headline}
                                    </p>
                                    <span className="text-[10px] text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 block">
                                        Click for details →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsFeed;
