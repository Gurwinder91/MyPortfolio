
import selectors from './selectors';

const menuIconClickhandler = (event) => {
    event.stopPropagation();
    console.log(event);
    let classList = event.currentTarget.firstElementChild.classList;
    if (classList.contains('hamburger')) {
        classList.remove('hamburger');
        classList.add('close');
        selectors.displaySmNav.classList.remove('hide');
        selectors.displaySmNav.dataset.hide = false;
    } else {
        classList.add('hamburger');
        classList.remove('close');
        selectors.displaySmNav.classList.add('hide');
        selectors.displaySmNav.dataset.hide = true;
    }
};

export default menuIconClickhandler;