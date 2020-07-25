import React from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

    return (
        <section class="p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
                <h2 class="mb-5">{messages.skills_title}</h2>

                <div class="subheading mb-3">{messages.skills_languages}</div>
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
                        <i class="fab fa-laravel"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-php"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-vuejs"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-node-js"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-bootstrap"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-aws"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-digital-ocean"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-slack"></i>
                    </li>
                </ul>

                <div class="subheading mb-3">{messages.skills_workflow}</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <i class="fa-li fa fa-check"></i>{messages.skills_responsive}</li>
                    <li>
                        <i class="fa-li fa fa-check"></i>{messages.skills_testing}</li>
                    <li>
                        <i class="fa-li fa fa-check"></i>{messages.skills_teams}</li>
                    <li>
                        <i class="fa-li fa fa-check"></i>{messages.skills_methods}</li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;