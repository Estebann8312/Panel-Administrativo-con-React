function Proveedor() {
  const proveedores = [
    { id: 1, nombre: "TechSupply S.A.", contacto: "Roberto Díaz", telefono: "+562 2345 6789", email: "ventas@techsupply.cl", productos: "Electrónicos" },
    { id: 2, nombre: "Muebles Modernos Ltda.", contacto: "Claudia Méndez", telefono: "+562 9876 5432", email: "claudia@mueblesmodernos.cl", productos: "Mobiliario" },
    { id: 3, nombre: "Papelería Central", contacto: "Luis Ramírez", telefono: "+562 4567 8901", email: "luis@papeleriacentral.cl", productos: "Papelería" },
  ]

  return (
    <div>
      <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
        <div className="card-body text-white p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-5 fw-bold mb-2"><i className="bi bi-truck me-3"></i>Proveedores</h1>
              <p className="lead mb-0">Administra tus proveedores y sus productos</p>
            </div>
            <i className="bi bi-building fs-1" style={{ opacity: 0.8 }}></i>
          </div>
        </div>
      </div>

      <div className="row">
        {proveedores.map(prov => (
          <div key={prov.id} className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-shop fs-2 text-primary me-3"></i>
                  <h4 className="card-title fw-bold mb-0">{prov.nombre}</h4>
                </div>
                <p className="card-text">
                  <i className="bi bi-person-circle me-2 text-secondary"></i> {prov.contacto}<br />
                  <i className="bi bi-telephone me-2 text-secondary"></i> {prov.telefono}<br />
                  <i className="bi bi-envelope me-2 text-secondary"></i> {prov.email}<br />
                  <i className="bi bi-tags me-2 text-secondary"></i> {prov.productos}
                </p>
              </div>
              <div className="card-footer bg-white border-top-0 pb-3">
                <button className="btn btn-outline-primary rounded-pill w-100">Ver productos</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Proveedor