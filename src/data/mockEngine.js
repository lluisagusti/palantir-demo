// Mock Data Engine — replaces socket.io with client-side simulated data
// All data is generated and updated on intervals for a stunning live demo

const REGIONS = ['Middle East', 'Eastern Europe', 'East Asia', 'North America', 'South America', 'Sub-Saharan Africa', 'Central Asia', 'South Asia', 'Southeast Asia', 'Western Europe'];
const HEADLINES = [
    'Border skirmish reported in flashpoint region',
    'Diplomatic talks break down between rival nations',
    'Ransomware group threatens critical energy pipeline',
    'Naval exercises escalate tensions in disputed waters',
    'Cyber attack targets government infrastructure',
    'Trade sanctions imposed on strategic mineral exports',
    'Refugee crisis intensifies along contested border',
    'Military convoy spotted near demilitarized zone',
    'Satellite imagery reveals new missile installations',
    'Intelligence agencies report increased chatter',
    'Underground nuclear test suspected by seismologists',
    'Proxy forces mobilize in resource-rich corridor',
    'Emergency UN Security Council session convened',
    'Oil tanker seized in contested shipping lane',
    'Coup attempt reported in West African nation',
    'Drone strike targets suspected weapons facility',
    'Critical undersea cable damaged near chokepoint',
    'Hypersonic missile test detected by early warning',
    'Rare earth mining dispute threatens supply chain',
    'Biological agent alert at international port'
];

const CALLSIGNS = ['UAL237', 'DAL851', 'BAW119', 'AFR347', 'DLH488', 'QFA12', 'SIA321', 'CPA841', 'AAL73', 'THY19', 'KLM607', 'ANA8', 'CCA981', 'UAE215', 'SWR163'];
const COUNTRIES = ['United States', 'United Kingdom', 'France', 'Germany', 'Japan', 'Australia', 'Singapore', 'China', 'UAE', 'Turkey', 'Netherlands', 'India', 'Canada', 'Brazil', 'South Korea'];
const SHIP_TYPES = ['Container Ship', 'Oil Tanker', 'Bulk Carrier', 'LNG Carrier', 'Cruise Ship', 'Fishing Vessel', 'Naval Frigate', 'Cargo Ship'];
const CONDITIONS = ['Clear', 'Clouds', 'Rain', 'Snow', 'Thunderstorm'];

const CITIES = [
    { id: '1', name: 'London', lat: 51.5, lng: -0.1 },
    { id: '2', name: 'New York', lat: 40.7, lng: -74.0 },
    { id: '3', name: 'Tokyo', lat: 35.6, lng: 139.6 },
    { id: '4', name: 'Moscow', lat: 55.7, lng: 37.6 },
    { id: '5', name: 'Beijing', lat: 39.9, lng: 116.4 },
    { id: '6', name: 'Mumbai', lat: 19.0, lng: 72.8 },
    { id: '7', name: 'São Paulo', lat: -23.5, lng: -46.6 },
    { id: '8', name: 'Cairo', lat: 30.0, lng: 31.2 },
    { id: '9', name: 'Sydney', lat: -33.8, lng: 151.2 },
    { id: '10', name: 'Singapore', lat: 1.3, lng: 103.8 },
    { id: '11', name: 'Dubai', lat: 25.2, lng: 55.2 },
    { id: '12', name: 'Berlin', lat: 52.5, lng: 13.4 },
    { id: '13', name: 'Paris', lat: 48.8, lng: 2.3 },
    { id: '14', name: 'Lagos', lat: 6.5, lng: 3.3 },
    { id: '15', name: 'Seoul', lat: 37.5, lng: 127.0 },
    { id: '16', name: 'Istanbul', lat: 41.0, lng: 29.0 },
    { id: '17', name: 'Mexico City', lat: 19.4, lng: -99.1 },
    { id: '18', name: 'Johannesburg', lat: -26.2, lng: 28.0 },
    { id: '19', name: 'Buenos Aires', lat: -34.6, lng: -58.4 },
];

const VOLCANOES = [
    { id: 'v1', name: 'Mount Etna', lat: 37.7, lng: 15.0, region: 'Italy', vei: 2, status: 'Erupting' },
    { id: 'v2', name: 'Kilauea', lat: 19.4, lng: -155.2, region: 'Hawaii', vei: 1, status: 'Active' },
    { id: 'v3', name: 'Mount Fuji', lat: 35.3, lng: 138.7, region: 'Japan', vei: 0, status: 'Dormant' },
    { id: 'v4', name: 'Eyjafjallajökull', lat: 63.6, lng: -19.6, region: 'Iceland', vei: 1, status: 'Active' },
    { id: 'v5', name: 'Popocatépetl', lat: 19.0, lng: -98.6, region: 'Mexico', vei: 2, status: 'Erupting' },
    { id: 'v6', name: 'Sakurajima', lat: 31.5, lng: 130.6, region: 'Japan', vei: 1, status: 'Active' },
    { id: 'v7', name: 'Nyiragongo', lat: -1.5, lng: 29.2, region: 'DR Congo', vei: 2, status: 'Erupting' },
    { id: 'v8', name: 'Krakatoa', lat: -6.1, lng: 105.4, region: 'Indonesia', vei: 1, status: 'Active' },
];

