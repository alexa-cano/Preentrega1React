import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return(
    <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#f0d9f9"}} >    
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" style={{color: "#5c3b8e", fontWeight: "bold"}}>Rockispapelería</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color: "#5c3b8e"}}>Útiles escolares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#5c3b8e"}}>Cómputo e impresión</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{color: "#5c3b8e"}}>Arte y manualidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true" style={{color: "#5c3b8e"}}>Papel</a>
        </li>
        <li class="nav-item">
        <CartWidget/>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
export default NavBar;
