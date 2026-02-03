import ProduccionRecursos from '../components/ProduccionRecursos';


const Produccion = () => {
    return (
        <main className="min-h-screen bg-white flex flex-col w-full">
            {/* Top Banner - Refining with industrial details */}
            <div className="w-full h-32 bg-[#FFC500] relative overflow-hidden flex flex-col justify-between px-12 pt-6 pb-0 shadow-lg select-none">
                {/* Decorative Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, transparent 50% , rgba(0,0,0,0.5) 50%)`,
                        backgroundSize: '100% 4px'
                    }}
                />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-industrial-dark text-3xl font-black tracking-tighter italic leading-none">
                            // CONTROL DE PRODUCCIÓN
                        </h1>
                        <div className="flex gap-4 mt-2">
                            <span className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em]">Sector: 09-F</span>
                            <span className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-industrial-dark/40 rounded-full animate-pulse" />
                                Monitoring...
                            </span>
                        </div>
                    </div>

                    {/* Technical detail: Progress bar snippet */}
                    <div className="flex flex-col items-end gap-1 opacity-40">
                        <div className="w-24 h-1 bg-industrial-dark/20 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-industrial-dark animate-[shimmer_3s_infinite]" />
                        </div>
                        <span className="text-[8px] font-mono text-industrial-dark">EFF: 87.2% OEE</span>
                    </div>
                </div>

                {/* Tab - Seamless Connection */}
                <div className="relative z-20 flex">
                    <div className="bg-[#fafafa] px-10 py-3 flex items-center gap-4 border-x border-t border-gray-200 translate-y-[1px] group cursor-default">
                        <div className="w-3 h-3 bg-industrial-dark group-hover:rotate-90 transition-transform duration-300" />
                        <span className="text-black text-[11px] font-black uppercase tracking-[0.3em]">Sistemas de Manufactura</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Refined Spacing & Pattern */}
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto relative bg-[#fafafa]">
                {/* Topographic Map Pattern Background */}
                <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cpath d='M0 800c100-50 200-150 300-100s200 100 300 0 200-150 200-150v150L0 800z' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 700c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 600c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 500c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 400c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 300c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '800px 800px'
                    }}
                />

                <div className="relative z-10 w-full max-w-7xl mx-auto">
                    <ProduccionRecursos />
                </div>
            </div>
        </main>
    );
};

export default Produccion;
