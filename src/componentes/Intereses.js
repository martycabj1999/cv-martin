import React from 'react';
import { useSelector } from 'react-redux';

const Intereses = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

    return ( 
        <section class="p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div class="w-100">
                <h2 class="mb-5">{messages.interests_title}</h2>
                <p class="lead mb-5">{messages.interests_text_1}</p>
                
                <p class="lead mb-5">{messages.interests_text_2}</p>
                
                <p class="lead mb-5">{messages.interests_text_3}</p>
                
                <h4><i class="fas fa-file-signature"></i><a style={{color: '#007bff'}} href="https://www.linkedin.com/posts/martintg_mi-2019-activity-6613537213747728384-NkRI">{messages.interests_info_2019}</a></h4>
                <h4><i class="fas fa-file-signature"></i><a style={{color: '#007bff'}} href="https://www.linkedin.com/posts/martintg_informe-2020-parte-1-activity-6692872337714380800-hiJg">{messages.interests_info_2020_1}</a></h4>
            </div>
        </section>
     );
}
 
export default Intereses;