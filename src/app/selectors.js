const selector = {
    header: document.querySelector('header'),
    menuElement: document.querySelector('#menu-icon div[role="menu"]'),
    displaySmNav: document.querySelector('#display-sm-nav'),
    loader: document.querySelector('#loader'),
    rootEl: document.querySelector('#root'),
    sideSmNavItem: document.querySelectorAll("[aria-label='close-dialog']"),
    gitFork: document.querySelector('#gitFork'),
    gitStars: document.querySelector('#gitStars'),
    scrollToTopEl: document.querySelector('#scroll-to-top'),
    overAllExperience: document.querySelector('.overall-experience'),
}

export default selector;