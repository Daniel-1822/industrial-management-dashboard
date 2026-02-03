import React, { useState } from 'react';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white flex flex-col w-full">
            {/* Top Banner */}
            <div className="w-full h-32 bg-[#FFC500] relative overflow-hidden flex flex-col justify-between px-12 pt-6 pb-0 shadow-lg select-none">
                {/* Decorative Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                {/* Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 50%)`,
                        backgroundSize: '100% 4px'
                    }}
                />

                <div className="relative z-10 flex justify-between items-start">
                    <div>
                        <h1 className="text-industrial-dark text-3xl font-black tracking-tighter italic leading-none">
                            // SOBRE NOSOTROS
                        </h1>
                        <div className="flex gap-4 mt-2">
                            <span className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em]">Sector: Info-01</span>
                            <span className="text-[10px] font-bold text-industrial-dark/60 uppercase tracking-[0.2em] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-industrial-dark/40 rounded-full animate-pulse" />
                                Contact System
                            </span>
                        </div>
                    </div>
                </div>

                {/* Tab */}
                <div className="relative z-20 flex">
                    <div className="bg-[#fafafa] px-10 py-3 flex items-center gap-4 border-x border-t border-gray-200 translate-y-[1px] group cursor-default">
                        <div className="w-3 h-3 bg-industrial-dark group-hover:rotate-90 transition-transform duration-300" />
                        <span className="text-black text-[11px] font-black uppercase tracking-[0.3em]">Información Corporativa</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto relative bg-[#fafafa]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cpath d='M0 800c100-50 200-150 300-100s200 100 300 0 200-150 200-150v150L0 800z' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 700c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 600c100-50 200-150 300-100s200 100 300 0 200-150 200-150' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '800px 800px'
                    }}
                />

                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Company Info Section */}
                        <div className="space-y-6">
                            {/* About Card */}
                            <div className="bg-white shadow-md border border-gray-200 overflow-hidden">
                                <div className="bg-industrial-dark p-4 border-b-4 border-[#FFC500]">
                                    <h2 className="text-[#FFC500] text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                                        <div className="w-3 h-3 bg-[#FFC500]" />
                                        SOONFIELD LOGISTICS
                                    </h2>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        Empresa líder en el transporte y distribución de <span className="font-bold text-industrial-dark">materias primas</span> y <span className="font-bold text-industrial-dark">componentes electrónicos</span> de alta precisión.
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        Con más de 15 años de experiencia en el sector industrial, garantizamos la entrega segura y eficiente de materiales críticos para la fabricación de tecnología de vanguardia.
                                    </p>
                                    <div className="border-l-4 border-[#FFC500] pl-4 bg-gray-50 p-4 mt-4">
                                        <p className="text-xs font-black uppercase tracking-wider text-industrial-dark/60 mb-2">
                                            Nuestra Misión
                                        </p>
                                        <p className="text-sm text-gray-700 italic">
                                            "Conectar la industria global con soluciones logísticas de precisión, asegurando la cadena de suministro del futuro tecnológico."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Services Card */}
                            <div className="bg-white shadow-md border border-gray-200 overflow-hidden">
                                <div className="bg-[#FFC500] p-4 border-b-4 border-industrial-dark">
                                    <h3 className="text-industrial-dark text-lg font-black uppercase tracking-tighter flex items-center gap-3">
                                        <div className="w-3 h-3 bg-industrial-dark" />
                                        Servicios Especializados
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {[
                                            'Transporte de materiales semiconductores',
                                            'Distribución de componentes electrónicos',
                                            'Logística de materias primas industriales',
                                            'Almacenamiento controlado y seguro',
                                            'Trazabilidad en tiempo real',
                                            'Certificación ISO 9001:2015'
                                        ].map((service, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-2 h-2 bg-[#FFC500] mt-1.5 flex-shrink-0" />
                                                <span className="text-sm text-gray-700">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div>
                            <div className="bg-white shadow-md border border-gray-200 overflow-hidden sticky top-8">
                                <div className="bg-industrial-dark p-4 border-b-4 border-[#FFC500]">
                                    <h2 className="text-[#FFC500] text-xl font-black uppercase tracking-tighter flex items-center gap-3">
                                        <div className="w-3 h-3 bg-[#FFC500]" />
                                        Formulario de Contacto
                                    </h2>
                                    <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">
                                        Envíanos tu consulta o comentario
                                    </p>
                                </div>

                                <div className="p-6">
                                    {submitSuccess && (
                                        <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="w-4 h-4 bg-green-500 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-wider text-green-900 mb-1">
                                                        Mensaje Enviado
                                                    </p>
                                                    <p className="text-xs text-green-700">
                                                        Tu comentario ha sido recibido correctamente. Nos pondremos en contacto pronto.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                                Nombre Completo
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors text-sm"
                                                placeholder="Tu nombre"
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors font-mono text-sm"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </div>

                                        {/* Subject Input */}
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                                Asunto
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors text-sm"
                                                placeholder="Motivo de contacto"
                                                required
                                            />
                                        </div>

                                        {/* Message Textarea */}
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-industrial-dark/60 mb-2">
                                                Mensaje
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="5"
                                                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#FFC500] focus:outline-none transition-colors text-sm resize-none"
                                                placeholder="Escribe tu comentario o consulta aquí..."
                                                required
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-industrial-dark text-[#FFC500] py-4 font-black uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">
                                                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                                            </span>
                                            <div className="absolute inset-0 bg-[#FFC500] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="absolute inset-0 flex items-center justify-center text-industrial-dark font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                                            </span>
                                        </button>
                                    </form>

                                    {/* Contact Info */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-[9px] font-black uppercase tracking-wider text-industrial-dark/60 mb-3">
                                            Información de Contacto
                                        </p>
                                        <div className="space-y-2 text-xs text-gray-600">
                                            <p className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-industrial-dark" />
                                                <span className="font-mono">contact@soonfield.com</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-industrial-dark" />
                                                <span>+34 900 123 456</span>
                                            </p>
                                            <p className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-industrial-dark" />
                                                <span>Polígono Industrial Norte, Nave 12</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
