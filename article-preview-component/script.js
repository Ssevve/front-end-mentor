document.querySelector('.card__footer').addEventListener('click', (e) => {
  // document.querySelector('.share').classList.toggle('share--show');
  if (e.target.matches('.footer__share, .footer__share *')) {
    document.querySelector('.share').classList.toggle('share--show');
    document.querySelector('.footer__share').classList.toggle('footer__share--active');
  }
});