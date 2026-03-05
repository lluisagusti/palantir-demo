import React, { useState } from 'react';
import GlobeComponent from './GlobeComponent';
import NewsFeed from './NewsFeed';
import MarketTickers from './MarketTickers';
import VideoModal from './VideoModal';
import EventDetailModal from './EventDetailModal';
import { ShieldAlert, Activity } from 'lucide-react';
import { publicCameras } from '../data/cameras';
import { maritimeRoutes } from '../data/maritimeRoutes';

const Dashboard = ({
    threats, markets, isConnected,
    earthquakes, flights, weather, lightning, ships, volcanoes, radiation
}) => {
    const [selectedCameraId, setSelectedCameraId] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [layers, setLayers] = useState({
        threats: true,
        earthquakes: true,
        flights: true,
        weather: true,
        ships: true,
        environmental: true,
        routes: true
    });

    const toggleLayer = (layer) => {
        setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    };

    const handleCameraSelect = (camId) => {
        setSelectedCameraId(camId);
    };

    const handleEventSelect = (type, data) => {
        setSelectedEvent({ type, data });
    };

    const handleZap = (direction) => {
        if (!selectedCameraId) return;

        const currentIndex = publicCameras.findIndex(c => c.id === selectedCameraId);
        if (currentIndex === -1) return;

        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = publicCameras.length - 1;
        if (newIndex >= publicCameras.length) newIndex = 0;

        setSelectedCameraId(publicCameras[newIndex].id);
    };

    const selectedCamera = publicCameras.find(c => c.id === selectedCameraId);

    return (
        <div className="w-full h-full relative flex flex-col font-sans">

            {/* Top Bar / Tickers */}
            <MarketTickers markets={markets} />

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden relative">
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
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

                {/* 3D Globe renders here */}
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
                </div>

                {/* Right Sidebar - News Feed */}
                <NewsFeed threats={threats} onThreatSelect={(threat) => handleEventSelect('threat', threat)} />

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
