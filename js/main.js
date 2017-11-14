function toggleMenu() {
    document.querySelector('header').classList.toggle('full-height');
    setTimeout(function () {
        document.querySelector('.main-nav ul:last-of-type').classList.toggle('nav-hidden');
        document.querySelector('body').classList.toggle('no-scroll')
        document.querySelector('html').classList.toggle('no-scroll')
    }, 230)

}

function toggleModal() {
    document.querySelector('.modal').classList.toggle('hidden');
}

