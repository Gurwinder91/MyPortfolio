import '../scss/main.scss';

import selector from './selectors';

const scrollHandler = () => {
    let prevScroll = window.pageYOffset;
    return (...args) => {
        let currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            selector.header.style.top = "0";
            selector.header.style.height = "100px";
            selector.header.style.boxShadow = 'none';
            // selector.header.style.boxShadow = 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px';
        }
        else if ((currentScroll > 0 && currentScroll <= 200) || currentScroll < prevScroll) {
            selector.header.style.height = "70px";
            selector.header.style.top = 0;
            selector.header.style.boxShadow = 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px';
        } else {
            selector.header.style.height = "70px";
            selector.header.style.top = "-70px";
            selector.header.style.boxShadow = 'none';
        }
        prevScroll = currentScroll;
    }
}


document.addEventListener('scroll', scrollHandler());