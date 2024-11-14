document.addEventListener('DOMContentLoaded', function () {
  const href = document.querySelector('.js-main-link')?.getAttribute('href');
  const links = document.querySelectorAll('.js-link');

  if (href) {
    links.forEach((item) => {
      item.setAttribute('href', href);
    });
  }
})