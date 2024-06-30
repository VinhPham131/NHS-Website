document.querySelectorAll('.flip-card-click').forEach(item => {
    item.addEventListener('click', function() {
        this.closest('.flip-card-inner').classList.toggle('flipped');
    });
});