import React from 'react';
import { useSelector } from 'react-redux';

const Educacion = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

    return (
        <section class="p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
                <h2 class="mb-5">{messages.education_title}</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.education_university}</h3>
                        <div class="subheading mb-3">{messages.education_career}</div>
                        <div>{messages.education_grade}</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.education_date}</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.education_school}</h3>
                        <div class="subheading mb-3">{messages.education_school_developer}</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.education_school_date}</span>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h3 class="mb-0">{messages.education_school_2}</h3>
                        <div class="subheading mb-3">{messages.education_school_economy}</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">{messages.education_school_date_2}</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Educacion;