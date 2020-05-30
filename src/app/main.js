import firebase from 'firebase/app';
import 'firebase/analytics';

import '../scss/main.scss';
import '../assets/my-resume.pdf';
import '../assets/img/title-logo.svg';

var firebaseConfig = {
    apiKey: "AIzaSyAQ0GezrPuJlBee9OT7EkWfaTyL2C1ZxCA",
    authDomain: "portfolio9191.firebaseapp.com",
    databaseURL: "https://portfolio9191.firebaseio.com",
    projectId: "portfolio9191",
    storageBucket: "portfolio9191.appspot.com",
    messagingSenderId: "609276630220",
    appId: "1:609276630220:web:1c17c5cef3fa9cfbe11e69",
    measurementId: "G-P1B457G99H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

analytics.logEvent('loader');

(function () {

    setTimeout(() => {
        document.querySelector('#loader').remove();

        const rootTemplate = document.querySelector('#root_template');
        const rootTemplateClone = rootTemplate.content.cloneNode(true);
        document.querySelector('#root').appendChild(rootTemplateClone);
        rootTemplate.remove();
        analytics.logEvent('page_view');

        require('./event-manager');
        require('./smooth-scroll');
        require('./tabs');

        const helpers = require('./helpers');
        helpers.calculateExperience();

        const AOS = require('aos');
        AOS.init();

        const footer = require('./footer');
        footer.loadGitRepoInfo();

        document.addEventListener('click', function(e){
            analytics.logEvent('click', e.target);
        })

    }, 2500);
})();




