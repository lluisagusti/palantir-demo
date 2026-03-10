import React, { useState } from 'react';
import GlobeComponent from './GlobeComponent';
import NewsFeed from './NewsFeed';
import MarketTickers from './MarketTickers';
import VideoModal from './VideoModal';
import EventDetailModal from './EventDetailModal';
import MobileMenu from './MobileMenu';
import { useTouchGestures, triggerHaptic } from '../hooks/useTouchGestures.jsx';
import { ShieldAlert, Activity, Menu, ChevronUp, ChevronDown, Radio } from 'lucide-react';
import { publicCameras } from '../data/cameras';
import { maritimeRoutes } from '../data/maritimeRoutes';

const Dashboard = ({
    threats, markets, isConnected,
    earthquakes, flights, weather, lightning, ships, volcanoes, radiation
}) => {
    const [selectedCameraId, setSelectedCameraId] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNewsFeedOpen, setIsNewsFeedOpen] = useState(false);
    const [layers, setLayers] = useState({
        threats: true,
        earthquakes: true,
        flights: true,
        weather: true,
        ships: true,
        environmental: true,
        routes: true
    });

    // Touch gestures for mobile camera navigation
    useTouchGestures({
        onSwipeLeft: () => {
            if (selectedCameraId) {
                handleZap(1);
            }
        },
        onSwipeRight: () => {
            if (selectedCameraId) {
                handleZap(-1);
            }
        },
        onSwipeDown: () => {
            if (isNewsFeedOpen) {
                setIsNewsFeedOpen(false);
            }
        },
        threshold: 80,
        enableHaptic: true
    });

    const toggleLayer = (layer) => {
        setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    };

    const handleCameraSelect = (camId) => {
        setSelectedCameraId(camId);
    };

    const handleEventSelect = (type, data) => {
        if (navigator.vibrate) {
            navigator.vibrate(15);
        }
        setSelectedEvent({ type, data });
    };

    const handleZap = (direction) => {
        if (!selectedCameraId) return;

        const currentIndex = publicCameras.findIndex(c => c.id === selectedCameraId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = publicCameras.length - 1;
        if (newIndex >= publicCameras.length) newIndex = 0;

        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
        setSelectedCameraId(publicCameras[newIndex].id);
    };

    const selectedCamera = publicCameras.find(c => c.id === selectedCameraId);

    const activeLayersCount = Object.values(layers).filter(Boolean).length;

    return (
        <div className="w-full h-full relative flex flex-col font-sans overflow-hidden">
            {/* Mobile Menu Drawer */}
            <MobileMenu 
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                layers={layers}
                onToggleLayer={toggleLayer}
                isConnected={isConnected}
            />

            {/* Top Bar / Tickers */}
            <MarketTickers markets={markets} />

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* Desktop Left Controls */}
                <div className="hidden md:block absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
                    <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl inline-flex flex-col max-w-sm">
                        <h1 className="text-2xl font-black text-rose-500 flex items-center gap-2 mb-1 drop-shadow-md">
                            <ShieldAlert className="w-6 h-6" /> PALANTIR DEMO
                        </h1>
                        <p className="text-xs text-slate-400 font-mono">
                            REAL-TIME GEOPOLITICAL INTELLIGENCE
                        </p>
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur border border-slate-700 px-3 py-1.5 rounded inline-flex items-center gap-2 shadow self-start">
                        <div className="relative flex h-3 w-3">
                            {isConnected && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            )}
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-300">
                            {isConnected ? 'SIMULATION ACTIVE' : 'DISCONNECTED'}
                        </span>
                        <Activity className="w-4 h-4 text-slate-500 ml-2" />
                    </div>

                    <div className="bg-slate-900/80 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl flex flex-col gap-2 pointer-events-auto w-48 mt-2">
                        <h3 className="text-xs font-bold text-slate-400 mb-1 border-b border-slate-700 pb-1">GLOBAL LAYERS</h3>
                        {Object.entries(layers).map(([key, active]) => (
                            <label key={key} onClick={() => toggleLayer(key)} className="flex items-center gap-2 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${active ? 'bg-cyan-500 border-cyan-400' : 'bg-slate-800 border-slate-600'}`}>
                                    {active && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <span className={`text-xs uppercase font-mono tracking-wider transition-colors ${active ? 'text-slate-200 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-400'}`}>
                                    {key}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Mobile Header Bar */}
                <div className="md:hidden absolute top-0 left-0 right-0 z-30 safe-top pointer-events-none">
                    <div className="flex items-center justify-between p-3 pointer-events-auto">
                        <button 
                            onClick={() => {
                                if (navigator.vibrate) navigator.vibrate(10);
                                setIsMobileMenuOpen(true);
                            }}
                            className="p-2.5 glass-panel rounded-lg touch-button haptic-feedback"
                        >
                            <Menu className="w-5 h-5 text-slate-200" />
                        </button>
                        
                        <div className="glass-panel rounded-lg px-3 py-2 flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-rose-500" />
                            <span className="text-sm font-black text-slate-100 tracking-tight">PALANTIR</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => {
                                    if (navigator.vibrate) navigator.vibrate(10);
                                    setIsNewsFeedOpen(!isNewsFeedOpen);
                                }}
                                className="p-2.5 glass-panel rounded-lg touch-button haptic-feedback relative"
                            >
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <span className="relative flex h-2.5 w-2.5">
                                        {isConnected && (
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        )}
                                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </span>
                                </div>
                            </button>
                            
                            {selectedCameraId && (
                                <button 
                                    onClick={() => {
                                        if (navigator.vibrate) navigator.vibrate(10);
                                    }}
                                    className="p-2.5 glass-panel rounded-lg touch-button haptic-feedback bg-cyan-500/20 border border-cyan-500/30"
                                >
                                    <Radio className="w-5 h-5 text-cyan-400 animate-pulse" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* 3D Globe */}
                <div className="flex-1 relative">
                    <GlobeComponent
                        threats={layers.threats ? threats : []}
                        cameras={publicCameras}
                        onCameraSelect={handleCameraSelect}
                        onEventSelect={handleEventSelect}
                        earthquakes={layers.earthquakes ? earthquakes : []}
                        flights={layers.flights ? flights : []}
                        weather={layers.weather ? weather : []}
                        lightning={layers.weather ? lightning : []}
                        ships={layers.ships ? ships : []}
                        volcanoes={layers.environmental ? volcanoes : []}
                        radiation={layers.environmental ? radiation : []}
                        maritimeRoutes={layers.routes ? maritimeRoutes : []}
                    />
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    
                    {/* Mobile Quick Stats */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 safe-bottom pointer-events-none">
                        <div className="mx-3 mb-3 glass-panel rounded-lg p-3 pointer-events-auto">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                                    <span className="text-[10px] text-slate-400 font-mono">THREATS</span>
                                    <span className="text-sm font-bold text-rose-400">{threats.length}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <span className="text-[10px] text-slate-400 font-mono">QUAKES</span>
                                    <span className="text-sm font-bold text-red-400">{earthquakes.length}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                                    <span className="text-[10px] text-slate-400 font-mono">FLIGHTS</span>
                                    <span className="text-sm font-bold text-sky-400">{flights.length}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-[10px] text-slate-400 font-mono">SHIPS</span>
                                    <span className="text-sm font-bold text-blue-400">{ships.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Right Sidebar - News Feed */}
                <div className="hidden md:block">
                    <NewsFeed 
                        threats={threats} 
                        onThreatSelect={(threat) => handleEventSelect('threat', threat)} 
                    />
                </div>

                {/* Mobile News Feed Drawer */}
                {isNewsFeedOpen && (
                    <>
                        <div 
                            className="md:hidden fixed inset-0 z-[55] drawer-overlay"
                            onClick={() => setIsNewsFeedOpen(false)}
                        />
                        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] glass-panel-strong rounded-t-2xl shadow-2xl animate-slide-up max-h-[70vh] overflow-hidden safe-bottom">
                            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                                <h2 className="text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    Live Intel Feed
                                </h2>
                                <button 
                                    onClick={() => setIsNewsFeedOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white touch-button rounded-lg"
                                >
                                    <ChevronDown className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="overflow-y-auto max-h-[calc(70vh-60px)] custom-scrollbar">
                                <NewsFeed 
                                    threats={threats} 
                                    onThreatSelect={(threat) => {
                                        handleEventSelect('threat', threat);
                                        setIsNewsFeedOpen(false);
                                    }} 
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* Video Modal Overlay */}
                <VideoModal
                    camera={selectedCamera}
                    onClose={() => setSelectedCameraId(null)}
                    onZap={handleZap}
                />

                {/* Event Detail Modal */}
                <EventDetailModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            </div>
        </div>
    );
};

export default Dashboard;
