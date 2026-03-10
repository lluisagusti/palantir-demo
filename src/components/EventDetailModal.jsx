import React, { useEffect } from 'react';
import { X, ExternalLink, MapPin, Clock, AlertTriangle, Plane, Ship, CloudLightning, Mountain, RadioTower, Anchor } from 'lucide-react';

const typeConfig = {
    threat: { label: 'GEOPOLITICAL THREAT', color: 'text-rose-400', border: 'border-rose-500/40', bg: 'bg-rose-950/30', icon: AlertTriangle },
    earthquake: { label: 'SEISMIC EVENT', color: 'text-red-400', border: 'border-red-500/40', bg: 'bg-red-950/30', icon: AlertTriangle },
    flight: { label: 'FLIGHT TRACKING', color: 'text-sky-400', border: 'border-sky-500/40', bg: 'bg-sky-950/30', icon: Plane },
    ship: { label: 'MARITIME VESSEL', color: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-950/30', icon: Ship },
    weather: { label: 'WEATHER STATION', color: 'text-amber-400', border: 'border-amber-500/40', bg: 'bg-amber-950/30', icon: CloudLightning },
    volcano: { label: 'VOLCANIC ACTIVITY', color: 'text-orange-400', border: 'border-orange-500/40', bg: 'bg-orange-950/30', icon: Mountain },
    radiation: { label: 'RADIATION MONITOR', color: 'text-fuchsia-400', border: 'border-fuchsia-500/40', bg: 'bg-fuchsia-950/30', icon: RadioTower },
    lightning: { label: 'LIGHTNING STRIKE', color: 'text-yellow-400', border: 'border-yellow-500/40', bg: 'bg-yellow-950/30', icon: CloudLightning },
    route: { label: 'MARITIME ROUTE', color: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-950/30', icon: Anchor },
};

const renderThreatDetails = (data) => (
    <>
        <div className="space-y-3">
            <p className="text-slate-200 text-sm leading-relaxed">{data.headline}</p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5" /> {data.region} &bull; Lat {data.lat?.toFixed(2)}, Lng {data.lng?.toFixed(2)}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" /> {data.timestamp ? new Date(data.timestamp).toLocaleString() : 'Real-time'}
            </div>
            <div className="text-xs text-slate-500">Severity: <span className="font-bold text-rose-400">{data.weight}/5</span></div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://news.google.com/search?q=${encodeURIComponent(data.headline || data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Google News Search
            </a>
            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Wikipedia: {data.region}
            </a>
            <a href={`https://www.bbc.co.uk/search?q=${encodeURIComponent(data.headline || data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> BBC News
            </a>
        </div>
    </>
);

const renderEarthquakeDetails = (data) => (
    <>
        <div className="space-y-3">
            <p className="text-slate-200 text-sm">{data.title || 'Seismic Event Detected'}</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-black text-red-400">{data.mag?.toFixed(1) || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Magnitude</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className="text-xs font-mono text-slate-300">{data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Coordinates</div>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" /> {data.time ? new Date(data.time).toLocaleString() : 'Just now'}
            </div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> USGS Earthquake Map
            </a>
            <a href={`https://earthquake.usgs.gov/earthquakes/eventpage/us${data.id}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Event Detail (USGS)
            </a>
            <a href="https://www.emsc-csem.org/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> EMSC Seismology
            </a>
        </div>
    </>
);

const renderFlightDetails = (data) => (
    <>
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-base font-mono font-bold text-sky-300">{data.callsign || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Callsign</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.country || 'Unknown'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Origin</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.alt ? Math.round(data.alt) + 'm' : 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Altitude</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.velocity ? Math.round(data.velocity) + 'm/s' : 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Speed</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Heading: {data.heading?.toFixed(0)}° &bull; Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://www.flightradar24.com/`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> FlightRadar24
            </a>
            <a href="https://opensky-network.org/network/explorer" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> OpenSky Network Explorer
            </a>
        </div>
    </>
);

const renderShipDetails = (data) => (
    <>
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono font-bold text-blue-300">{data.mmsi || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">MMSI</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.type || 'Unknown'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Type</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.speed?.toFixed(1)} kn</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Speed</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-sm font-mono text-slate-300">{data.heading?.toFixed(0)}°</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Heading</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://www.marinetraffic.com/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> MarineTraffic
            </a>
            <a href="https://www.vesselfinder.com/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> VesselFinder
            </a>
        </div>
    </>
);

const renderWeatherDetails = (data) => (
    <>
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-black text-amber-300">{data.temp?.toFixed(1)}°C</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Temperature</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className="text-base font-bold text-slate-300">{data.condition}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Condition</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Wind: {data.wind?.toFixed(1)} m/s &bull; {data.name}</div>
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://openweathermap.org/city/${data.id}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> OpenWeatherMap Detail
            </a>
            <a href={`https://www.windy.com/${data.lat}/${data.lng}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Windy.com
            </a>
        </div>
    </>
);

const renderVolcanoDetails = (data) => (
    <>
        <div className="space-y-3">
            <p className="text-slate-200 text-sm font-semibold">{data.name}</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className="text-xl font-black text-orange-400">{data.vei}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">VEI Index</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className={`text-sm font-bold ${data.status === 'Erupting' ? 'text-red-400' : 'text-amber-400'}`}>{data.status}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Status</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Region: {data.region} &bull; Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://volcano.si.edu/search_volcano.cfm`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Smithsonian Global Volcanism
            </a>
            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(data.name)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Wikipedia: {data.name}
            </a>
        </div>
    </>
);

const renderRadiationDetails = (data) => (
    <>
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className={`text-2xl font-black ${data.alert ? 'text-fuchsia-400' : 'text-fuchsia-300'}`}>{data.cpm}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">CPM</div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <div className={`text-sm font-bold ${data.alert ? 'text-red-400' : 'text-green-400'}`}>{data.alert ? 'ELEVATED' : 'NORMAL'}</div>
                    <div className="text-[10px] text-slate-500 uppercase mt-1">Level</div>
                </div>
            </div>
            {data.name && <div className="text-xs text-slate-400">Station: {data.name}</div>}
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://radmon.org/index.php/rad-map" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> Radmon.org Live Map
            </a>
            <a href="https://remap.jrc.ec.europa.eu/Advanced.aspx" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                <ExternalLink className="w-3.5 h-3.5" /> EU Radiation Map
            </a>
        </div>
    </>
);

const renderers = {
    threat: renderThreatDetails,
    earthquake: renderEarthquakeDetails,
    flight: renderFlightDetails,
    ship: renderShipDetails,
    weather: renderWeatherDetails,
    volcano: renderVolcanoDetails,
    radiation: renderRadiationDetails,
    lightning: (data) => (
        <>
            <div className="space-y-3">
                <div className="text-xs text-slate-400">Strike at {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
                <div className="text-xs text-slate-400">Time: {data.time ? new Date(data.time).toLocaleString() : 'Just now'}</div>
            </div>
            <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
                <a href="https://www.blitzortung.org/en/live_lightning_maps.php" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button">
                    <ExternalLink className="w-3.5 h-3.5" /> Blitzortung Live Map
                </a>
            </div>
        </>
    ),
    route: (data) => (
        <>
            <div className="space-y-3">
                <p className="text-slate-200 text-sm leading-relaxed">{data.description}</p>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                        <div className="text-sm font-bold text-cyan-300">{data.traffic}</div>
                        <div className="text-[10px] text-slate-500 uppercase mt-1">Traffic Volume</div>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                        <div className={`text-sm font-bold ${data.importance === 'Critical' ? 'text-red-400' : data.importance === 'High' ? 'text-orange-400' : 'text-yellow-400'}`}>{data.importance}</div>
                        <div className="text-[10px] text-slate-500 uppercase mt-1">Importance</div>
                    </div>
                </div>

                <div className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="text-[10px] text-slate-500 uppercase mb-1">Tonnage</div>
                    <div className="text-xs text-slate-300 leading-relaxed">{data.tonnage}</div>
                </div>

                {data.keyPorts && (
                    <div>
                        <div className="text-[10px] text-slate-500 uppercase mb-2">Key Ports</div>
                        <div className="flex flex-wrap gap-1.5">
                            {data.keyPorts.map((port, i) => (
                                <span key={i} className="text-[10px] bg-cyan-900/30 border border-cyan-800/40 text-cyan-300 px-2 py-1 rounded-full">{port}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">History</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{data.history}</p>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
                {data.links?.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 p-2 rounded hover:bg-slate-800/50 touch-button transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> {link.label}
                    </a>
                ))}
            </div>
        </>
    )
};

const EventDetailModal = ({ event, onClose }) => {
    // Handle escape key and prevent body scroll
    useEffect(() => {
        if (event) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [event]);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && event) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [event, onClose]);

    if (!event) return null;

    const config = typeConfig[event.type] || typeConfig.threat;
    const IconComp = config.icon;
    const renderContent = renderers[event.type] || renderers.threat;

    const handleClose = () => {
        if (navigator.vibrate) {
            navigator.vibrate(15);
        }
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 safe-area" 
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
                className={`relative w-full max-w-md bg-slate-900/95 backdrop-blur-xl border ${config.border} rounded-2xl shadow-2xl overflow-hidden animate-in max-h-[85vh] flex flex-col modal-mobile-fullscreen`}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`flex items-center justify-between p-4 border-b border-slate-700/50 ${config.bg} flex-shrink-0`}>
                    <div className="flex items-center gap-2.5">
                        <IconComp className={`w-5 h-5 ${config.color}`} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${config.color}`}>{config.label}</span>
                    </div>
                    <button 
                        onClick={handleClose} 
                        className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-700/50 touch-button"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                    {renderContent(event.data)}
                </div>

                {/* Footer */}
                <div className="px-4 pb-4 pt-3 border-t border-slate-800/50 flex-shrink-0 mobile-safe-area">
                    <div className="text-[10px] text-slate-600 text-center font-mono">
                        PALANTIR DEMO &bull; Real-Time Intelligence Dashboard
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailModal;
