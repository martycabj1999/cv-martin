import React from 'react';

const Skills = () => {
    return (
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
                <h2 class="mb-5">Skills</h2>

                <div class="subheading mb-3">Lenguajes de Programación y Herramientas</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item">
                        <i class="fab fa-linux"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-docker"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fas fa-database"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-js-square"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-node-js"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-sass"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-bootstrap"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-laravel"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-php"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-npm"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-slack"></i>
                    </li>
                </ul>

                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <i class="fa-li fa fa-check"></i> Mobile-First, Responsive Design</li>
                    <li>
                        <i class="fa-li fa fa-check"></i> Cross Browser Testing &amp; Debugging</li>
                    <li>
                        <i class="fa-li fa fa-check"></i> Cross Functional Teams</li>
                    <li>
                        <i class="fa-li fa fa-check"></i> Metodologias ágiles y Scrum</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;