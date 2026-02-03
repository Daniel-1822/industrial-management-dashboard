import React, { useState } from 'react';

const COMPONENTES_FABRICACION = [
    {
        id: 1,
        nombre: 'Microprocesador 2N',
        emoji: '📟',
        stockInicial: 2,
        valor: '128K',
        color: 'bg-highlight',
        descripcion: 'Unidad central con arquitectura de 2 nanómetros.'
    },
    {
        id: 2,
        nombre: 'Módulo de Memoria',
        emoji: '💾',
        stockInicial: 3,
        valor: '240K',
        color: 'bg-highlight',
        descripcion: 'Células de almacenamiento de alta densidad para servidores.'
    },
    {
        id: 3,
        nombre: 'Matriz de Grafeno',
        emoji: '🕸️',
        stockInicial: 5,
        valor: '15000',
        color: 'bg-purple-500',
        descripcion: 'Material de última generación para superconductores.'
    },
    {
        id: 4,
        nombre: 'Cristal de Silicio',
        emoji: '💎',
        stockInicial: 7,
        valor: '15000',
        color: 'bg-purple-500',
        descripcion: 'Pureza 99.9% optimizada para la fabricación de obleas.'
    },
    {
        id: 5,
        nombre: 'Célula de Litio G5',
        emoji: '🔋',
        stockInicial: 12,
        valor: '30000',
        color: 'bg-purple-500',
        descripcion: 'Núcleo de estado sólido de alta eficiencia energética.'
    },
    {
        id: 6,
        nombre: 'Placa Multicapa Base',
        emoji: '⚡',
        stockInicial: 0,
        valor: '4000',
        color: 'bg-orange-400',
        descripcion: 'Sustrato de alta conductividad para sistemas embebidos.'
    }
];

function CardProducto({ producto }) {
    const [cantidad, setCantidad] = useState(producto.stockInicial);

    return (
        <div className="relative group flex flex-col w-[170px] aspect-[4/5] bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
            {/* Stock Tag - Flat Rectangle Style (Aumentado y separado del borde) */}
            <div className="absolute top-2 left-2 z-20 px-2.5 py-0.5 bg-[#333] text-white text-[11px] font-black uppercase tracking-tighter flex items-center gap-2 shadow-sm">
                <span className="opacity-70">Stock</span>
                <span className="tabular-nums">{cantidad}</span>
            </div>

            {/* Main Area */}
            <div className={`relative flex-1 flex flex-col items-center justify-center p-4 transition-all duration-500 bg-white ${cantidad === 0 ? 'grayscale contrast-50' : ''}`}>

                {/* Product Icon */}
                <div className="text-7xl transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
                    {producto.emoji}
                </div>

                {/* Decorative technical line */}
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-gray-100" />
            </div>

            {/* Price-mimicking accent line */}
            <div className={`h-[4px] w-full ${producto.color}`} />

            {/* Bottom Section - Dark Gray Header for Name */}
            <div className="bg-[#1a1a1a] p-3 text-center z-10 relative">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.15em] block truncate">
                    {producto.nombre}
                </span>
            </div>

            {/* Controls - Discretos */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="flex gap-2 pointer-events-auto">
                    <button
                        onClick={(e) => { e.stopPropagation(); setCantidad(Math.max(0, cantidad - 1)) }}
                        className="w-8 h-8 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black active:scale-95 transition-all text-sm font-black"
                    >
                        -
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setCantidad(cantidad + 1) }}
                        className="w-8 h-8 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black active:scale-95 transition-all text-sm font-black"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Sold Out - Over-the-top technical label */}
            {cantidad === 0 && (
                <div className="absolute inset-0 bg-[#333]/80 z-30 flex flex-col items-center justify-center backdrop-blur-[1px]">
                    <div className="w-full bg-black/60 py-2 border-y border-white/20 text-center">
                        <span className="text-white font-black text-xs tracking-[0.2em] uppercase italic">
                            - SOLD OUT -
                        </span>
                        <div className="text-[8px] text-white/40 mt-1 uppercase tracking-tight">System unavailable</div>
                    </div>
                </div>
            )}
        </div>
    );
}

function InventarioProducto() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 lg:gap-8 justify-items-start">
                {COMPONENTES_FABRICACION.map(prod => (
                    <CardProducto key={prod.id} producto={prod} />
                ))}
            </div>
        </div>
    );
}

export default InventarioProducto;
