import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-industrial-dark flex items-center justify-center p-4 relative overflow-hidden">
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
            <div className="relative z-10 max-w-2xl w-full">
                {/* Error Code Display */}
                <div className="bg-[#FFC500] p-8 relative overflow-hidden mb-0">
                    <div className="absolute inset-0 opacity-[0.1]"
                        style={{
                            backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
                            backgroundSize: '24px 24px'
                        }}
                    />
                    <div className="relative flex items-center justify-center gap-6">
                        {/* Warning Icon */}
                        <div className="relative">
                            <div className="w-20 h-20 border-8 border-industrial-dark flex items-center justify-center">
                                <span className="text-4xl font-black text-industrial-dark">!</span>
                            </div>
                            {/* Corner decorations */}
                            <div className="absolute -top-2 -left-2 w-4 h-4 bg-industrial-dark" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-industrial-dark" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-industrial-dark" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-industrial-dark" />
                        </div>

                        {/* Error Code */}
                        <div>
                            <div className="text-8xl font-black tracking-tighter text-industrial-dark leading-none">
                                404
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-industrial-dark/60 mt-2">
                                Código de error: NO_ENCONTRADO
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Section */}
                <div className="bg-white p-8 shadow-2xl">
                    <div className="border-l-4 border-industrial-dark pl-6 mb-8">
                        <h1 className="text-3xl font-black uppercase tracking-tight text-industrial-dark mb-3">
                            // RUTA NO ENCONTRADA
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            La ruta especificada no existe en la base de datos.
                        </p>
                    </div>

                    {/* Technical Details */}
                    <div className="bg-gray-50 p-4 mb-6 font-mono text-xs border border-gray-200">
                        <div className="flex items-start gap-2 mb-2">
                            <span className="text-industrial-dark/60 font-black">ESTADO:</span>
                            <span className="text-red-600 font-bold">404 NO ENCONTRADO</span>
                        </div>
                        <div className="flex items-start gap-2 mb-2">
                            <span className="text-industrial-dark/60 font-black">RUTA:</span>
                            <span className="text-industrial-dark">{window.location.pathname}</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-industrial-dark/60 font-black">FECHA/HORA:</span>
                            <span className="text-industrial-dark">{new Date().toISOString()}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <Link
                        to="/"
                        className="w-full bg-industrial-dark text-[#FFC500] py-4 px-6 font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-300 text-center relative overflow-hidden group block"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <div className="w-3 h-3 bg-[#FFC500]" />
                            Volver al Inicio
                        </span>
                        <div className="absolute inset-0 bg-[#FFC500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        <span className="absolute inset-0 flex items-center justify-center text-industrial-dark font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                            <div className="w-3 h-3 bg-industrial-dark" />
                            Volver al Inicio
                        </span>
                    </Link>
                </div>

                {/* Bottom Accent */}
                <div className="h-2 bg-[#FFC500]" />
            </div>
        </div>
    );
};

export default NotFound;
