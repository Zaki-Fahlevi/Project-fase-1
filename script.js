function showProfile() {
    document.getElementById('main-page').classList.remove('active');
    document.getElementById('profile-page').classList.add('active');
    document.querySelector('.back-btn').style.display = 'flex';
    window.scrollTo(0, 0);
}

function showMain() {
    document.getElementById('profile-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
    document.querySelector('.back-btn').style.display = 'none';
    window.scrollTo(0, 0);
}

function showForm() {
    document.getElementById('profile-default').style.display = 'none';
    document.getElementById('signin-form').classList.add('visible');
}

function hideForm() {
    document.getElementById('signin-form').classList.remove('visible');
    document.getElementById('profile-default').style.display = 'block';
}

function submitForm() {
    document.getElementById('signin-form').classList.remove('visible');
    document.getElementById('success-state').classList.add('visible');
}


document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('nav a').forEach(x => x.classList.remove('active'));
        a.classList.add('active');
    });
});