const RADIATION_STATIONS = [
    { id: 'r1', name: 'Chernobyl Exclusion Zone', lat: 51.3, lng: 30.0, cpm: 85, alert: true },
    { id: 'r2', name: 'Fukushima Prefecture', lat: 37.3, lng: 141.0, cpm: 42, alert: false },
    { id: 'r3', name: 'Sellafield, UK', lat: 54.4, lng: -3.4, cpm: 18, alert: false },
    { id: 'r4', name: 'La Hague, France', lat: 49.6, lng: -1.8, cpm: 12, alert: false },
    { id: 'r5', name: 'Hanford Site, USA', lat: 46.5, lng: -119.5, cpm: 22, alert: false },
    { id: 'r6', name: 'Zaporizhzhia, Ukraine', lat: 47.5, lng: 34.5, cpm: 68, alert: true },
    { id: 'r7', name: 'Mayak, Russia', lat: 55.7, lng: 60.8, cpm: 55, alert: true },
    { id: 'r8', name: 'Semipalatinsk, Kazakhstan', lat: 50.4, lng: 78.4, cpm: 38, alert: false },
];

const TICKERS = [
    { symbol: 'LMT', name: 'Lockheed Martin', price: 430.36 },
    { symbol: 'RTX', name: 'RTX Corp', price: 86.78 },
    { symbol: 'NOC', name: 'Northrop Grumman', price: 477.44 },
    { symbol: 'CL', name: 'Crude Oil WTI', price: 77.40 },
    { symbol: 'BZ', name: 'Brent Crude', price: 79.62 },
];

// --- Generators ---

const randRange = (min, max) => min + Math.random() * (max - min);

const generateThreats = (count = 8) => {
    const threats = [];
    for (let i = 0; i < count; i++) {
        const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
        threats.push({
            id: `t_${Date.now()}_${i}`,
            lat: randRange(-60, 65),
            lng: randRange(-170, 170),
            weight: Math.floor(randRange(1, 6)),
            region,
            headline: HEADLINES[Math.floor(Math.random() * HEADLINES.length)],
            timestamp: Date.now() - Math.floor(Math.random() * 3600000)
        });
    }
    return threats;
};

const generateEarthquakes = (count = 40) => Array.from({ length: count }).map((_, i) => ({
    id: `eq_${i}`,
    lat: randRange(-70, 70),
    lng: randRange(-180, 180),
    mag: 2.5 + Math.random() * 5,
    title: ['Pacific Ring of Fire Event', 'Continental Plate Shift', 'Subduction Zone Activity', 'Mid-Ocean Ridge Event', 'Intraplate Seismic Activity'][Math.floor(Math.random() * 5)],
    time: new Date(Date.now() - Math.floor(Math.random() * 7200000)).toISOString()
}));

const generateFlights = (count = 200) => Array.from({ length: count }).map((_, i) => ({
    id: `fl_${i}`,
    lat: randRange(-60, 70),
    lng: randRange(-180, 180),
    alt: randRange(5000, 12000),
    velocity: randRange(180, 260),
    heading: randRange(0, 360),
    callsign: CALLSIGNS[Math.floor(Math.random() * CALLSIGNS.length)] + Math.floor(Math.random() * 99),
    country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
}));

const generateShips = (count = 60) => Array.from({ length: count }).map((_, i) => ({
    id: `sh_${i}`,
    lat: randRange(-50, 55),
    lng: randRange(-180, 180),
    speed: randRange(2, 22),
    heading: randRange(0, 360),
    mmsi: `${200000000 + Math.floor(Math.random() * 600000000)}`,
    type: SHIP_TYPES[Math.floor(Math.random() * SHIP_TYPES.length)]
}));

const generateWeather = () => CITIES.map(c => ({
    ...c,
    temp: randRange(-15, 42),
    condition: CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)],
    description: 'Live Weather',
    wind: randRange(0, 25)
}));

const generateLightning = (weather) => {
    const stormy = weather.filter(w => ['Rain', 'Thunderstorm', 'Clouds'].includes(w.condition));
    const strikes = [];
    for (let i = 0; i < 25; i++) {
        const base = stormy.length > 0 ? stormy[Math.floor(Math.random() * stormy.length)] : { lat: randRange(-40, 40), lng: randRange(-180, 180) };
        strikes.push({
            id: `lig_${Date.now()}_${i}`,
            lat: base.lat + randRange(-5, 5),
            lng: base.lng + randRange(-5, 5),
            time: new Date().toISOString()
        });
    }
    return strikes;
};

