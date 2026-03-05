import React from 'react';
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
        <div className="space-y-2">
            <p className="text-slate-200 text-sm leading-relaxed">{data.headline}</p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3 h-3" /> {data.region} &bull; Lat {data.lat?.toFixed(2)}, Lng {data.lng?.toFixed(2)}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3 h-3" /> {data.timestamp ? new Date(data.timestamp).toLocaleString() : 'Real-time'}
            </div>
            <div className="text-xs text-slate-500">Severity: <span className="font-bold text-rose-400">{data.weight}/5</span></div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://news.google.com/search?q=${encodeURIComponent(data.headline || data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                <ExternalLink className="w-3 h-3" /> Google News Search
            </a>
            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                <ExternalLink className="w-3 h-3" /> Wikipedia: {data.region}
            </a>
            <a href={`https://www.bbc.co.uk/search?q=${encodeURIComponent(data.headline || data.region)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                <ExternalLink className="w-3 h-3" /> BBC News
            </a>
        </div>
    </>
);

const renderEarthquakeDetails = (data) => (
    <>
        <div className="space-y-2">
            <p className="text-slate-200 text-sm">{data.title || 'Seismic Event Detected'}</p>
            <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className="text-2xl font-black text-red-400">{data.mag?.toFixed(1) || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Magnitude</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className="text-sm font-mono text-slate-300">{data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Coordinates</div>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3 h-3" /> {data.time ? new Date(data.time).toLocaleString() : 'Just now'}
            </div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://earthquake.usgs.gov/earthquakes/map/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> USGS Earthquake Map
            </a>
            <a href={`https://earthquake.usgs.gov/earthquakes/eventpage/us${data.id}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> Event Detail (USGS)
            </a>
            <a href="https://www.emsc-csem.org/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> EMSC Seismology
            </a>
        </div>
    </>
);

const renderFlightDetails = (data) => (
    <>
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-lg font-mono font-bold text-sky-300">{data.callsign || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Callsign</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.country || 'Unknown'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Origin</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.alt ? Math.round(data.alt) + 'm' : 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Altitude</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.velocity ? Math.round(data.velocity) + 'm/s' : 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Speed</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Heading: {data.heading?.toFixed(0)}° &bull; Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://www.flightradar24.com/`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> FlightRadar24
            </a>
            <a href="https://opensky-network.org/network/explorer" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> OpenSky Network Explorer
            </a>
        </div>
    </>
);

const renderShipDetails = (data) => (
    <>
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono font-bold text-blue-300">{data.mmsi || 'N/A'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">MMSI</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.type || 'Unknown'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Type</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.speed?.toFixed(1)} kn</div>
                    <div className="text-[10px] text-slate-500 uppercase">Speed</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-sm font-mono text-slate-300">{data.heading?.toFixed(0)}°</div>
                    <div className="text-[10px] text-slate-500 uppercase">Heading</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://www.marinetraffic.com/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> MarineTraffic
            </a>
            <a href="https://www.vesselfinder.com/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> VesselFinder
            </a>
        </div>
    </>
);

const renderWeatherDetails = (data) => (
    <>
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className="text-2xl font-black text-amber-300">{data.temp?.toFixed(1)}°C</div>
                    <div className="text-[10px] text-slate-500 uppercase">Temperature</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className="text-lg font-bold text-slate-300">{data.condition}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Condition</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Wind: {data.wind?.toFixed(1)} m/s &bull; {data.name}</div>
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://openweathermap.org/city/${data.id}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> OpenWeatherMap Detail
            </a>
            <a href={`https://www.windy.com/${data.lat}/${data.lng}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> Windy.com
            </a>
        </div>
    </>
);

const renderVolcanoDetails = (data) => (
    <>
        <div className="space-y-2">
            <p className="text-slate-200 text-sm font-semibold">{data.name}</p>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className="text-xl font-black text-orange-400">{data.vei}</div>
                    <div className="text-[10px] text-slate-500 uppercase">VEI Index</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className={`text-sm font-bold ${data.status === 'Erupting' ? 'text-red-400' : 'text-amber-400'}`}>{data.status}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Status</div>
                </div>
            </div>
            <div className="text-xs text-slate-400">Region: {data.region} &bull; Pos: {data.lat?.toFixed(2)}, {data.lng?.toFixed(2)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href={`https://volcano.si.edu/search_volcano.cfm`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> Smithsonian Global Volcanism
            </a>
            <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(data.name)}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> Wikipedia: {data.name}
            </a>
        </div>
    </>
);

