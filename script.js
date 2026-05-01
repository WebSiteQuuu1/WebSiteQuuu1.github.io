function pesanSekarang() {
    alert("Terima kasih! Silakan hubungi kami via WhatsApp 🚗");
}

// Animasi scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Set awal animasi
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.5s";
});