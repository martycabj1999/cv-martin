import React from 'react';
import { useSelector } from 'react-redux';

const Experiencia = () => {
    
    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

    return (
        <section class="p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
                <h2 class="mb-5">{messages.experience_title}</h2>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.experience_job_4}</h3>
                        <div class="subheading mb-3">{messages.experience_job_name_4}</div>
                        <p>{messages.experience_job_description_4}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.experience_job_date_4}</span>
                    </div>
                </div>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.experience_job_3}</h3>
                        <div class="subheading mb-3"></div>
                        <p>{messages.experience_job_description_3}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.experience_job_date_3}</span>
                    </div>
                </div>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.experience_job_2}</h3>
                        <div class="subheading mb-3">{messages.experience_job_name_2}</div>
                        <p>{messages.experience_job_description_2}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.experience_job_date_2}</span>
                    </div>
                </div>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.experience_job_1}</h3>
                        <div class="subheading mb-3">LINES</div>
                        <p>{messages.experience_job_description_1}</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.experience_job_date_1}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiencia;