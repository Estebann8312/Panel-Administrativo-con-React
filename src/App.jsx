import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Proveedor from './pages/Proveedor'
import Usuarios from './pages/Usuarios'
import Logout from './pages/Logout'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar más moderna con sombra y efecto glass */}
      <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'linear-gradient(135deg, #1e2a3a, #0f1724)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/clientes">
            <i className="bi bi-grid-1x2-fill me-2" style={{ fontSize: '1.8rem', color: '#ffc107' }}></i>
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'white' }}>Panel Admin</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <NavLink className={({ isActive }) => `nav-link px-3 rounded-pill ${isActive ? 'active bg-warning text-dark' : 'text-white'}`} to="/clientes">
                  <i className="bi bi-people-fill me-1"></i> Clientes
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className={({ isActive }) => `nav-link px-3 rounded-pill ${isActive ? 'active bg-warning text-dark' : 'text-white'}`} to="/proveedor">
                  <i className="bi bi-truck me-1"></i> Proveedor
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink className={({ isActive }) => `nav-link px-3 rounded-pill ${isActive ? 'active bg-warning text-dark' : 'text-white'}`} to="/usuarios">
                  <i className="bi bi-person-badge-fill me-1"></i> Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link px-3 rounded-pill ${isActive ? 'active bg-danger text-white' : 'text-white'}`} to="/logout">
                  <i className="bi bi-box-arrow-right me-1"></i> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal con margen superior */}
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Clientes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/proveedor" element={<Proveedor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>

      {/* Footer opcional */}
      <footer className="bg-dark text-white-50 text-center py-3 mt-5">
        <small>© 2025 Panel Administrativo - Desarrollado con React + Vite</small>
      </footer>
    </BrowserRouter>
  )
}

export default App