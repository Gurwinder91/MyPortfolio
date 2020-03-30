
import selector from './selectors';

const menuIconClickhandler = (type, event) => {
    event.stopPropagation();
    console.log(event);
    if(type == 'show'){
        selector.displaySmNav.classList.remove('hide');
    }else if(type =='hide'){
        selector.displaySmNav.classList.add('hide');
    } 
};

export default menuIconClickhandler;