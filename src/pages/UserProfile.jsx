import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <main className="min-h-screen bg-white flex flex-col w-full">
            {/* Top Banner */}
            <div className="w-full h-32 bg-[#1a1a1a] relative overflow-hidden flex flex-col justify-between px-12 pt-6 pb-0 shadow-lg select-none">
                {/* Decorative Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#fff 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-white text-3xl font-black tracking-tighter italic leading-none">
                            // PERFIL_USUARIO
                        </h1>
                        <div className="flex gap-4 mt-2">
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">ID: {user?.email?.split('@')[0].toUpperCase()}_TERMINAL</span>
                            <span className="text-[10px] font-bold text-highlight uppercase tracking-[0.2em] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse" />
                                Credenciales Activas
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tab */}
                <div className="relative z-20 flex">
                    <div className="bg-[#fafafa] px-10 py-3 flex items-center gap-4 border-x border-t border-gray-200 translate-y-[1px]">
                        <div className="w-3 h-3 bg-highlight" />
                        <span className="text-black text-[11px] font-black uppercase tracking-[0.3em]">Información de Cuenta</span>
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

                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <div className="bg-white border border-gray-200 shadow-sm p-8">
                        <div className="flex items-center gap-8 mb-12 border-b border-gray-100 pb-8">
                            <div className="w-24 h-24 bg-[#1a1a1a] rounded-none flex items-center justify-center text-5xl border-4 border-highlight">
                                👨‍💻
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-industrial-dark uppercase tracking-tighter">
                                    {user?.name || 'Usuario del Sistema'}
                                </h2>
                                <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                                    {user?.email}
                                </p>
                                <div className="mt-2 flex gap-2">
                                    <span className="bg-highlight/10 text-highlight text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter border border-highlight/20">
                                        Acceso de Nivel 4
                                    </span>
                                    <span className="bg-gray-100 text-gray-400 text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter border border-gray-200">
                                        Operador de Logística
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Estado del Sistema</label>
                                    <div className="bg-gray-50 p-4 border border-gray-200 h-24 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-xs font-black uppercase text-industrial-dark">Conectado</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-mono tracking-tighter">Último acceso: {new Date().toLocaleTimeString()}</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Módulos Asignados</label>
                                    <div className="bg-gray-50 p-4 border border-gray-200 space-y-2">
                                        <div className="flex justify-between items-center bg-white p-2 border border-gray-100">
                                            <span className="text-[10px] font-black uppercase">Administración</span>
                                            <span className="text-[9px] text-[#FFC500] font-bold tracking-widest">ENABLED</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white p-2 border border-gray-100">
                                            <span className="text-[10px] font-black uppercase">Transporte</span>
                                            <span className="text-[9px] text-[#10B981] font-bold tracking-widest">ENABLED</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-industrial-dark p-6 text-white relative overflow-hidden">
                                    {/* Decorative */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-highlight/10 translate-x-10 -translate-y-10 rotate-45"></div>

                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-highlight mb-4 leading-none">Acciones de Cuenta</h3>
                                    <div className="space-y-3">
                                        <button className="w-full bg-transparent border border-white/20 hover:border-highlight hover:text-highlight text-[10px] font-black uppercase tracking-widest py-3 transition-colors text-left px-4 flex justify-between items-center group">
                                            Cambiar Contraseña
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </button>
                                        <button className="w-full bg-transparent border border-white/20 hover:border-highlight hover:text-highlight text-[10px] font-black uppercase tracking-widest py-3 transition-colors text-left px-4 flex justify-between items-center group">
                                            Configuración de Notificaciones
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </button>
                                        <button className="w-full bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white text-[10px] font-black uppercase tracking-widest py-3 transition-all text-left px-4 flex justify-between items-center group text-red-500">
                                            Eliminar Perfil
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">⚠</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-[9px] text-gray-400 font-mono text-center tracking-[0.3em] uppercase">
                                SOONFIELD_SYSTEMS v2.4.0 // SECURE_SESSION_ACTIVE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserProfile;
