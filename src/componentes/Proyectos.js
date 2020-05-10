import React from 'react';
import { useSelector } from 'react-redux';

const Proyectos = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

    return ( 
        <section class="p-3 p-lg-5 d-flex align-items-center" id="awards">
            <div class="w-100">
                <h2 class="mb-5">{messages.projects_title}</h2>
                <ul class="fa-ul mb-0">
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://sge.frlp.utn.edu.ar"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_name_1}</a>
                        <p>{messages.projects_description_1}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://ym.youmarket.com.ar"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_name_2}</a>
                        <p>{messages.projects_description_2}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="http://micompra.site/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_name_3}</a>
                        <p>{messages.projects_description_3}</p>
                    </li>
                    <li>
                        <i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_name_4}
                        <p>{messages.projects_description_4}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_1}</a>
                        <p>{messages.projects_course_description_1}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/mongodb/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_2}</a>
                        <p>{messages.projects_course_description_}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_3}</a>
                        <p>{messages.projects_course_description_3}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/docker/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_4}</a>
                        <p>{messages.projects_course_description_4}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/digital-ocean/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_5}</a>
                        <p>{messages.projects_course_description_5}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/git-github/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_6}</a>
                        <p>{messages.projects_course_description_6}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/jest/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_7}</a>
                        <p>{messages.projects_course_description_7}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_8}</a>
                        <p>{messages.projects_course_description_8}.</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/curso-laravel-5-5-desde-cero-desarrolla-publica-una-app-pedidos/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_9}</a>
                        <p>{messages.projects_course_description_9}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/aplicaciones-web-progresivas/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_10}</a>
                        <p>{messages.projects_course_description_10}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/angular-2-fernando-herrera/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_11}</a>
                        <p>{messages.projects_course_description_11}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://www.udemy.com/course/vue-js-2-para-principiantes/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_12}</a>
                        <p>{messages.projects_course_description_12}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/ingles-1/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_13}</a>
                        <p>{messages.projects_course_description_13}</p>
                    </li>
                    <li>
                        <a style={{color: '#bd5d38'}} href="https://platzi.com/clases/hablar-en-publico/"><i class="fa-li fa fa-trophy text-warning"></i> {messages.projects_course_14}</a>
                        <p>{messages.projects_course_description_14}</p>
                    </li>
                </ul>
            </div>
        </section>
     );
}
 
export default Proyectos;