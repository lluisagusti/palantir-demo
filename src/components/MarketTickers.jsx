import React from 'react';
import { TrendingUp, TrendingDown, Target, Droplet } from 'lucide-react';

const MarketTickers = ({ markets }) => {
    const getIcon = (symbol) => {
        if (symbol.includes('OIL')) return <Droplet className="w-4 h-4 text-blue-400" />;
        return <Target className="w-4 h-4 text-slate-400" />;
    };

    return (
        <div className="w-full bg-slate-900/90 border-b border-slate-800 p-2 z-10 flex items-center justify-around gap-4 overflow-x-auto overflow-y-hidden shadow-lg backdrop-blur-md">
            {Object.values(markets).map((market) => (
                <div key={market.name} className="flex flex-col min-w-[140px] border-r border-slate-800 pr-4 last:border-0 last:pr-0">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center gap-1">
                            {getIcon(market.name)} {market.name}
                        </span>
                    </div>
                    <div className="flex items-end justify-between mt-1">
                        <span className="text-lg font-mono font-bold text-slate-100">
                            ${market.price.toFixed(2)}
                        </span>
                        <div className={`flex items-center gap-1 text-sm font-medium ${market.trend > 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                            {market.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MarketTickers;