const renderRadiationDetails = (data) => (
    <>
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className={`text-2xl font-black ${data.alert ? 'text-fuchsia-400' : 'text-fuchsia-300'}`}>{data.cpm}</div>
                    <div className="text-[10px] text-slate-500 uppercase">CPM</div>
                </div>
                <div className="bg-slate-800/50 p-2 rounded text-center">
                    <div className={`text-lg font-bold ${data.alert ? 'text-red-400' : 'text-green-400'}`}>{data.alert ? 'ELEVATED' : 'NORMAL'}</div>
                    <div className="text-[10px] text-slate-500 uppercase">Level</div>
                </div>
            </div>
            {data.name && <div className="text-xs text-slate-400">Station: {data.name}</div>}
            <div className="text-xs text-slate-400">Pos: {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
        </div>
        <div className="mt-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
            <a href="https://radmon.org/index.php/rad-map" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> Radmon.org Live Map
            </a>
            <a href="https://remap.jrc.ec.europa.eu/Advanced.aspx" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <ExternalLink className="w-3 h-3" /> EU Radiation Map
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
            <div className="space-y-2">
                <div className="text-xs text-slate-400">Strike at {data.lat?.toFixed(3)}, {data.lng?.toFixed(3)}</div>
                <div className="text-xs text-slate-400">Time: {data.time ? new Date(data.time).toLocaleString() : 'Just now'}</div>
            </div>
            <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
                <a href="https://www.blitzortung.org/en/live_lightning_maps.php" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                    <ExternalLink className="w-3 h-3" /> Blitzortung Live Map
                </a>
            </div>
        </>
    ),
    route: (data) => (
        <>
            <div className="space-y-3">
                <p className="text-slate-200 text-sm leading-relaxed">{data.description}</p>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/50 p-2 rounded text-center">
                        <div className="text-sm font-bold text-cyan-300">{data.traffic}</div>
                        <div className="text-[10px] text-slate-500 uppercase">Traffic Volume</div>
                    </div>
                    <div className="bg-slate-800/50 p-2 rounded text-center">
                        <div className={`text-sm font-bold ${data.importance === 'Critical' ? 'text-red-400' : data.importance === 'High' ? 'text-orange-400' : 'text-yellow-400'}`}>{data.importance}</div>
                        <div className="text-[10px] text-slate-500 uppercase">Importance</div>
                    </div>
                </div>

                <div className="bg-slate-800/50 p-2 rounded">
                    <div className="text-[10px] text-slate-500 uppercase mb-1">Tonnage</div>
                    <div className="text-xs text-slate-300">{data.tonnage}</div>
                </div>

                {data.keyPorts && (
                    <div>
                        <div className="text-[10px] text-slate-500 uppercase mb-1">Key Ports</div>
                        <div className="flex flex-wrap gap-1">
                            {data.keyPorts.map((port, i) => (
                                <span key={i} className="text-[10px] bg-cyan-900/30 border border-cyan-800/40 text-cyan-300 px-2 py-0.5 rounded">{port}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">History</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{data.history}</p>
                </div>
            </div>
            <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sources & Links</h4>
                {data.links?.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                        <ExternalLink className="w-3 h-3" /> {link.label}
                    </a>
                ))}
            </div>
        </>
    )
};

const EventDetailModal = ({ event, onClose }) => {
    if (!event) return null;

    const config = typeConfig[event.type] || typeConfig.threat;
    const IconComp = config.icon;
    const renderContent = renderers[event.type] || renderers.threat;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className={`relative w-full max-w-md bg-slate-900/95 backdrop-blur-xl border ${config.border} rounded-xl shadow-2xl overflow-hidden animate-in`}
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className={`flex items-center justify-between p-4 border-b border-slate-700/50 ${config.bg}`}>
                    <div className="flex items-center gap-2">
                        <IconComp className={`w-5 h-5 ${config.color}`} />
                        <span className={`text-xs font-bold uppercase tracking-widest ${config.color}`}>{config.label}</span>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-700/50">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4">
                    {renderContent(event.data)}
                </div>

                {/* Footer */}
                <div className="px-4 pb-4">
                    <div className="text-[10px] text-slate-600 text-center border-t border-slate-800 pt-3">
                        PALANTIR DEMO &bull; Real-Time Intelligence Dashboard
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailModal;
