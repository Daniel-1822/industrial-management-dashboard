import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ logo, links, activeColor = '#FFC500' }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="w-64 bg-industrial-dark text-white h-screen sticky top-0 z-50 flex flex-col pt-8 pb-8 overflow-hidden border-r border-white/5 flex-shrink-0">
            {/* Logo - con padding lateral recuperado solo para este elemento */}
            <div className="mb-[60px] px-8">
                <Link to="/" className="text-3xl font-black tracking-tighter text-highlight hover:scale-105 transition-transform duration-200 block text-center uppercase">
                    {logo}
                </Link>
            </div>

            {/* Enlaces de navegación - Sin padding lateral para permitir efecto pestaña */}
            <div className="flex flex-col space-y-2 flex-grow">
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        to={link.url}
                        end={link.url === '/'}
                        className={({ isActive }) =>
                            `group relative py-4 px-8 flex items-center gap-4 transition-all duration-300 ${isActive
                                ? 'text-[#1a1a1a] w-full z-10'
                                : 'text-white/50 hover:text-white hover:bg-white/5'
                            }`
                        }
                        style={({ isActive }) => isActive ? {
                            backgroundColor: activeColor,
                            boxShadow: `5px 0 0 0 ${activeColor}`
                        } : {}}
                    >
                        {({ isActive }) => (
                            <>
                                {/* Icono cuadrado estilo juego - amarillo/negro según estado */}
                                <div className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-90 ${isActive ? 'bg-black' : 'border border-white/30'
                                    }`} />

                                <span className="text-xs font-black uppercase tracking-[0.2em]">
                                    {link.label}
                                </span>

                                {/* Detalle técnico lateral solo en activo */}
                                {isActive && (
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 opacity-30">
                                        <div className="w-1 h-1 bg-black" />
                                        <div className="w-1 h-1 bg-black" />
                                    </div>
                                )}
                            </>
                        )}
                    </NavLink>
                ))}
            </div>

            {/* User Info & Logout */}
            <div className="mt-auto pt-8 border-t border-white/10">
                <div className="px-8 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/20">
                            SESIÓN_ACTIVA
                        </span>
                    </div>
                    <Link
                        to="/profile"
                        className="text-sm font-black uppercase tracking-tighter hover:underline block"
                        style={{ color: activeColor }}
                    >
                        {user?.name || 'Daniel'}
                    </Link>
                    <p className="text-[9px] text-white/20 font-mono">
                        {user?.email || 'admin@factory.com'}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full py-4 px-8 flex items-center gap-4 text-white/50 hover:text-white hover:bg-red-500/10 transition-all duration-300 group border-t border-white/5"
                >
                    <div className="w-3 h-3 border border-white/30 group-hover:border-red-500 transition-colors" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors">
                        Desconectar
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
