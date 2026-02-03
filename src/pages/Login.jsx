import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    // Credenciales hardcodeadas para simulación
    const VALID_CREDENTIALS = {
        email: 'admin@factory.com',
        password: 'admin123'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simular delay de autenticación
        setTimeout(() => {
            if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
                // Login exitoso
                login({
                    name: 'Daniel',
                    email: email,
                    role: 'Administrador'
                });
                navigate('/');
            } else {
                // Login fallido
                setError('Credenciales inválidas. Intenta con admin@factory.com / admin123');
            }
            setIsLoading(false);
        }, 800);
    };

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

            {/* Login Card */}
            <div className="relative z-10 w-full max-w-md">
                {/* Header Section */}
                <div className="bg-[#FFC500] p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.1]"
                        style={{
                            backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                            backgroundSize: '20px 20px',
                            backgroundPosition: '0 0, 10px 10px'
                        }}
                    />
                    <div className="relative">
                        <h1 className="text-3xl font-black tracking-tighter text-industrial-dark uppercase">
                            // SISTEMA DE ACCESO
                        </h1>
                        <p className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em] mt-2">
                            Sector: Autenticación v2.0
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                Email / Usuario
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors font-mono text-sm"
                                placeholder="admin@factory.com"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors font-mono text-sm"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-red-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-wider text-red-900 mb-1">
                                            Error de Autenticación
                                        </p>
                                        <p className="text-xs text-red-700">
                                            {error}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-industrial-dark text-[#FFC500] py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        >
                            <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                {isLoading ? 'PROCESANDO...' : 'INICIAR SESIÓN'}
                            </span>
                            <div className="absolute inset-0 bg-[#FFC500] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="absolute inset-0 flex items-center justify-center text-industrial-dark font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {isLoading ? 'PROCESANDO...' : 'INICIAR SESIÓN'}
                            </span>
                        </button>
                    </form>

                    {/* Info Box */}
                    <div className="mt-6 p-4 bg-gray-50 border border-gray-200">
                        <div className="flex items-start gap-2">
                            <div className="w-3 h-3 bg-industrial-dark mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-wider text-industrial-dark/60 mb-1">
                                    Credenciales de Prueba
                                </p>
                                <p className="text-xs text-industrial-dark/80 font-mono">
                                    Email: <span className="font-bold">admin@factory.com</span>
                                </p>
                                <p className="text-xs text-industrial-dark/80 font-mono">
                                    Pass: <span className="font-bold">admin123</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-center text-xs text-industrial-dark/70">
                        ¿No tienes cuenta?{' '}
                        <Link to="/register" className="font-bold text-[#FFC500] hover:underline">
                            Registrarse
                        </Link>
                    </p>
                </div>

                {/* Footer Accent */}
                <div className="h-2 bg-[#FFC500]" />
            </div>
        </div>
    );
};

export default Login;
