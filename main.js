document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.hero__figure');

    function triggerAnimation(entries) {
        entries.forEach(entry => {
            const image = entry.target.querySelector('img');
            console.log(image);

            image.classList.toggle('unset',entry.isIntersecting)
        });
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0 
    };

    const observer = new IntersectionObserver(triggerAnimation, options);

    images.forEach(image => {
        observer.observe(image);
    });
});
