function Clientes() {
  const clientes = [
    { id: 1, nombre: "María González", email: "maria@example.com", telefono: "+569 1234 5678", totalCompras: "$1,250,000", estado: "Activo" },
    { id: 2, nombre: "Juan Pérez", email: "juan@example.com", telefono: "+569 8765 4321", totalCompras: "$850,000", estado: "Activo" },
    { id: 3, nombre: "Ana Rodríguez", email: "ana@example.com", telefono: "+569 9988 7766", totalCompras: "$2,100,000", estado: "Inactivo" },
    { id: 4, nombre: "Carlos López", email: "carlos@example.com", telefono: "+569 5544 3322", totalCompras: "$450,000", estado: "Activo" },
  ]

  return (
    <div>
      {/* Encabezado con tarjeta de bienvenida */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <div className="card-body text-white p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="display-5 fw-bold mb-2">
                    <i className="bi bi-people-fill me-3"></i>Clientes
                  </h1>
                  <p className="lead mb-0">Gestión completa de tu cartera de clientes</p>
                </div>
                <i className="bi bi-person-plus-fill" style={{ fontSize: '3rem', opacity: 0.8 }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas de resumen */}
      <div className="row mb-4 g-3">
        <div className="col-md-3">
          <div className="card text-center border-0 shadow-sm rounded-3">
            <div className="card-body">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h3 className="mt-2">24</h3>
              <p className="text-muted">Total Clientes</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-0 shadow-sm rounded-3">
            <div className="card-body">
              <i className="bi bi-graph-up fs-1 text-success"></i>
              <h3 className="mt-2">18</h3>
              <p className="text-muted">Activos</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-0 shadow-sm rounded-3">
            <div className="card-body">
              <i className="bi bi-cart-check fs-1 text-warning"></i>
              <h3 className="mt-2">$4.65M</h3>
              <p className="text-muted">Ventas totales</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-0 shadow-sm rounded-3">
            <div className="card-body">
              <i className="bi bi-calendar-week fs-1 text-info"></i>
              <h3 className="mt-2">+12%</h3>
              <p className="text-muted">Crecimiento</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de clientes */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white border-bottom-0 pt-4 px-4">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0 fw-bold">Listado de clientes</h4>
            <button className="btn btn-primary rounded-pill">
              <i className="bi bi-plus-circle me-1"></i> Agregar cliente
            </button>
          </div>
        </div>
        <div className="card-body p-4">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Total compras</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map(cliente => (
                  <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td className="fw-bold">{cliente.nombre}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefono}</td>
                    <td>{cliente.totalCompras}</td>
                    <td>
                      <span className={`badge rounded-pill ${cliente.estado === 'Activo' ? 'bg-success' : 'bg-secondary'}`}>
                        {cliente.estado}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1 rounded-circle"><i className="bi bi-pencil"></i></button>
                      <button className="btn btn-sm btn-outline-danger rounded-circle"><i className="bi bi-trash"></i></button>
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

export default Clientes