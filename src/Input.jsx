import clsx from 'clsx';

export const Input = ({ error, placeholder, type = 'text' }) => (
    <input
        type={type}
        placeholder={placeholder}
        className={clsx(
            // Diseño base mejorado
            'px-4 py-3 border-2 w-full outline-none transition-all duration-200 rounded-none bg-white text-gray-900 font-medium placeholder:text-gray-400 placeholder:font-normal',
            // Estado normal
            'border-gray-300 hover:border-gray-400',
            // Resaltado amarillo al enfocar con transición suave
            'focus:border-[#f8f546] focus:ring-4 focus:ring-[#f8f546]/20 focus:shadow-lg',
            // Estado de error
            error && 'border-red-500 bg-red-50/50 hover:border-red-600 focus:border-red-600 focus:ring-red-500/20'
        )}
    />
);
