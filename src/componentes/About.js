import React from 'react';
import foto from '../img/martin.jpeg';

const About = () => {

    var width = window.screen.width;
    var height = window.screen.height;
    console.log(width);
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div class="w-100">
                <h1 class="mb-0">Martin Sebastian
                    <span class="text-primary"> Tito Gira</span>
                </h1>
                { (width < 420 && height < 850) && 
                (<img id="foto-cel" class="img-fluid img-profile rounded-circle mx-auto mb-2" src={foto} alt="" />)
                }
                <div class="subheading mb-5">La Plata, Argentina ·
                    <a style={{color: '#bd5d38'}} href="https://api.whatsapp.com/send?phone=5491144131539&text=Hola%20buenas,%20hemos%20visto%20tu%20pagina%20web%20y%20nos%20ha%20parecido%20interesante.">
                        <i class="fab fa-whatsapp"></i>(+54 9) 11 4413-1539</a> ·
                    <a style={{color: '#bd5d38'}} href="mailto:martingira1999@gmail.com">martingira1999@gmail.com</a>
                </div>

                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/martintg/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://drive.google.com/open?id=1UpwtuNbJKhBdJzmbjaaMhjGVg8brSPno">
                        <i class="fas fa-id-card"></i>
                    </a>
                    <a href="https://github.com/martycabj1999">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://gitlab.com/martycabj1999">
                        <i class="fab fa-gitlab"></i>
                    </a>
                    <a href="https://www.instagram.com/martycabj1999">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/martycabj1999">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;