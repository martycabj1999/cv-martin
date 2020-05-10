import React from 'react';
import foto from '../img/martin.jpeg'; 
import { useSelector } from 'react-redux';
import LanguagePage from '../modules/customization/language/pages/LanguagePage'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';

const Navbar = () => {

    const currentColors = useSelector(state => state.customization.colors);
    const messages = useSelector(state => state.language.messages);

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
                            <a class="nav-link js-scroll-trigger" href="#about">{messages.navbar_about}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#experience">{messages.navbar_experience}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#education">{messages.navbar_education}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#skills">{messages.navbar_skills}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#interests">{messages.navbar_interests}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#awards">{messages.navbar_projects}</a>
                        </li>
                        <li class="nav-item">
                        <Grid container item justify="center" xs={12} sm={12} spacing={3}>
                            <Grid xs={12} sm={8} item>
                                <Card style={{minWidth: 180}} >
                                <CardContent>
                                    <LanguagePage />
                                </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;