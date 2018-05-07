import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

// import mainImage from './../../images/contact-title.svg';
// import mountain from './../../images/mountain-v2.svg';

import mainImage from './../../images/project-title.svg';
import mountain from './../../images/mountain-v2.svg';
import descImage1 from './../../images/univ-stud.png'

import Navbar from './../../components/Navbar/index';
import ProjectBanner from './../../components/Project/index';
import SingleProject from './../../components/SingleProjectDescription/index';
import Footer from './../../components/Footer/index';

let project = {
    first:{
        img: descImage1,
        alt: "school erp",
        proTitle: "school management system",
        proBDesc: "Design and development",
        proDesc: "The offer for school management systems is large for English\
                countries, but small for French Speaking one. I'm \
                building with a team of 4 people, a simple, secure and high\
                performant school management system adapted to African countries"
    }

};


export default class ProjectPage extends Component{
    
    render() {
        
        return(
            <div>
                <Helmet>
                    <title>Project page Thierno Souleymane Diallo</title>
                    <meta name="author" content="Thierno Souleymane Diallo" />
                    <meta name="description" content="Project page from  thierno souleymane diallo" />
                </Helmet>
                <Navbar />
                <ProjectBanner mainImage={mainImage} sideImage={mountain}/>
                <SingleProject img={project.first.img} alt={project.first.alt} 
                    projectTitle={project.first.proTitle} 
                    briefDescription={project.first.proBDesc}
                    description={project.first.proDesc} showButton={true} 
                    hostname='Heroku' bgColor='#eee'
                />
                <Footer />
            </div>
        );
    }
}