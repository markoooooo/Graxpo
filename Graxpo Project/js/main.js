// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('.navbar-section').style.opacity = 0.9;
  } else {
    document.querySelector('.navbar-section').style.opacity = 1;
  }
});


// Smooth Scrolling
$('.navbar-section a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});