function toggleMenu() {
  var nav = document.getElementById('navOverlay');
  var bg = document.getElementById('menuOverlay');
  if (!nav || !bg) return;
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    bg.classList.remove('active');
  } else {
    nav.classList.add('active');
    bg.classList.add('active');
  }
}
