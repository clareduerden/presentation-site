// Smooth Scrolling

// when the button is clicked
$('.btn').on('click', function (event) {
  // check the id of what has been clicked
  if (this.hash !== '') {
    // prevent the default behaviour
    event.preventDefault();

    // set the hash and then scroll to that id using the animate method over 0.8s
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});