const generateMarkets = () => {
    const markets = {};
    for (const t of TICKERS) {
        const change = t.price * (Math.random() * 0.02 - 0.01);
        markets[t.symbol] = {
            symbol: t.symbol,
            name: t.name,
            price: t.price + change,
            change: change,
            changePercent: (change / t.price) * 100
        };
    }
    return markets;
};

// --- Public API ---

export const getInitialState = () => {
    const weather = generateWeather();
    return {
        threats: generateThreats(8),
        earthquakes: generateEarthquakes(40),
        flights: generateFlights(200),
        ships: generateShips(60),
        weather,
        lightning: generateLightning(weather),
        volcanoes: VOLCANOES,
        radiation: RADIATION_STATIONS.map(r => ({ ...r, cpm: r.cpm + Math.floor(randRange(-5, 5)) })),
        markets: generateMarkets()
    };
};

export const startSimulation = (setState) => {
    // Add new threat every 8s
    const threatInterval = setInterval(() => {
        const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
        const newThreat = {
            id: `t_${Date.now()}`,
            lat: randRange(-60, 65),
            lng: randRange(-170, 170),
            weight: Math.floor(randRange(1, 6)),
            region,
            headline: HEADLINES[Math.floor(Math.random() * HEADLINES.length)],
            timestamp: Date.now()
        };
        setState(prev => ({ ...prev, threats: [newThreat, ...prev.threats].slice(0, 50) }));
    }, 8000);

    // Update earthquakes every 15s
    const eqInterval = setInterval(() => {
        setState(prev => {
            const eqs = [...prev.earthquakes];
            const idx = Math.floor(Math.random() * eqs.length);
            eqs[idx] = { ...eqs[idx], mag: 2.5 + Math.random() * 5, time: new Date().toISOString() };
            return { ...prev, earthquakes: eqs };
        });
    }, 15000);

    // Move flights every 2s
    const flightInterval = setInterval(() => {
        setState(prev => ({
            ...prev,
            flights: prev.flights.map(f => ({
                ...f,
                lat: f.lat + randRange(-0.5, 0.5),
                lng: f.lng + randRange(-0.5, 0.5),
                alt: Math.max(3000, f.alt + randRange(-200, 200)),
                heading: (f.heading + randRange(-5, 5) + 360) % 360
            }))
        }));
    }, 2000);

    // Move ships every 5s
    const shipInterval = setInterval(() => {
        setState(prev => ({
            ...prev,
            ships: prev.ships.map(s => ({
                ...s,
                lat: s.lat + randRange(-0.1, 0.1),
                lng: s.lng + randRange(-0.1, 0.1),
                speed: Math.max(1, s.speed + randRange(-1, 1))
            }))
        }));
    }, 5000);

    // Update weather every 30s
    const weatherInterval = setInterval(() => {
        setState(prev => {
            const weather = prev.weather.map(w => ({
                ...w,
                temp: w.temp + randRange(-1, 1),
                condition: Math.random() > 0.93 ? CONDITIONS[Math.floor(Math.random() * CONDITIONS.length)] : w.condition
            }));
            return { ...prev, weather, lightning: generateLightning(weather) };
        });
    }, 30000);

    // Lightning flashes every 8s
    const lightningInterval = setInterval(() => {
        setState(prev => ({ ...prev, lightning: generateLightning(prev.weather) }));
    }, 8000);

    // Markets every 3s
    const marketInterval = setInterval(() => {
        setState(prev => {
            const markets = { ...prev.markets };
            for (const key of Object.keys(markets)) {
                const m = markets[key];
                const change = m.price * (Math.random() * 0.004 - 0.002);
                markets[key] = { ...m, price: m.price + change, change, changePercent: (change / m.price) * 100 };
            }
            return { ...prev, markets };
        });
    }, 3000);

    // Radiation wobble every 20s
    const radInterval = setInterval(() => {
        setState(prev => ({
            ...prev,
            radiation: prev.radiation.map(r => ({
                ...r,
                cpm: Math.max(5, r.cpm + Math.floor(randRange(-3, 3))),
                alert: r.cpm > 50
            }))
        }));
    }, 20000);

    return () => {
        clearInterval(threatInterval);
        clearInterval(eqInterval);
        clearInterval(flightInterval);
        clearInterval(shipInterval);
        clearInterval(weatherInterval);
        clearInterval(lightningInterval);
        clearInterval(marketInterval);
        clearInterval(radInterval);
    };
};
