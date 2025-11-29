document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('.card-catalog-list');
    const prevButton = document.querySelector('.last-step-button');
    const nextButton = document.querySelector('.next-step-button');
    const item = document.querySelector('.card-catalog-list-items');

    if (!list || !prevButton || !nextButton || !item) {
        console.warn('Элементы слайдера не найдены');
        return;
    }

    function getScrollAmount() {
        const itemWidth = item.offsetWidth;
        const listStyles = window.getComputedStyle(list);
        const gap = parseInt(listStyles.getPropertyValue('gap')) || 0;

        return itemWidth + gap;
    }

    prevButton.addEventListener('click', function() {
        const distance = getScrollAmount();
        list.scrollBy({
            left: -distance,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', function() {
        const distance = getScrollAmount();
        list.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    });
});
