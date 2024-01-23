const projectContainers = [...document.querySelectorAll('.project-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

projectContainers.forEach((item, i) => {
    let intervalId;
    let cardWidth = item.querySelector('.project-card').offsetWidth; 

    const nextSlide = () => {
        if (item.scrollLeft + item.clientWidth >= item.scrollWidth) {

            item.scrollLeft = 0; 
        } else {
            item.scrollLeft += cardWidth;
        }
    };


    const prevSlide = () => {
        item.scrollLeft -= cardWidth;
    };


    nxtBtn[i].addEventListener('click', () => {
        nextSlide();
        clearInterval(intervalId); 
    });

    preBtn[i].addEventListener('click', () => {
        prevSlide();
        clearInterval(intervalId);
    });


    const startAutoScroll = () => {
        intervalId = setInterval(() => {
            nextSlide();
        }, 2000); 
    };

    startAutoScroll();

    item.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });


    item.addEventListener('mouseleave', () => {
        startAutoScroll();
    });
});
