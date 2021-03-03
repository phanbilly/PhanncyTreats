// // nav bar menu //
// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');

// openMenu.addEventListener('click', show);
// closeMenu.addEventListener('click', close);

// function show() {
//   mainMenu.style.display = 'flex';
//   mainMenu.style.top = '0';
// }

// function close() {
//   mainMenu.style.top = '-100%';
// }

// // carousel images // 
// let carouselImages = document.querySelector('.carousel-img');
// let carouselButtons = document.querySelectorAll('.carousel-btn');
// let numberOfImages = document.querySelectorAll('.carousel-img img').length;
// let imageIndex = 1;
// let translateX = 0;

// carouselButtons.forEach(button => {
//   button.addEventListener('click', event => {
//     if (event.target.id === 'prev') {
//       if (imageIndex !== 1) {
//         imageIndex--;
//         translateX += 300;
//       }
//     } else {
//       if (imageIndex !== numberOfImages) {
//         imageIndex++;
//         translateX -= 300;
//       }
//     }
//     carouselImages.style.transform = `translateX(${translateX}px)`;
//   });
// });