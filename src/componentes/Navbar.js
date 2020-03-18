import React from 'react';
import foto from '../img/martin.jpeg'; 

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <span class="d-none d-lg-block">
                {
                <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src={foto} alt="" />
                }
            </span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#experience">Experiencia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#education">Educación</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#interests">Intereses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#awards">Proyectos y Certificaciones</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;