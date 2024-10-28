document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loveCard = document.querySelector('.love-card');
    const loginCard = document.querySelector('.love-card');
    const logo = document.querySelector('.logo');
    const navbarLinks = document.querySelectorAll('.navbar-menu a');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

            // Obtiene los valores de los campos de usuario y contraseña
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Credenciales esperadas (cámbialas según sea necesario)
            const expectedUsername = "Mari";
            const expectedPassword = "28/03/2024";

            if (username === expectedUsername && password === expectedPassword) {
                // Añade una animación antes de redirigir
                loveCard.style.transform = 'scale(1.1)';
                loveCard.style.opacity = '0';

                // Redirige después de la animación
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 800); // Espera 800ms para que se complete la animación
            } else {
                // Efecto de shake si las credenciales son incorrectas
                loginCard.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    loginCard.style.animation = ''; // Limpia la animación después de ejecutarse
                }, 500);
            }
        });
    }

    // Añade la animación de shake al CSS
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }`;
    document.head.appendChild(style);

    // Redirección al hacer clic en "Nuestro Amor"
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'home.html'; // Redirige a home.html
        });
    }

    // Redirección a las páginas del menú de navegación
    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita la redirección predeterminada
            const targetPage = link.getAttribute('href'); // Obtiene la URL del enlace

            // Añade una animación antes de redirigir
            loveCard.style.transform = 'scale(1.1)';
            loveCard.style.opacity = '0';

            // Redirige después de la animación
            setTimeout(() => {
                window.location.href = targetPage;
            }, 800); // Espera 800ms para que se complete la animación
        });
    });
});
