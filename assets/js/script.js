document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.gallery-item').forEach(item => {

        const slides = item.querySelectorAll('.slide');
        const prevBtn = item.querySelector('.prev');
        const nextBtn = item.querySelector('.next');

        let current = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        if (prevBtn && nextBtn) {

            prevBtn.addEventListener('click', () => {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            });

            nextBtn.addEventListener('click', () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            });

        }

    });

});

document.querySelectorAll('.service-slider-wrapper').forEach(wrapper => {

    const slides = wrapper.querySelectorAll('.service-slide');
    const prevBtn = wrapper.querySelector('.service-prev');
    const nextBtn = wrapper.querySelector('.service-next');

    let current = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    if (prevBtn && nextBtn) {

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

    }

});