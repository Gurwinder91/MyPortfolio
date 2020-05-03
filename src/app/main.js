import '../scss/main.scss';
import '../assets/my-resume.pdf';
import '../assets/img/title-logo.svg'

(function () {
    setTimeout(() => {      
        document.querySelector('#loader').remove();
        
        const rootTemplate = document.querySelector('#root_template');
        const rootTemplateClone = rootTemplate.content.cloneNode(true);
        document.querySelector('#root').appendChild(rootTemplateClone);
        rootTemplate.remove();

        require('./event-manager');
    }, 2500);
})();




