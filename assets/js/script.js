let ulMobile = document.querySelector('.ul-mobile');
let menuHamburger = document.querySelector('.menu-hamburger-icon')

menuHamburger.addEventListener('click', _ => {
   if(ulMobile.style.display == 'block') {
    ulMobile.style.display = 'none'
   } else {
    ulMobile.style.display = 'block'
   }    
})