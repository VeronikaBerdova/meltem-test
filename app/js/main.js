function toggleBurgerMenu() {
  var burgerMenuButton = document.querySelector('.burger-menu');
  var mobileMenu = document.querySelector('.mobile-menu');
  var body = document.body;

  burgerMenuButton.classList.toggle('burger-menu--active');

  if (mobileMenu.classList.contains('mobile-menu--visible')) {
    mobileMenu.classList.remove('mobile-menu--visible');
    body.classList.remove('lock');
  }
  else {
    mobileMenu.classList.add('mobile-menu--visible');
    body.classList.add('lock');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var crossMenuBtn = document.querySelector('.cross-menu');
  var toggleMenuBtn = document.querySelector('.header__contacts-btn');
  var menu = document.querySelector('.modal-popup');
  var body = document.body;


  toggleMenuBtn.addEventListener('click', function () {
    menu.style.display = 'block';
    body.classList.add('filling');

  });

  crossMenuBtn.addEventListener('click', function () {
    menu.style.display = 'none';
    body.classList.remove('filling');

  });
});


document.addEventListener('DOMContentLoaded', function () {
  var modalForm = document.querySelector('.modal-popup__form');
  var thankBlock = document.querySelector('.thank-block');

  modalForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearInvalid();

    var phoneFormInput = document.querySelector('.modal-popup__input--tell');
    var phoneInput = document.getElementById('tell');
    var phoneValue = phoneInput.value.trim();

    if (!validatePhone(phoneValue)) {
      phoneFormInput.classList.add('invalid-input');
      thankBlock.style.display = 'none';
      body.classList.remove('filling');

    } else {
      modalForm.style.display = 'none';
      thankBlock.style.display = 'block';
      body.classList.add('filling');

    }
  });

  function validatePhone(phone) {
    var phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phone);
  }

  function clearInvalid() {
    var phoneInput = document.getElementById('tell');
    phoneFormInput.classList.remove('invalid-input');
  }
});


const agreeButton = document.querySelector('.cookie-pop__agree');
const cookiePop = document.querySelector('.cookie-pop');

function hideCookiePop() {
  cookiePop.style.display = 'none';
}

agreeButton.addEventListener('click', hideCookiePop);