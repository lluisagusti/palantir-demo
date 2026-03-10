import React, { useEffect } from 'react';
import { X, ShieldAlert, Activity, Layers } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, layers, onToggleLayer, isConnected }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const layerLabels = {
        threats: 'Threats',
        earthquakes: 'Earthquakes',
        flights: 'Flights',
        weather: 'Weather',
        ships: 'Ships',
        environmental: 'Environmental',
        routes: 'Routes'
    };

    const layerColors = {
        threats: 'bg-rose-500',
        earthquakes: 'bg-red-500',
        flights: 'bg-sky-500',
        weather: 'bg-amber-500',
        ships: 'bg-blue-500',
        environmental: 'bg-orange-500',
        routes: 'bg-cyan-500'
    };

    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[60] drawer-overlay md:hidden"
                    onClick={onClose}
                />
            )}
            
            <div 
                className={`fixed top-0 left-0 z-[70] h-full w-80 glass-panel-strong shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-700/50 safe-top">
                    <div className="flex items-center gap-2">
                        <ShieldAlert className="w-6 h-6 text-rose-500" />
                        <span className="text-lg font-black text-slate-100">PALANTIR</span>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white touch-button rounded-lg"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4 border-b border-slate-700/50">
                    <div className="flex items-center gap-3 glass-panel rounded-lg p-3">
                        <div className="relative flex h-3 w-3">
                            {isConnected && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            )}
                            <span 
                                className={`relative inline-flex rounded-full h-3 w-3 ${
                                    isConnected ? 'bg-green-500' : 'bg-red-500'
                                }`}
                            ></span>
                        </div>
                        <span className="text-sm font-bold text-slate-300 font-mono">
                            {isConnected ? 'SIMULATION ACTIVE' : 'DISCONNECTED'}
                        </span>
                        <Activity className="w-4 h-4 text-slate-500 ml-auto" />
                    </div>
                </div>

                <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Layers className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Global Layers</h3>
                    </div>
                    
                    <div className="space-y-2">
                        {Object.entries(layers).map(([key, active]) => (
                            <button
                                key={key}
                                onClick={() => onToggleLayer(key)}
                                className="w-full flex items-center justify-between p-3 rounded-lg glass-panel touch-button group"
                            >
                                <div className="flex items-center gap-3">
                                    <div 
                                        className={`w-5 h-5 rounded transition-colors ${
                                            active ? layerColors[key] : 'bg-slate-700'
                                        }`}
                                    />
                                    <span 
                                        className={`text-sm font-mono uppercase tracking-wider transition-colors ${
                                            active ? 'text-slate-200' : 'text-slate-500'
                                        }`}
                                    >
                                        {layerLabels[key]}
                                    </span>
                                </div>
                                <div 
                                    className={`w-10 h-6 rounded-full transition-colors ${
                                        active ? 'bg-cyan-600' : 'bg-slate-700'
                                    } relative`}
                                >
                                    <div 
                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                                            active ? 'left-5' : 'left-1'
                                        }`}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 glass-panel-strong mobile-safe-area">
                    <p className="text-xs text-slate-500 text-center font-mono">
                        PALANTIR DEMO v1.0
                    </p>
                    <p className="text-[10px] text-slate-600 text-center mt-1">
                        Real-Time Intelligence Platform
                    </p>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
