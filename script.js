
    const menuIcon = document.getElementById('menu-icon');
    
    const navbar = document.querySelector('.navbar');
    const navBg = document.querySelector('.nav-bg');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active');
        navBg.classList.toggle('active');
    });

    // Fechar o menu ao redimensionar a janela para telas maiores
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            navBg.classList.remove('active');
        }
    });
