import React from 'react';
import { useTransport } from '../context/TransportContext';
import { useNavigate } from 'react-router-dom';

const MissionManifest = () => {
    const { acceptedMissions, toggleMission, clearManifest } = useTransport();
    const navigate = useNavigate();

    const valorEurodolares = (flightNumber) => Math.min(99999, 10000 + Math.floor(flightNumber * 350));
    const totalCredits = acceptedMissions.reduce((acc, mission) => acc + valorEurodolares(mission.flight_number), 0);

    return (
        <main className="min-h-screen bg-white flex flex-col w-full">
            {/* Top Banner */}
            <div className="w-full h-32 bg-[#10B981] relative overflow-hidden flex flex-col justify-between px-12 pt-6 pb-0 shadow-lg select-none">
                <div className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(rgba(0,0,0,0.12) 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-white text-3xl font-black tracking-tighter italic leading-none">
                            // MANIFIESTO_CARGA
                        </h1>
                        <div className="flex gap-4 mt-2">
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Contratos: {acceptedMissions.length}</span>
                            <span className="text-[10px] font-bold text-[#10B981] uppercase tracking-[0.2em]">Valor total: {totalCredits.toLocaleString('es-ES', { maximumFractionDigits: 0 })} €$</span>
                        </div>
                    </div>
                </div>

                {/* Tab */}
                <div className="relative z-20 flex">
                    <div className="bg-[#fafafa] px-10 py-3 flex items-center gap-4 border-x border-t border-gray-200 translate-y-[1px]">
                        <div className="w-3 h-3 bg-[#10B981]" />
                        <span className="text-black text-[11px] font-black uppercase tracking-[0.3em]">Registro de contratos activos</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto relative bg-[#fafafa]">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 50h100M50 0v100' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '100px 100px'
                    }}
                />

                <div className="relative z-10 w-full max-w-5xl mx-auto">
                    {acceptedMissions.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-gray-300 bg-white/50">
                            <span className="text-4xl mb-4 grayscale opacity-30">📋</span>
                            <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest mb-2">Manifiesto Vacío</h3>
                            <button
                                onClick={() => navigate('/transport/dashboard')}
                                className="mt-4 px-6 py-2 bg-industrial-dark text-white text-xs font-black uppercase tracking-widest hover:bg-[#10B981] transition-colors"
                            >
                                Buscar Contratos
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => navigate('/transport/dashboard')}
                                    className="px-6 py-2 border border-gray-300 bg-white text-industrial-dark text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-colors"
                                >
                                    + Añadir Contratos
                                </button>
                            </div>

                            <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-[#10B981] text-white">
                                        <tr>
                                            <th className="p-4 text-[10px] font-black uppercase tracking-widest">Contrato ID</th>
                                            <th className="p-4 text-[10px] font-black uppercase tracking-widest">Misión</th>
                                            <th className="p-4 text-[10px] font-black uppercase tracking-widest">Fecha</th>
                                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-right">Valor (€$)</th>
                                            <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {acceptedMissions.map((mission) => (
                                            <tr key={mission.id} className="hover:bg-gray-50 transition-colors group">
                                                <td className="p-4 font-mono text-xs text-gray-500">#{mission.id.slice(0, 8).toUpperCase()}</td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        {mission.links?.patch?.small && (
                                                            <img src={mission.links.patch.small} alt="" className="w-8 h-8 object-contain" />
                                                        )}
                                                        <span className="font-bold text-sm text-industrial-dark uppercase tracking-tight">{mission.name}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-xs font-mono text-gray-500">
                                                    {new Date(mission.date_utc).toLocaleDateString()}
                                                </td>
                                                <td className="p-4 text-xs font-mono font-bold text-right text-[#10B981]">
                                                    {valorEurodolares(mission.flight_number).toLocaleString('es-ES', { maximumFractionDigits: 0 })}
                                                </td>
                                                <td className="p-4 text-center">
                                                    <button
                                                        onClick={() => toggleMission(mission)}
                                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                                        title="Cancelar Contrato"
                                                    >
                                                        ✕
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="bg-gray-50">
                                        <tr>
                                            <td colSpan="3" className="p-4 text-right text-[10px] font-black uppercase tracking-widest text-gray-500">Total Estimado</td>
                                            <td className="p-4 text-right font-mono font-black text-lg text-industrial-dark">{totalCredits.toLocaleString('es-ES', { maximumFractionDigits: 0 })} €$</td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={clearManifest}
                                    className="px-6 py-3 bg-[#10B981] text-white text-xs font-black uppercase tracking-widest hover:bg-[#059669] transition-colors shadow-lg shadow-green-500/20"
                                >
                                    Confirmar Despegue
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default MissionManifest;
