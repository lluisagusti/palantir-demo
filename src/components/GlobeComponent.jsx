import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const getWeatherIcon = (cond) => {
    switch (cond) {
        case 'Clear': return '☀️';
        case 'Clouds': return '☁️';
        case 'Rain': return '🌧️';
        case 'Snow': return '❄️';
        case 'Thunderstorm': return '⛈️';
        default: return '🌤️';
    }
}

const GlobeComponent = ({
    threats = [], cameras = [], onCameraSelect, onEventSelect,
    earthquakes = [], flights = [], weather = [],
    lightning = [], ships = [], volcanoes = [], radiation = [],
    maritimeRoutes = []
}) => {
    const globeEl = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800,
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        checkMobile();

        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = isMobile ? 0.3 : 0.5;

            // Enhanced mobile controls
            const controls = globeEl.current.controls();
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.rotateSpeed = isMobile ? 0.8 : 0.5;
            controls.zoomSpeed = isMobile ? 1.2 : 0.8;
            // Zoomed out further on mobile for better overview
            controls.minDistance = isMobile ? 120 : 100;
            controls.maxDistance = isMobile ? 300 : 180;
            
            // Set initial camera position - zoomed out further on mobile
            const initialDistance = isMobile ? 220 : 140;
            globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: initialDistance }, 0);
        }

        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });

            if (globeEl.current) {
                const controls = globeEl.current.controls();
                controls.rotateSpeed = mobile ? 0.8 : 0.5;
                controls.zoomSpeed = mobile ? 1.2 : 0.8;
                // Zoomed out further on mobile for better overview
                controls.minDistance = mobile ? 120 : 100;
                controls.maxDistance = mobile ? 300 : 180;
                
                // Update initial camera position on resize
                const initialDistance = mobile ? 220 : 140;
                globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: initialDistance }, 1000);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Rings Data
    const threatRings = threats.map(t => ({ 
        lat: t.lat, 
        lng: t.lng, 
        maxR: t.weight * 2, 
        color: t.weight === 5 ? '#ef4444' : '#f97316', 
        prop: 1.5, 
        rep: 1000 
    }));
    
    const camRings = cameras.map(c => ({ 
        lat: c.lat, 
        lng: c.lng, 
        maxR: 3, 
        color: '#06b6d4', 
        prop: 1, 
        rep: 1500 
    }));
    
    const eqRings = earthquakes.map(eq => ({ 
        lat: eq.lat, 
        lng: eq.lng, 
        maxR: eq.mag ? eq.mag * 0.8 : 3, 
        color: '#dc2626', 
        prop: 2, 
        rep: 800 
    }));
    
    const lightRings = lightning.map(l => ({ 
        lat: l.lat, 
        lng: l.lng, 
        maxR: 1.5, 
        color: '#fef08a', 
        prop: 5, 
        rep: 400 
    }));
    
    const radAlerts = radiation.filter(r => r.alert).map(r => ({ 
        lat: r.lat, 
        lng: r.lng, 
        maxR: 5, 
        color: '#c026d3', 
        prop: 0.5, 
        rep: 2000 
    }));

    const allRingsData = [...threatRings, ...camRings, ...eqRings, ...lightRings, ...radAlerts];

    // Points Data
    const threatPts = threats.map(t => ({ 
        lat: t.lat, 
        lng: t.lng, 
        size: isMobile ? 0.3 + (t.weight * 0.15) : 0.2 + (t.weight * 0.1), 
        color: t.weight === 5 ? '#ef4444' : '#f97316', 
        alt: 0.01, 
        _type: 'threat', 
        _data: t 
    }));
    
    const eqPts = earthquakes.map(eq => ({ 
        lat: eq.lat, 
        lng: eq.lng, 
        size: isMobile ? (eq.mag ? eq.mag / 8 : 0.5) : (eq.mag ? eq.mag / 10 : 0.4), 
        color: '#dc2626', 
        alt: 0, 
        _type: 'earthquake', 
        _data: eq 
    }));
    
    const flightPts = flights.map(f => ({ 
        lat: f.lat, 
        lng: f.lng, 
        size: isMobile ? 0.15 : 0.1, 
        color: '#38bdf8', 
        alt: 0.05 + (f.alt ? f.alt / 100000 : 0), 
        _type: 'flight', 
        _data: f 
    }));
    
    const shipPts = ships.map(s => ({ 
        lat: s.lat, 
        lng: s.lng, 
        size: isMobile ? 0.08 : 0.05, 
        color: '#93c5fd', 
        alt: 0, 
        _type: 'ship', 
        _data: s 
    }));

    const allPtsData = [...threatPts, ...eqPts, ...flightPts, ...shipPts];

    // HTML Elements Data
    const camHtml = cameras.map(c => ({ lat: c.lat, lng: c.lng, type: 'camera', data: c }));
    const weatherHtml = weather.map(w => ({ lat: w.lat, lng: w.lng, type: 'weather', data: w }));
    const volcanoHtml = volcanoes.map(v => ({ lat: v.lat, lng: v.lng, type: 'volcano', data: v }));
    const radHtml = radiation.map(r => ({ lat: r.lat, lng: r.lng, type: 'radiation', data: r }));

    const allHtmlData = [...camHtml, ...weatherHtml, ...volcanoHtml, ...radHtml];

    const handlePointClick = (point) => {
        if (point._type && onEventSelect) {
            // Haptic feedback for mobile
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
            onEventSelect(point._type, point._data);
        }
    };

    const handleArcClick = (arc) => {
        if (onEventSelect) {
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
            onEventSelect('route', arc._data);
        }
    };

    return (
        <div ref={containerRef} className="globe-container">
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                width={dimensions.width}
                height={dimensions.height}
                
                // Mobile-optimized globe settings
                globeOpacity={1}
                atmosphereColor="#4a90d9"
                atmosphereAltitude={isMobile ? 0.15 : 0.2}

                // Points Layer
                pointsData={allPtsData}
                pointAltitude="alt"
                pointColor="color"
                pointRadius="size"
                onPointClick={handlePointClick}
                pointLabel={d => {
                    const labels = {
                        threat: `⚠️ Threat (Severity: ${d._data.weight})`,
                        earthquake: `🌍 M${d._data.mag?.toFixed(1)}`,
                        flight: `✈️ ${d._data.callsign}`,
                        ship: `🚢 ${d._data.type}`
                    };
                    return `<div style="background: rgba(15,23,42,0.95); border: 1px solid rgba(34,211,238,0.3); padding: 6px 10px; border-radius: 6px; color: #e2e8f0; font-size: ${isMobile ? '10px' : '11px'}; font-weight: 600; backdrop-filter: blur(8px); box-shadow: 0 4px 12px rgba(0,0,0,0.5); white-space: nowrap;">${labels[d._type] || ''}</div>`;
                }}

                // Rings Layer
                ringsData={allRingsData}
                ringColor="color"
                ringMaxRadius="maxR"
                ringPropagationSpeed="prop"
                ringRepeatPeriod="rep"

                // Arcs Layer — Maritime Routes
                arcsData={maritimeRoutes.map(r => ({
                    startLat: r.startLat, startLng: r.startLng,
                    endLat: r.endLat, endLng: r.endLng,
                    color: r.color,
                    _data: r
                }))}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={isMobile ? 2000 : 3000}
                arcStroke={isMobile ? 0.8 : 0.5}
                onArcClick={handleArcClick}
                arcLabel={d => `<div style="background: rgba(15,23,42,0.9); border: 1px solid rgba(34,211,238,0.3); padding: 6px 10px; border-radius: 6px; color: #e2e8f0; font-size: ${isMobile ? '10px' : '11px'}; font-weight: 600; backdrop-filter: blur(8px); box-shadow: 0 4px 12px rgba(0,0,0,0.5);"><span style="color: ${d.color};">⚓</span> ${d._data.name}<br/><span style="font-size: ${isMobile ? '8px' : '9px'}; color: #94a3b8;">Click for details</span></div>`}

                // HTML Elements Layer
                htmlElementsData={allHtmlData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    const size = isMobile ? '16px' : '14px';

                    if (d.type === 'camera') {
                        el.innerHTML = `
                            <div class="cursor-pointer group flex flex-col items-center">
                                <div class="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-125 group-hover:bg-cyan-500/40 transition-all duration-300" style="width: ${isMobile ? '32px' : '24px'}; height: ${isMobile ? '32px' : '24px'};">
                                    <svg class="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                </div>
                                <div class="mt-1 px-2 py-0.5 bg-slate-900/80 backdrop-blur border border-cyan-500/30 text-cyan-300 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                                    LIVE: ${d.data.name}
                                </div>
                            </div>
                        `;
                        el.style.pointerEvents = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => { 
                            if (navigator.vibrate) navigator.vibrate(10);
                            if (onCameraSelect) onCameraSelect(d.data.id); 
                        };
                    }
                    else if (d.type === 'weather') {
                        el.innerHTML = `<div class="text-[${size}] drop-shadow-md cursor-pointer group hover:scale-150 transition-transform" style="font-size: ${size};">
                            ${getWeatherIcon(d.data.condition)}
                            <div class="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 border border-slate-700 bg-slate-800 text-white text-[10px] p-1.5 rounded whitespace-nowrap z-50 shadow-lg">
                                ${d.data.name}: ${d.data.temp?.toFixed(1)}°C
                            </div>
                        </div>`;
                        el.style.pointerEvents = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => { 
                            if (navigator.vibrate) navigator.vibrate(10);
                            if (onEventSelect) onEventSelect('weather', d.data); 
                        };
                    }
                    else if (d.type === 'volcano') {
                        el.innerHTML = `<div class="text-[${size}] animate-pulse drop-shadow-[0_0_5px_rgba(239,68,68,0.8)] cursor-pointer hover:scale-150 transition-transform group" style="font-size: ${size};">
                            🌋
                            <div class="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 border border-orange-700 bg-slate-800 text-orange-300 text-[10px] p-1.5 rounded whitespace-nowrap z-50 shadow-lg">
                                ${d.data.name} (${d.data.status})
                            </div>
                        </div>`;
                        el.style.pointerEvents = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => { 
                            if (navigator.vibrate) navigator.vibrate(10);
                            if (onEventSelect) onEventSelect('volcano', d.data); 
                        };
                    }
                    else if (d.type === 'radiation') {
                        const isAlert = d.data.alert;
                        el.innerHTML = `<div class="text-[12px] font-mono font-bold drop-shadow-md ${isAlert ? 'text-fuchsia-400 animate-bounce' : 'text-fuchsia-300/40'} cursor-pointer hover:scale-150 transition-transform group" style="font-size: ${isMobile ? '14px' : '12px'};">
                            ☢️
                            ${isAlert ? `<span class="bg-fuchsia-900/50 px-1 rounded ml-1">${d.data.cpm}</span>` : ''}
                            <div class="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 border border-fuchsia-700 bg-slate-800 text-fuchsia-300 text-[10px] p-1.5 rounded whitespace-nowrap z-50 shadow-lg">
                                ${d.data.cpm} CPM ${isAlert ? '⚠️ ELEVATED' : '✓ Normal'}
                            </div>
                        </div>`;
                        el.style.pointerEvents = 'auto';
                        el.style.cursor = 'pointer';
                        el.onclick = () => { 
                            if (navigator.vibrate) navigator.vibrate(10);
                            if (onEventSelect) onEventSelect('radiation', d.data); 
                        };
                    }
                    return el;
                }}
                
                // Mobile-friendly tooltip styling
                tooltipContent={d => {
                    if (d.type === 'ring' || d.type === 'arc' || d.type === 'point') {
                        return '';
                    }
                    return d;
                }}
            />
        </div>
    );
};

export default GlobeComponent;
