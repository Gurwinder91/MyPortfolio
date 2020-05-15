
import selector from './selectors';

const styleHeader = (obj) => {
    for (let key in obj) {
        selector.header.style[key] = obj[key];
    }
}

export const scrollHandler = () => {
    
    let prevScroll = window.pageYOffset;
    return (...args) => {
        toggleScrollButton();
        let currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            styleHeader({
                top: '0',
                height: '100px',
                boxShadow: 'none'
            });
        }
        else if ((currentScroll > 0 && currentScroll <= 200) || currentScroll < prevScroll) {
            styleHeader({
                top: '0',
                height: '70px',
                boxShadow: 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px'
            });
        } else {
            styleHeader({
                top: '-70px',
                height: '70px',
                boxShadow: 'none'
            });
        }
        prevScroll = currentScroll;
    }
}

export const toggleScrollButton = () =>{
    const el =  selector.scrollToTopEl;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        el.style.visibility = "visible";
        el.style.opacity = 1;
      } else {
        el.style.display = "hidden";
        el.style.opacity = 0;
      }
}



