// Add event listeners to all cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseout', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1)';
    });
});