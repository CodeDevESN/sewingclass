const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
	
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});
const joinForm = document.getElementById('joinForm');
const successMessage = document.getElementById('successMessage');

joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    joinForm.style.display = 'none';
    successMessage.classList.remove('hidden');
});
