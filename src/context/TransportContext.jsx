import React, { createContext, useContext, useState } from 'react';

const TransportContext = createContext(null);

export const TransportProvider = ({ children }) => {
    const [acceptedMissions, setAcceptedMissions] = useState([]);

    const toggleMission = (mission) => {
        setAcceptedMissions(prev => {
            const exists = prev.find(m => m.id === mission.id);
            if (exists) {
                return prev.filter(m => m.id !== mission.id);
            } else {
                return [...prev, mission];
            }
        });
    };

    const clearManifest = () => {
        setAcceptedMissions([]);
    };

    return (
        <TransportContext.Provider value={{ acceptedMissions, toggleMission, clearManifest }}>
            {children}
        </TransportContext.Provider>
    );
};

export const useTransport = () => {
    const context = useContext(TransportContext);
    if (!context) {
        throw new Error('useTransport debe ser usado dentro de un TransportProvider');
    }
    return context;
};
