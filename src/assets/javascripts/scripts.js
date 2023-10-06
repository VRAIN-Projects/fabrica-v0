function changeActiveNavLink (id) {
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');
}