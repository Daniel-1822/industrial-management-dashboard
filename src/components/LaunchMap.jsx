import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los iconos de Leaflet en React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Componente para actualizar la vista del mapa cuando cambien las coordenadas
const MapUpdater = ({ lat, lon }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lon], map.getZoom());
    }, [lat, lon, map]);
    return null;
};

const LaunchMap = ({ lat, lon, locationName }) => {
    // Coordenadas por defecto (Cabo Cañaveral) si no hay datos
    const position = [lat || 28.5721, lon || -80.648];

    return (
        <div className="h-64 w-full rounded-lg overflow-hidden border-2 border-industrial-dark/10 relative z-0">
            <MapContainer
                center={position}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                {/* Capa de mapa estilo oscuro/técnico usando CartoDB Dark Matter */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div className="font-sans text-xs">
                            <strong>{locationName}</strong> <br />
                            Lat: {lat?.toFixed(4)}, Lon: {lon?.toFixed(4)}
                        </div>
                    </Popup>
                </Marker>
                <MapUpdater lat={position[0]} lon={position[1]} />
            </MapContainer>

            {/* Overlay estilo HUD */}
            <div className="absolute top-2 right-2 z-[400] bg-black/80 text-[#10B981] text-[9px] font-mono px-2 py-1 pointer-events-none border border-[#10B981]/30">
                LIVE SAT FEED_
            </div>
        </div>
    );
};

export default LaunchMap;
