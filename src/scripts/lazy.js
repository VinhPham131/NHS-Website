const Cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show" , entry.isIntersecting);
        if (entries.isIntersecting) observer.unobserve(entry.target);
    });
},
    {
    threshold: 0.3
});

Cards.forEach(card => {
    observer.observe(card);
});