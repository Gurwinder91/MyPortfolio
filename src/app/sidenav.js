
import selectors from './selectors';

export default (event) => {
    event.stopPropagation();

    let classList = event.currentTarget.firstElementChild.classList;
    if (classList.contains('hamburger')) {
        classList.remove('hamburger');
        classList.add('close');
        selectors.displaySmNav.classList.remove('hide');
        selectors.displaySmNav.dataset.hide = false;
        document.body.style.overflow = 'hidden';
    } else {
        classList.add('hamburger');
        classList.remove('close');
        hideSidenav();
    }
};

export const closeSidenav = () => {
    selectors.menuElement.firstElementChild.classList.add('hamburger');
    selectors.menuElement.firstElementChild.classList.remove('close');
    hideSidenav();
}

const hideSidenav = () => {
    selectors.displaySmNav.classList.add('hide');
    selectors.displaySmNav.dataset.hide = true;
    document.body.style.overflow = 'auto';
}