function changeImage() {
    var image = document.getElementById('myImage');
    var altSrc = image.getAttribute('data-alt-src');
    image.setAttribute('data-alt-src', image.getAttribute('src'));
    image.setAttribute('src', altSrc);
  }