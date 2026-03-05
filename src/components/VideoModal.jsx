import React from 'react';
import { X, MapPin, Radio, ChevronLeft, ChevronRight, Hash } from 'lucide-react';

const VideoModal = ({ camera, onClose, onZap }) => {
    if (!camera) return null;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
            {/* Backdrop blur effect */}
            <div
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-5xl bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto ring-1 ring-cyan-500/30">

                {/* Header Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-800/50 bg-slate-900/50">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span className="text-xs font-bold tracking-wider">LIVE FEED</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            {camera.name}
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Video Area */}
                <div className="relative aspect-video w-full bg-black">
                    <iframe
                        src={`https://www.youtube.com/embed/${camera.youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                        title={camera.name}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* Zapping Controls overlay */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center">
                        <button
                            onClick={() => onZap(-1)}
                            className="ml-4 p-3 bg-black/50 text-white rounded-full hover:bg-cyan-500/80 hover:scale-110 transition-all backdrop-blur-md border border-white/10"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-end">
                        <button
                            onClick={() => onZap(1)}
                            className="mr-4 p-3 bg-black/50 text-white rounded-full hover:bg-cyan-500/80 hover:scale-110 transition-all backdrop-blur-md border border-white/10"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Scanlines overlay effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10" />
                </div>

                {/* Footer Info */}
                <div className="p-4 bg-slate-900/80 border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span>{camera.location}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                            <Hash className="w-3 h-3" />
                            <span>{camera.lat.toFixed(4)}, {camera.lng.toFixed(4)}</span>
                        </div>
                    </div>
                    <p className="text-sm text-slate-400 max-w-xl text-right">
                        {camera.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
