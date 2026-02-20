import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Produccion from './pages/Produccion';
import About from './pages/About';
import TransportDashboard from './pages/TransportDashboard';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';

import UserProfile from './pages/UserProfile';

import { TransportProvider } from './context/TransportContext';
import MissionManifest from './pages/MissionManifest';

// Componente interno que usa el contexto de autenticación
function AppContent() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // Definir enlaces para el módulo de Administración
  const adminLinks = [
    { label: 'Volver al Menú', url: '/' },
    { label: 'Suministros', url: '/admin/suministros' },
    { label: 'Producción', url: '/admin/produccion' }
  ];

  // Definir enlaces para el módulo de Transporte
  const transportLinks = [
    { label: 'Volver al Menú', url: '/' },
    { label: 'Panel', url: '/transport/dashboard' },
    { label: 'Manifiesto de Carga', url: '/transport/manifest' }
  ];

  // Determinar qué Navbar mostrar y qué enlaces usar
  const isAdminPath = location.pathname.startsWith('/admin');
  const isTransportPath = location.pathname.startsWith('/transport');
  const isProfilePath = location.pathname === '/profile';

  const showNavbar = isLoggedIn && (isAdminPath || isTransportPath || isProfilePath);

  // Si estamos en perfil, intentamos mostrar los enlaces del módulo anterior o admin por defecto
  const currentLinks = isTransportPath ? transportLinks : adminLinks;
  const activeColor = isTransportPath ? '#10B981' : '#FFC500';

  return (
    <TransportProvider>
      <div className="flex min-h-screen bg-gray-50 text-[#363737]">
        {/* Sidebar Navigation - Solo mostrar en rutas autorizadas */}
        {showNavbar && <Navbar logo="SOONFIELD" links={currentLinks} activeColor={activeColor} />}

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col overflow-hidden">
          <div className="flex-grow overflow-auto">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Raíz: Landing de selección (Protegida) */}
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />

              {/* Perfil de Usuario */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              } />

              {/* Módulo Administrar */}
              <Route path="/admin/suministros" element={
                <ProtectedRoute>
                  <Inicio />
                </ProtectedRoute>
              } />
              <Route path="/admin/produccion" element={
                <ProtectedRoute>
                  <Produccion />
                </ProtectedRoute>
              } />
              <Route path="/admin/about" element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              } />

              {/* Módulo Transportar */}
              <Route path="/transport/dashboard" element={
                <ProtectedRoute>
                  <TransportDashboard />
                </ProtectedRoute>
              } />
              <Route path="/transport/manifest" element={
                <ProtectedRoute>
                  <MissionManifest />
                </ProtectedRoute>
              } />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </TransportProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
