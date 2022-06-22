const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const videoBtn = document.querySelectorAll('.vid-btn');
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    750: {
        items: 3
    }
}



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        document.querySelector('#videos-slider').src = src;
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});