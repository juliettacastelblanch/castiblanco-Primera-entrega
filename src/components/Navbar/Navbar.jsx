import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
        <div className="container-fluid">
        
         <a className="navbar-brand" href="#">Castelblanch Shop </a>
         <Cartwidget/>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         
          </button>
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
             <ul className="navbar-nav">
              
              <li className="nav-item">
               <a className="nav-link" href="#">INICIO </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACTO</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">                  PRODUCTOS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">CALZAS</a></li>
                  <li><a className="dropdown-item" href="#">CAMISETAS</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
