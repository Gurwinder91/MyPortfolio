

import selector from './selectors';
import menuIconClickhandler from './sidenav';
import scrollHandler from './header-scroll';

selector.menuIcon.addEventListener('click', menuIconClickhandler.bind(null, 'show'));
selector.closeSidenav.addEventListener('click', menuIconClickhandler.bind(null, 'hide'));

document.addEventListener('scroll', scrollHandler());

window.addEventListener('load', function (e) {
    selector.rootEl.style.display = 'none';
    setTimeout(() => {
        selector.loader.remove();
        selector.rootEl.style.display = 'block';
    }, 2500);
})
