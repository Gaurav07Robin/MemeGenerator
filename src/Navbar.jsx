import React from "react";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Memes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Meme Templates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Videos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;