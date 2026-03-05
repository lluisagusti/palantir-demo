import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import { getInitialState, startSimulation } from './data/mockEngine';

function App() {
    const [data, setData] = useState(getInitialState);

    useEffect(() => {
        const cleanup = startSimulation(setData);
        return cleanup;
    }, []);

    return (
        <div className="w-screen h-screen bg-slate-950 text-slate-100 flex overflow-hidden">
            <Dashboard
                isConnected={true}
                threats={data.threats}
                markets={data.markets}
                earthquakes={data.earthquakes}
                flights={data.flights}
                weather={data.weather}
                lightning={data.lightning}
                ships={data.ships}
                volcanoes={data.volcanoes}
                radiation={data.radiation}
            />
        </div>
    );
}

export default App;
