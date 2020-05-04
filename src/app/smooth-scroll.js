import SmoothScroll from 'smooth-scroll';

export default new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});