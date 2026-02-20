import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-industrial-dark flex flex-col items-center justify-center p-8 py-12 relative overflow-y-auto">
            {/* Background Pattern - Diagonal stripes */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        #FFC500,
                        #FFC500 10px,
                        transparent 10px,
                        transparent 20px
                    )`
                }}
            />

            {/* Scanlines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(255,197,0,0.5) 50%)`,
                    backgroundSize: '100% 4px'
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl">
                {/* About Link - Move here from Navbar */}
                <div className="absolute top-0 right-0 md:right-8">
                    <Link to="/admin/about" className="group flex items-center gap-3 bg-white/5 px-4 py-2 hover:bg-white/10 transition-colors border border-white/10">
                        <div className="w-2 h-2 bg-[#FFC500] group-hover:rotate-90 transition-transform" />
                        <span className="text-[10px] text-white/60 font-black uppercase tracking-wider group-hover:text-white transition-colors">
                            Sobre Nosotros
                        </span>
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-block mb-6">
                        <div className="flex items-center gap-4 bg-[#FFC500] px-8 py-4 relative">
                            <div className="absolute inset-0 opacity-[0.1]"
                                style={{
                                    backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
                                    backgroundSize: '16px 16px'
                                }}
                            />
                            <div className="w-6 h-6 bg-industrial-dark relative z-10" />
                            <h1 className="text-5xl font-black tracking-tighter text-industrial-dark uppercase relative z-10">
                                SOONFIELD
                            </h1>
                        </div>
                    </div>
                    <p className="text-white/60 text-sm font-black uppercase tracking-[0.3em] mb-2">
                        Sistema de Gestión Logística
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                        <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">
                            Sistema Operativo v2.4.0
                        </span>
                    </div>
                </div>

                {/* Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Administrar Card */}
                    <Link to="/admin/suministros" className="group">
                        <div className="bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,197,0,0.3)] border-4 border-transparent hover:border-[#FFC500]">
                            {/* Card Header */}
                            <div className="bg-[#FFC500] p-6 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.1]"
                                    style={{
                                        backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                                        backgroundSize: '20px 20px',
                                        backgroundPosition: '0 0, 10px 10px'
                                    }}
                                />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-industrial-dark flex items-center justify-center text-2xl">
                                            📊
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black uppercase tracking-tighter text-industrial-dark">
                                                Administrar
                                            </h2>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-industrial-dark/60">
                                                Gestión de Recursos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 border-4 border-industrial-dark group-hover:rotate-90 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 bg-white">
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    Accede al panel de control para gestionar inventarios,
                                    supervisar la producción y coordinar los recursos de la empresa.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#FFC500]" />
                                        <span className="text-xs text-gray-600">Control de Suministros</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#FFC500]" />
                                        <span className="text-xs text-gray-600">Monitoreo de Producción</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#FFC500]" />
                                        <span className="text-xs text-gray-600">Información Corporativa</span>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 border-l-4 border-[#FFC500]">
                                    <p className="text-[10px] font-black uppercase tracking-wider text-industrial-dark/60 mb-1">
                                        Rol Requerido
                                    </p>
                                    <p className="text-xs text-gray-700 font-mono">
                                        Administrador / Gestor
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="bg-industrial-dark p-4 flex items-center justify-between group-hover:bg-black transition-colors">
                                <span className="text-[#FFC500] text-xs font-black uppercase tracking-[0.2em]">
                                    Acceder al Panel
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-[#FFC500] group-hover:translate-x-1 transition-transform" />
                                    <div className="w-2 h-2 bg-[#FFC500] group-hover:translate-x-2 transition-transform delay-75" />
                                    <div className="w-2 h-2 bg-[#FFC500] group-hover:translate-x-3 transition-transform delay-150" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Transportar Card */}
                    <Link to="/transport/dashboard" className="group">
                        <div className="bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)] border-4 border-transparent hover:border-[#10B981]">
                            {/* Card Header */}
                            <div className="bg-[#10B981] p-6 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.1]"
                                    style={{
                                        backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                                        backgroundSize: '20px 20px',
                                        backgroundPosition: '0 0, 10px 10px'
                                    }}
                                />
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white flex items-center justify-center text-2xl">
                                            🚚
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
                                                Transportar
                                            </h2>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/80">
                                                Logística y Envíos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 border-4 border-white group-hover:rotate-90 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-8 bg-white">
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                                    Sistema de gestión de transporte para coordinar envíos, rastrear
                                    entregas y optimizar las rutas de distribución.
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#10B981]" />
                                        <span className="text-xs text-gray-600">Gestión de Envíos</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#10B981]" />
                                        <span className="text-xs text-gray-600">Rastreo en Tiempo Real</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-[#10B981]" />
                                        <span className="text-xs text-gray-600">Optimización de Rutas</span>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 border-l-4 border-[#10B981]">
                                    <p className="text-[10px] font-black uppercase tracking-wider text-industrial-dark/60 mb-1">
                                        Rol Requerido
                                    </p>
                                    <p className="text-xs text-gray-700 font-mono">
                                        Logística / Conductor
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="bg-industrial-dark p-4 flex items-center justify-between group-hover:bg-black transition-colors">
                                <span className="text-[#10B981] text-xs font-black uppercase tracking-[0.2em]">
                                    Acceder al Sistema
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-[#10B981] group-hover:translate-x-1 transition-transform" />
                                    <div className="w-2 h-2 bg-[#10B981] group-hover:translate-x-2 transition-transform delay-75" />
                                    <div className="w-2 h-2 bg-[#10B981] group-hover:translate-x-3 transition-transform delay-150" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Footer Info */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/5 px-6 py-3 backdrop-blur-sm border border-white/10">
                        <div className="w-2 h-2 bg-[#FFC500]" />
                        <span className="text-[10px] text-white/60 font-black uppercase tracking-wider">
                            Selecciona un módulo para continuar
                        </span>
                        <div className="w-2 h-2 bg-[#10B981]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
