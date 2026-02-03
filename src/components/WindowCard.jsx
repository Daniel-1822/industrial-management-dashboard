export const WindowCard = ({ title, subtitle, children, footer }) => {
    return (
        <div className="w-full max-w-md bg-[#f4f5f7] rounded-none shadow-2xl overflow-hidden">
            {/* Header con gradiente sutil y barra amarilla inferior */}
            <header className="bg-gradient-to-r from-[#363737] to-[#3d4346] p-8 relative">
                <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    <svg className="w-8 h-8 text-[#f8f546]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {title}
                </h1>
                {subtitle && <p className="text-gray-300 text-sm mt-2">{subtitle}</p>}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#f8f546] via-[#f8f546]/50 to-transparent"></div>
            </header>

            {/* Contenido principal */}
            <div className="p-8 flex flex-col gap-6 bg-[#f4f5f7]">
                {children}
            </div>

            {/* Footer (opcional) */}
            {footer && (
                <footer className="p-6 bg-gradient-to-r from-gray-100 to-gray-50 border-t border-gray-300 text-center">
                    {footer}
                </footer>
            )}
        </div>
    );
};
