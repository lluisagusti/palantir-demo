import React, { useRef, useEffect } from 'react';
import { TrendingUp, TrendingDown, Target, Droplet } from 'lucide-react';

const MarketTickers = ({ markets }) => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const getIcon = (symbol) => {
        if (symbol.includes('OIL')) return <Droplet className="w-4 h-4 text-blue-400 flex-shrink-0" />;
        return <Target className="w-4 h-4 text-slate-400 flex-shrink-0" />;
    };

    // Auto-scroll for desktop
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer || window.innerWidth < 768) return;

        const scrollStep = () => {
            if (!isDragging.current) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    scrollContainer.scrollLeft += 0.5;
                }
            }
        };

        const interval = setInterval(scrollStep, 30);
        return () => clearInterval(interval);
    }, []);

    // Touch/mouse drag handlers for mobile
    const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches ? e.touches[0].pageX : e.pageX;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const x = e.touches ? e.touches[0].pageX : e.pageX;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    const marketsArray = Object.values(markets);

    return (
        <>
            {/* Desktop View - Static Grid */}
            <div className="hidden md:flex w-full bg-slate-900/90 border-b border-slate-800 p-2 z-10 items-center justify-around gap-4 shadow-lg backdrop-blur-md">
                {marketsArray.map((market) => (
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
                            <div className={`flex items-center gap-1 text-sm font-medium ${
                                market.change >= 0 ? 'text-green-500' : 'text-red-500'
                            }`}>
                                {market.change >= 0 ? (
                                    <TrendingUp className="w-3 h-3" />
                                ) : (
                                    <TrendingDown className="w-3 h-3" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View - Horizontal Scrolling Ticker */}
            <div 
                ref={scrollRef}
                className="md:hidden w-full bg-slate-900/95 border-b border-slate-800 py-2 z-10 shadow-lg backdrop-blur-md overflow-x-auto hide-scrollbar safe-top"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                style={{ 
                    WebkitOverflowScrolling: 'touch',
                    cursor: isDragging.current ? 'grabbing' : 'grab'
                }}
            >
                <div className="flex items-center gap-3 px-3" style={{ width: 'max-content' }}>
                    {marketsArray.map((market, index) => (
                        <div 
                            key={market.name} 
                            className={`flex flex-col min-w-[130px] glass-panel rounded-lg p-2.5 ${
                                index !== marketsArray.length - 1 ? 'mr-2' : ''
                            }`}
                        >
                            <div className="flex items-center gap-1.5 mb-1">
                                {getIcon(market.name)}
                                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                                    {market.symbol}
                                </span>
                            </div>
                            <div className="flex items-end justify-between">
                                <span className="text-base font-mono font-bold text-slate-100">
                                    ${market.price.toFixed(2)}
                                </span>
                                <div className={`flex items-center gap-1 ${
                                    market.change >= 0 ? 'text-green-500' : 'text-red-500'
                                }`}>
                                    {market.change >= 0 ? (
                                        <TrendingUp className="w-3.5 h-3.5" />
                                    ) : (
                                        <TrendingDown className="w-3.5 h-3.5" />
                                    )}
                                    <span className="text-[10px] font-bold">
                                        {Math.abs(market.changePercent).toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Scroll indicator */}
                    <div className="flex items-center gap-1 ml-2 opacity-50">
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></div>
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarketTickers;
