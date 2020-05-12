import moment from 'moment';

import '../scss/main.scss';
import '../assets/my-resume.pdf';
import '../assets/img/title-logo.svg';

(function () {
    
    const calculateExperience = () => {
        const startedCareer = moment('01/01/2016');
        const months = moment().diff(startedCareer, 'months');
        const elements = document.querySelectorAll('.overall-experience');
        elements.forEach(el => el.textContent = `${(months/12).toFixed(1)} years`); 
    };

    setTimeout(() => {      
        document.querySelector('#loader').remove();
        
        const rootTemplate = document.querySelector('#root_template');
        const rootTemplateClone = rootTemplate.content.cloneNode(true);
        document.querySelector('#root').appendChild(rootTemplateClone);
        rootTemplate.remove();

        calculateExperience();

        require('./event-manager');
        require('./smooth-scroll');
        require('./tabs');
        
        const AOS = require('aos');
        AOS.init();

        const footer = require('./footer');
        footer.loadGitRepoInfo();
    }, 2500);
})();




