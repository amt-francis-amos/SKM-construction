function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "flex"; 
        menuIcon.style.display = "none"; 
        closeIcon.style.display = "block"; 
    } else {
        navLinks.style.display = "none"; 
        menuIcon.style.display = "block"; 
        closeIcon.style.display = "none"; 
    }
}
