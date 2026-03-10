import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

const NewsFeed = ({ threats, onThreatSelect }) => {
    const sortedThreats = [...threats].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);

    const getIcon = (weight) => {
        if (weight === 5) return <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
        if (weight >= 3) return <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />;
        return <Info className="w-5 h-5 text-yellow-500 flex-shrink-0" />;
    };

    const handleThreatClick = (threat) => {
        if (navigator.vibrate) {
            navigator.vibrate(15);
        }
        if (onThreatSelect) {
            onThreatSelect(threat);
        }
    };

    return (
        <div className="w-full md:w-96 bg-slate-900/80 backdrop-blur-md h-full flex flex-col p-4">
            {/* Desktop Header */}
            <h2 className="hidden md:block text-xl font-bold uppercase tracking-wider mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Live Intel Feed
            </h2>

            {/* Mobile Header */}
            <h2 className="md:hidden text-base font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Latest Intel
            </h2>

            <div className="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                {sortedThreats.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-40 text-slate-500">
                        <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center mb-3">
                            <Info className="w-6 h-6 opacity-50" />
                        </div>
                        <p className="text-sm text-center">Waiting for incoming transmission...</p>
                    </div>
                ) : (
                    sortedThreats.map((threat) => (
                        <div
                            key={threat.id || threat.timestamp}
                            className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98]"
                            onClick={() => handleThreatClick(threat)}
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5">
                                    {getIcon(threat.weight)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                                            {threat.region}
                                        </span>
                                        <span className="text-[10px] text-slate-500 font-mono">
                                            {new Date(threat.timestamp).toLocaleTimeString([], { 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-snug text-slate-200 group-hover:text-white transition-colors line-clamp-2">
                                        {threat.headline}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-[10px] text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium flex items-center gap-1">
                                            Tap for details
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <div className={`w-1.5 h-1.5 rounded-full ${
                                                threat.weight === 5 ? 'bg-red-500' :
                                                threat.weight >= 3 ? 'bg-orange-500' : 'bg-yellow-500'
                                            }`}></div>
                                            <span className="text-[10px] text-slate-500 font-mono">
                                                L{threat.weight}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Desktop Footer Indicator */}
            <div className="hidden md:flex items-center justify-center gap-2 mt-4 pt-3 border-t border-slate-700/50">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-[10px] text-slate-500 font-mono">LIVE UPDATES</span>
            </div>
        </div>
    );
};

export default NewsFeed;
