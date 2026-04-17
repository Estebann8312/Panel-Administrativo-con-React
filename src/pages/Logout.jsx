function Logout() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card border-0 shadow-lg rounded-4 text-center overflow-hidden">
          <div className="card-body p-5">
            <i className="bi bi-box-arrow-right display-1 text-danger mb-3"></i>
            <h2 className="fw-bold mb-3">Has cerrado sesión</h2>
            <p className="text-muted mb-4">Gracias por usar el Panel Administrativo. Esperamos verte pronto.</p>
            <button className="btn btn-primary rounded-pill px-4">
              <i className="bi bi-arrow-repeat me-2"></i>Iniciar sesión nuevamente
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout