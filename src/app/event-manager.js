

import selector from './selectors';
import menuIconClickhandler from './sidenav';
import scrollHandler from './header-scroll';

selector.menuElement.addEventListener('click', menuIconClickhandler);

document.addEventListener('scroll', scrollHandler());



