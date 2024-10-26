document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburgerIcon');
    const hamburgerXIcon = document.querySelector('.hamburgerXIcon');
    const navBurger = document.querySelector('.navBurgerLinks');

    if (hamburgerIcon && navBurger) {
        hamburgerIcon.addEventListener('click', function() {
            navBurger.classList.toggle('active');
        });

        hamburgerXIcon.addEventListener('click', function() {
            navBurger.classList.toggle('active');
        });
    } else {
        console.error("Elements not found");
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerIcon = document.querySelector('.hamburgerIcon');
//     const hamburgerXIcon = document.querySelector('.hamburgerXIcon');
//     const navBurger = document.querySelector('.navBurgerLinks');

//     if (hamburgerIcon && navBurger) {
//         hamburgerIcon.addEventListener('click', function() {
//             navBurger.classList.toggle('active');
//         });
//         hamburgerXIcon.addEventListener('click',function(){
//             navBurger.classList.toggle('active');
//         });
//     } else {
//         console.error("Elements not found");
//     }

//     if (navBurger.classList.contains('active')) {
//         setTimeout(() => {
//             navLinks.style.display = 'block';
//         }, 0);
//     } else {
//         navLinks.style.opacity = 0;
//         navLinks.style.transform = 'translateX(-20px)'; 

//         setTimeout(() => {
//             navLinks.style.display = 'none'; 
//         }, 300); 
//     }

// });