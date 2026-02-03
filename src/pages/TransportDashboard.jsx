import React, { useState, useEffect } from 'react';
import { useTransport } from '../context/TransportContext';
import { useNavigate } from 'react-router-dom';
import LaunchMap from '../components/LaunchMap';

const TransportDashboard = () => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMission, setSelectedMission] = useState(null);

    // Usar estado global
    const { acceptedMissions, toggleMission } = useTransport();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLaunches = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v4/launches/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: { upcoming: true },
                        options: {
                            limit: 8,
                            sort: { date_utc: 'asc' },
                            populate: [
                                {
                                    path: 'launchpad',
                                    select: 'name full_name locality region latitude longitude'
                                },
                                {
                                    path: 'rocket',
                                    select: 'name'
                                }
                            ]
                        }
                    })
                });

                if (!response.ok) throw new Error('Error al conectar con la base de datos orbital');
                const result = await response.json();
                const data = result.docs || [];
                setLaunches(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLaunches();
    }, []);

    return (
        <main className="min-h-screen bg-white flex flex-col w-full">
            {/* Top Banner */}
            <div className="w-full h-32 bg-[#10B981] relative overflow-hidden flex flex-col justify-between px-12 pt-6 pb-0 shadow-lg select-none">
                {/* Decorative Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-white text-3xl font-black tracking-tighter italic leading-none">
                            // CONTROL DE LANZAMIENTOS SPX
                        </h1>
                        <div className="flex gap-4 mt-2">
                            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em]">Módulo: Logística Aeroespacial</span>
                            <span className="text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${error ? 'bg-red-500' : 'bg-white'}`} />
                                {loading ? 'Sincronizando...' : error ? 'Enlace fallido' : 'Enlace estable'}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/transport/manifest')}
                        className="bg-white text-[#10B981] px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2 group"
                    >
                        <span>Ver manifiesto</span>
                        <span className="bg-[#10B981] text-white px-1.5 py-0.5 text-[9px] rounded-sm group-hover:scale-110 transition-transform">
                            {acceptedMissions.length}
                        </span>
                    </button>
                </div>

                {/* Tab */}
                <div className="relative z-20 flex">
                    <div className="bg-[#fafafa] px-10 py-3 flex items-center gap-4 border-x border-t border-gray-200 translate-y-[1px]">
                        <div className="w-3 h-3 bg-[#10B981]" />
                        <span className="text-black text-[11px] font-black uppercase tracking-[0.3em]">Registro de Misiones</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto relative bg-[#fafafa]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                    }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-64">
                            <div className="w-12 h-12 border-4 border-[#10B981] border-t-transparent rounded-full animate-spin mb-4" />
                            <span className="text-xs font-black uppercase tracking-widest text-industrial-dark opacity-50">Accediendo a la red de telemetría...</span>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 text-center max-w-md mx-auto">
                            <p className="text-red-800 font-black uppercase tracking-tighter text-sm mb-2">CRITICAL_NETWORK_ERROR</p>
                            <p className="text-red-600 text-xs">{error}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {launches.map(launch => {
                                const isSuccess = launch.success;
                                const isPending = launch.upcoming || launch.success === null;
                                const statusColor = isPending ? 'bg-gray-400' : isSuccess ? 'bg-[#10B981]' : 'bg-red-500';
                                const statusText = isPending ? 'PENDIENTE' : isSuccess ? '✓ ÉXITO' : '✕ FALLIDO';
                                const statusBg = isPending ? 'bg-gray-100 text-gray-500' : isSuccess ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-red-50 text-red-500';
                                const patchUrl = launch.links?.patch?.small;
                                // Verificar si la misión está en la lista de aceptadas (por ID)
                                const isAccepted = acceptedMissions.some(m => m.id === launch.id);

                                return (
                                    <div
                                        key={launch.id}
                                        onClick={() => setSelectedMission(launch)}
                                        className={`bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col cursor-pointer relative ${isAccepted ? 'border-[#10B981] ring-1 ring-[#10B981]' : 'border-gray-200'}`}
                                    >
                                        {/* Status Tag Overlay for Accepted Missions */}
                                        {isAccepted && (
                                            <div className="absolute top-0 right-0 z-10 bg-[#10B981] text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 shadow-sm">
                                                Contrato activo
                                            </div>
                                        )}

                                        {/* Mission Status Top Bar */}
                                        <div className={`h-1 w-full ${statusColor}`} />

                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                                                        Vuelo #{launch.flight_number}
                                                    </span>
                                                    <h3 className="text-sm font-black text-industrial-dark uppercase tracking-tight leading-tight group-hover:text-[#10B981] transition-colors">
                                                        {launch.name}
                                                    </h3>
                                                </div>
                                                {patchUrl ? (
                                                    <img
                                                        src={patchUrl}
                                                        alt={launch.name}
                                                        className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg grayscale opacity-50">🚀</div>
                                                )}
                                            </div>

                                            <div className="flex flex-col gap-3 flex-1">
                                                <div className="bg-gray-50 p-3 border-l-2 border-gray-200 font-mono">
                                                    <p className="text-[9px] text-gray-500 uppercase font-black mb-1">Fecha de lanzamiento</p>
                                                    <p className="text-[11px] text-industrial-dark">
                                                        {new Date(launch.date_utc).toLocaleDateString('es-ES', {
                                                            year: 'numeric', month: 'short', day: 'numeric',
                                                            hour: '2-digit', minute: '2-digit'
                                                        })}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter ${statusBg}`}>
                                                        {statusText}
                                                    </span>
                                                    {launch.upcoming && (
                                                        <span className="px-2 py-0.5 bg-blue-50 text-blue-500 text-[9px] font-black uppercase tracking-tighter">
                                                            PRÓXIMA
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Bar */}
                                        <div className="bg-gray-50 p-3 border-t border-gray-100 flex justify-between items-center h-[45px]">
                                            <div className="flex -space-x-1">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                                            </div>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-industrial-dark transition-colors">
                                                Ver detalles →
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Mission Detail Modal */}
                {selectedMission && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 relative">
                            {/* Modal Header */}
                            <div className={`h-2 w-full ${selectedMission.success || selectedMission.upcoming ? 'bg-[#10B981]' : 'bg-red-500'}`} />

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-industrial-dark text-white px-2 py-1 text-[10px] font-black uppercase tracking-widest">
                                                Contrato #{selectedMission.id.slice(0, 8).toUpperCase()}
                                            </span>
                                            {selectedMission.upcoming && (
                                                <span className="bg-blue-100 text-blue-600 px-2 py-1 text-[10px] font-black uppercase tracking-widest">
                                                    Abierto a ofertas
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-3xl font-black text-industrial-dark uppercase tracking-tighter mb-2">
                                            {selectedMission.name}
                                        </h2>
                                        <p className="font-mono text-gray-400 text-xs tracking-widest uppercase">
                                            Vuelo #{selectedMission.flight_number} // {new Date(selectedMission.date_utc).toLocaleDateString()}
                                        </p>
                                    </div>
                                    {selectedMission.links?.patch?.small && (
                                        <img
                                            src={selectedMission.links.patch.small}
                                            alt="Emblema de misión"
                                            className="w-24 h-24 object-contain drop-shadow-md"
                                        />
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
                                                Especificaciones de carga
                                            </h3>
                                            <div className="bg-white border border-gray-200 p-4 space-y-2">
                                                <div className="flex justify-between items-start gap-4">
                                                    <span className="text-xs text-gray-500 uppercase font-black">Cohete</span>
                                                    <span className="text-xs font-mono text-industrial-dark text-right">{selectedMission.rocket?.name || "N/D"}</span>
                                                </div>
                                                <div className="flex justify-between items-start gap-4">
                                                    <span className="text-xs text-gray-500 uppercase font-black">Plataforma</span>
                                                    <div className="text-right">
                                                        <span className="text-xs font-mono text-industrial-dark block">{selectedMission.launchpad?.name || "N/D"}</span>
                                                        <span className="text-[10px] text-gray-400 uppercase">{selectedMission.launchpad?.locality}, {selectedMission.launchpad?.region}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Launch Map */}
                                        {selectedMission.launchpad?.latitude && (
                                            <div>
                                                <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
                                                    Ubicación geoespacial
                                                </h3>
                                                <LaunchMap
                                                    lat={selectedMission.launchpad.latitude}
                                                    lon={selectedMission.launchpad.longitude}
                                                    locationName={selectedMission.launchpad.name}
                                                />
                                            </div>
                                        )}
                                    </div>



                                    <div className="space-y-6 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
                                                Valor del contrato
                                            </h3>
                                            <div className="bg-[#1a1a1a] p-6 text-center">
                                                <span className="block text-gray-400 text-[10px] uppercase tracking-widest mb-1">Eurodólares estimados</span>
                                                <span className="text-3xl font-black text-[#10B981] tracking-tighter">
                                                    {Math.min(99999, 10000 + Math.floor(selectedMission.flight_number * 350)).toLocaleString('es-ES', { maximumFractionDigits: 0 })} €$
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <a
                                                href={selectedMission.links?.article || selectedMission.links?.wikipedia}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full py-3 flex items-center justify-center gap-2 border text-xs font-black uppercase tracking-widest transition-colors ${!selectedMission.links?.article && !selectedMission.links?.wikipedia ? 'opacity-50 cursor-not-allowed border-gray-200 text-gray-300' : 'border-gray-200 text-industrial-dark hover:bg-gray-50'}`}
                                            >
                                                <span>Ver especificaciones técnicas</span>
                                                <span>↗</span>
                                            </a>

                                            {acceptedMissions.some(m => m.id === selectedMission.id) ? (
                                                <button
                                                    onClick={() => {
                                                        toggleMission(selectedMission);
                                                        setSelectedMission(null);
                                                    }}
                                                    className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-sm font-black uppercase tracking-[0.2em] transition-colors"
                                                >
                                                    ANULAR CONTRATO
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        toggleMission(selectedMission);
                                                        setSelectedMission(null);
                                                    }}
                                                    className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-4 text-sm font-black uppercase tracking-[0.2em] transition-colors"
                                                >
                                                    ACEPTAR CONTRATO
                                                </button>
                                            )}

                                            <button
                                                onClick={() => setSelectedMission(null)}
                                                className="w-full py-3 text-gray-400 hover:text-industrial-dark text-[10px] font-black uppercase tracking-widest transition-colors"
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default TransportDashboard;
