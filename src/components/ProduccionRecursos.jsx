import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const MAQUINARIA_PRODUCCION = [
    {
        id: 1,
        nombre: 'Horno de Fundición',
        emoji: '🔥',
        descripcion: 'Refinado de metales de alta pureza.'
    },
    {
        id: 2,
        nombre: 'Ensambladora Robótica',
        emoji: '🤖',
        descripcion: 'Montaje de microcomponentes de precisión.'
    },
    {
        id: 3,
        nombre: 'Extractor de Mineral',
        emoji: '🏗️',
        descripcion: 'Minería automatizada en capas profundas.'
    },
    {
        id: 4,
        nombre: 'Laboratorio Químico',
        emoji: '🧪',
        descripcion: 'Síntesis de materiales superconductores.'
    },
    {
        id: 5,
        nombre: 'Impresora 3D Industrial',
        emoji: '🖨️',
        descripcion: 'Prototipado rápido de piezas estructurales.'
    },
    {
        id: 6,
        nombre: 'Generador Nucelar',
        emoji: '⚛️',
        descripcion: 'Fuente de energía para procesos de alta temperatura.'
    }
];

function CardMaquinaria({ maquina }) {
    const [encendido, setEncendido] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        <div
            className="relative group flex flex-col w-[170px] aspect-[4/5] bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => setEncendido(!encendido)}
        >
            {/* Status Tag - Technical Style (Separado del borde) */}
            <div className={`absolute top-2 left-2 z-20 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-tighter flex items-center gap-2 shadow-sm ${encendido ? 'bg-[#10B981] text-white' : 'bg-[#333] text-white'
                }`}>
                <span className="opacity-70">STATUS</span>
                <span className="tabular-nums">{encendido ? 'ONLINE' : 'OFFLINE'}</span>
            </div>

            {/* Main Icon Area */}
            <div className={`relative flex-1 flex flex-col items-center justify-center p-4 transition-all duration-500 bg-white ${!encendido ? 'grayscale contrast-75 opacity-60' : ''}`}>
                <div className="text-7xl transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
                    {maquina.emoji}
                </div>

                {/* Decorative technical line */}
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-gray-100" />
            </div>

            {/* Accent Line - Status based color */}
            <div className={`h-[4px] w-full transition-colors duration-300 ${encendido ? 'bg-[#10B981]' : 'bg-[#333]'}`} />

            {/* Footer - Machine Name */}
            <div className="bg-[#1a1a1a] p-3 text-center z-10 relative">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.15em] block truncate">
                    {maquina.nombre}
                </span>
            </div>

            {/* Floating Cursor Button via Portal */}
            {/* Floating Cursor Button via Portal */}
            {isHovering && createPortal(
                <div
                    className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out select-none"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        transform: 'translate(10px, -100%)'
                    }}
                >
                    <button
                        className="pointer-events-none bg-black text-[#FFC500] font-black uppercase tracking-widest text-[9px] px-4 py-2 border border-[#FFC500]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap mb-2 ml-2"
                    >
                        {encendido ? 'APAGAR ' : 'INICIAR'}
                    </button>
                </div>,
                document.body
            )}

            {/* Description tooltip on hover */}
            <div className="absolute bottom-12 left-0 right-0 bg-white/95 p-2 text-[9px] text-center border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
                {maquina.descripcion}
            </div>
        </div>
    );
}

function ProduccionRecursos() {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 lg:gap-8 justify-items-start w-full">
            {MAQUINARIA_PRODUCCION.map(maquina => (
                <CardMaquinaria key={maquina.id} maquina={maquina} />
            ))}
        </div>
    );
}

export default ProduccionRecursos;
