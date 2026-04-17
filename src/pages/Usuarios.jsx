import { useState } from 'react'

function Usuarios() {
  const [usuarios] = useState([
    { id: 1, nombre: "admin@panel.com", rol: "Administrador", ultimoAcceso: "2025-04-15", estado: "Activo" },
    { id: 2, nombre: "juan.perez", rol: "Editor", ultimoAcceso: "2025-04-14", estado: "Activo" },
    { id: 3, nombre: "ana.lopez", rol: "Consultor", ultimoAcceso: "2025-04-10", estado: "Inactivo" },
  ])

  return (
    <div>
      <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <div className="card-body text-white p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-5 fw-bold mb-2"><i className="bi bi-person-badge-fill me-3"></i>Usuarios</h1>
              <p className="lead mb-0">Control de acceso y permisos</p>
            </div>
            <i className="bi bi-shield-lock-fill fs-1" style={{ opacity: 0.8 }}></i>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Usuario</th>
                  <th>Rol</th>
                  <th>Último acceso</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map(user => (
                  <tr key={user.id}>
                    <td><i className="bi bi-person-circle me-2"></i>{user.nombre}</td>
                    <td><span className="badge bg-info">{user.rol}</span></td>
                    <td>{user.ultimoAcceso}</td>
                    <td>
                      <span className={`badge ${user.estado === 'Activo' ? 'bg-success' : 'bg-danger'}`}>
                        {user.estado}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary me-1"><i className="bi bi-pencil"></i></button>
                      <button className="btn btn-sm btn-outline-danger"><i className="bi bi-lock"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuarios