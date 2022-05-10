import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menu">
          <p>Usuarios</p>
          <p>Contratos</p>
          <p>Perfil</p>
        </div>
        <div className="items">
          <div className="item">
            <p>Suporte</p>
            <h1>Contratos</h1>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar