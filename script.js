window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { 
      navbar.style.backgroundColor = '#333';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
  });