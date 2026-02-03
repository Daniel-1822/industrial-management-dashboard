import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Validación de email: formato válido
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email?.trim() || '');
};

// Validación de contraseña: mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número
const validatePassword = (password) => {
    const errors = [];
    if (!password || password.length < 8) {
        errors.push('Mínimo 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Al menos una mayúscula');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Al menos una minúscula');
    }
    if (!/\d/.test(password)) {
        errors.push('Al menos un número');
    }
    return errors;
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess(false);

        const newErrors = {};

        // Validar email
        if (!email?.trim()) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'Introduce un correo electrónico válido (ej: usuario@dominio.com)';
        }

        // Validar contraseña
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            newErrors.password = passwordErrors;
        }

        // Validar confirmación de contraseña
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirma tu contraseña';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        // Simular registro (falseado)
        setTimeout(() => {
            setSuccess(true);
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

            {/* Register Card */}
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
                            REGISTRO DE USUARIO
                        </h1>
                        <p className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em] mt-2">
                            Sector: Alta de cuenta v1.0
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-white p-8 shadow-2xl">
                    {success ? (
                        <div className="space-y-6">
                            <div className="bg-green-50 border-l-4 border-green-500 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-green-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-wider text-green-900 mb-1">
                                            Registrado con éxito
                                        </p>
                                        <p className="text-xs text-green-700">
                                            Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="/login"
                                className="block w-full bg-industrial-dark text-[#FFC500] py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-300 text-center"
                            >
                                IR A INICIAR SESIÓN
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Input */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
                                    }}
                                    className={`w-full px-4 py-3 border-2 focus:outline-none transition-colors font-mono text-sm ${
                                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#FFC500]'
                                    }`}
                                    placeholder="usuario@ejemplo.com"
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                                    }}
                                    className={`w-full px-4 py-3 border-2 focus:outline-none transition-colors font-mono text-sm ${
                                        errors.password ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#FFC500]'
                                    }`}
                                    placeholder="Mín. 8 caracteres, mayúscula, minúscula y número"
                                    required
                                />
                                {errors.password && (
                                    <ul className="mt-1 text-xs text-red-600 list-disc list-inside">
                                        {Array.isArray(errors.password)
                                            ? errors.password.map((msg, i) => <li key={i}>{msg}</li>)
                                            : <li>{errors.password}</li>}
                                    </ul>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                    Confirmar contraseña
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                        if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: null }));
                                    }}
                                    className={`w-full px-4 py-3 border-2 focus:outline-none transition-colors font-mono text-sm ${
                                        errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#FFC500]'
                                    }`}
                                    placeholder="Repite la contraseña"
                                    required
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-industrial-dark text-[#FFC500] py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                            >
                                <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    {isLoading ? 'PROCESANDO...' : 'REGISTRARSE'}
                                </span>
                                <div className="absolute inset-0 bg-[#FFC500] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="absolute inset-0 flex items-center justify-center text-industrial-dark font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {isLoading ? 'PROCESANDO...' : 'REGISTRARSE'}
                                </span>
                            </button>
                        </form>
                    )}

                    {/* Enlace al inicio de sesión */}
                    {!success && (
                        <p className="mt-6 text-center text-xs text-industrial-dark/70">
                            ¿Ya tienes cuenta?{' '}
                            <Link to="/login" className="font-bold text-[#FFC500] hover:underline">
                                Iniciar sesión
                            </Link>
                        </p>
                    )}
                </div>

                {/* Footer Accent */}
                <div className="h-2 bg-[#FFC500]" />
            </div>
        </div>
    );
};

export default Register;
