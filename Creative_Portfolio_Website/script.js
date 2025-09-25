
// Funkcija za otvaranje overlay menu-a
function openOverlayMenu() {
  // Provjeri je li trenutno prikazan overlay menu
  var isOverlayVisible = document.querySelector('.menu-overlay').classList.contains('visible');
  
  // Ako overlay nije vidljiv, prikaži ga
  if (!isOverlayVisible) {
      document.querySelector('.menu-overlay').classList.add('visible');
      document.body.classList.add('overlay-active');
  }
}

// Funkcija za zatvaranje overlay menu-a
function closeOverlayMenu() {
  document.querySelector('.menu-overlay').classList.remove('visible');
  document.body.classList.remove('overlay-active');
}

// Funkcija za prebacivanje stanja overlay menu-a
function toggleMenu() {
  var overlayMenu = document.querySelector('.menu-overlay');
  overlayMenu.classList.toggle('visible');
  
  // Provjeri je li overlay menu vidljiv nakon prebacivanja stanja
  var isOverlayVisible = overlayMenu.classList.contains('visible');
  
  // Postavi overflow na body ako je overlay vidljiv
  if (isOverlayVisible) {
      document.body.classList.add('overlay-active');
  } else {
      document.body.classList.remove('overlay-active');
  }
}

// Event listener za klik na hamburger ikonu
document.querySelectorALL('.toggle_btn').addEventListener('click', toggleMenu);



// Funkcija za otvaranje overlay menu-a
function openOverlayMenu() {
  var overlayMenu = document.querySelector('.menu-overlay');
  overlayMenu.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Onemogućava skrolanje body-a dok je overlay vidljiv
}

// Funkcija za zatvaranje overlay menu-a
function closeOverlayMenu() {
  var overlayMenu = document.querySelector('.menu-overlay');
  overlayMenu.style.display = 'none';
  document.body.style.overflow = 'auto'; // Omogućava skrolanje body-a nakon zatvaranja overlay-a
}

// Funkcija za prebacivanje stanja overlay menu-a
function toggleMenu() {
  var overlayMenu = document.querySelector('.menu-overlay');
  var isVisible = window.getComputedStyle(overlayMenu).display !== 'none';
  if (!isVisible) {
      openOverlayMenu();
  } else {
      closeOverlayMenu();
  }
}

// Event listener za klik na hamburger ikonu
document.querySelector('.toggle_btn').addEventListener('click', toggleMenu);



