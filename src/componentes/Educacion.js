import React from 'react';

const Educacion = () => {
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
                <h2 class="mb-5">Educación</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">Universidad Tecnologica Nacional</h3>
                        <div class="subheading mb-3">Ingenieria en Sistemas de Informacion</div>
                        <div>Actualmente en 4º año</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">Febrero 2017 - Cursando</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h3 class="mb-0">Escuela Media Nº2</h3>
                        <div class="subheading mb-3">Programador Junior</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">Marzo 2014 - Diciembre 2016</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h3 class="mb-0">Escuela Media Nº2</h3>
                        <div class="subheading mb-3">Bachiller en Administración y Economia</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">Marzo 2011 - Diciembre 2016</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Educacion;