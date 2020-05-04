

import selector from './selectors';
import menuIconClickhandler, { closeSidenav } from './sidenav';
import scrollHandler from './header-scroll';

selector.menuElement.addEventListener('click', menuIconClickhandler);

[...selector.sideSmNavItem].forEach(item => {
    item.addEventListener('click', closeSidenav)
});

document.addEventListener('scroll', scrollHandler());



