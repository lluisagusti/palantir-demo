import React, { useEffect } from 'react';
import { X, MapPin, Radio, ChevronLeft, ChevronRight, Hash, Maximize2, Minimize2 } from 'lucide-react';

const VideoModal = ({ camera, onClose, onZap }) => {
    // Handle escape key and prevent body scroll
    useEffect(() => {
        if (camera) {
            document.body.style.overflow = 'hidden';
            // Lock screen orientation on mobile
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch(() => {});
            }
        } else {
            document.body.style.overflow = '';
            if (screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
            }
        }
        return () => {
            document.body.style.overflow = '';
            if (screen.orientation && screen.orientation.unlock) {
                screen.orientation.unlock();
            }
        };
    }, [camera]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && camera) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [camera, onClose]);

    if (!camera) return null;

    const handleZapWithHaptic = (direction) => {
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
        onZap(direction);
    };

    const handleCloseWithHaptic = () => {
        if (navigator.vibrate) {
            navigator.vibrate(15);
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90"
                onClick={handleCloseWithHaptic}
            />

            {/* Modal Container */}
            <div className="relative w-full h-full md:max-w-5xl md:max-h-[90vh] md:rounded-2xl overflow-hidden flex flex-col ring-1 ring-cyan-500/30 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between p-3 md:p-4 border-b border-slate-800/50 bg-slate-900/90 backdrop-blur-md z-10 safe-top">
                    <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
                        <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                            <Radio className="w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold tracking-wider whitespace-nowrap">LIVE</span>
                        </div>
                        <h2 className="text-sm md:text-xl font-bold text-slate-100 truncate">
                            {camera.name}
                        </h2>
                    </div>

                    <button
                        onClick={handleCloseWithHaptic}
                        className="p-2 md:p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors touch-button"
                    >
                        <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Video Area */}
                <div className="relative flex-1 bg-black w-full">
                    <iframe
                        src={`https://www.youtube.com/embed/${camera.youtubeId}?autoplay=1&mute=1&controls=1&modestbranding=1&playsinline=1&rel=0`}
                        title={camera.name}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Zapping Controls - Left */}
                    <div className="absolute inset-y-0 left-0 w-20 md:w-24 bg-gradient-to-r from-black/70 to-transparent flex items-center opacity-0 hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => handleZapWithHaptic(-1)}
                            className="ml-2 md:ml-4 p-3 md:p-3.5 bg-black/60 text-white rounded-full hover:bg-cyan-500/80 hover:scale-110 transition-all backdrop-blur-md border border-white/10 touch-button"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>

                    {/* Zapping Controls - Right */}
                    <div className="absolute inset-y-0 right-0 w-20 md:w-24 bg-gradient-to-l from-black/70 to-transparent flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => handleZapWithHaptic(1)}
                            className="mr-2 md:mr-4 p-3 md:p-3.5 bg-black/60 text-white rounded-full hover:bg-cyan-500/80 hover:scale-110 transition-all backdrop-blur-md border border-white/10 touch-button"
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </div>

                    {/* Mobile Tap Zones */}
                    <div 
                        className="md:hidden absolute inset-y-0 left-0 w-1/3 z-10"
                        onClick={() => handleZapWithHaptic(-1)}
                    />
                    <div 
                        className="md:hidden absolute inset-y-0 right-0 w-1/3 z-10"
                        onClick={() => handleZapWithHaptic(1)}
                    />

                    {/* Scanlines overlay effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />

                    {/* Center tap hint for mobile */}
                    <div className="md:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                            <p className="text-xs text-white/70 font-medium">Tap sides to switch cameras</p>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="p-3 md:p-4 bg-slate-900/90 backdrop-blur-md border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-3 mobile-safe-area">
                    <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm text-slate-300 flex-wrap">
                        <div className="flex items-center gap-1.5 md:gap-2">
                            <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                            <span className="truncate max-w-[150px] md:max-w-none">{camera.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] md:text-xs text-slate-500">
                            <Hash className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            <span className="truncate">{camera.lat.toFixed(4)}, {camera.lng.toFixed(4)}</span>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 max-w-full md:max-w-xl truncate md:text-right">
                        {camera.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
