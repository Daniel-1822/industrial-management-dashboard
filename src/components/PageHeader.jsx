import React from 'react';

const PageHeader = ({ title, subtitle, badge, status, centered = false }) => {
    if (centered) {
        return (
            <div className="text-center space-y-4 mb-12">
                {badge && (
                    <div className="inline-block px-4 py-1.5 bg-[var(--brand-accent)] text-[var(--brand-dark)] text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-sm">
                        {badge}
                    </div>
                )}
                <h1 className="text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        {subtitle}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-8 border-[var(--brand-accent)] pl-8 mb-10">
            <div>
                <h1 className="text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-gray-500 mt-3 font-medium">
                        {subtitle}
                    </p>
                )}
            </div>
            {status && (
                <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 shrink-0 self-start md:self-end">
                    <div className={`w-4 h-4 rounded-full ${status.active ? 'bg-success ring-4 ring-green-100' : 'bg-gray-300'} ${status.animate ? 'animate-pulse' : ''}`} />
                    <span className="font-bold text-gray-700 tracking-tight uppercase text-sm">
                        {status.label}
                    </span>
                </div>
            )}
        </div>
    );
};

export default PageHeader;
