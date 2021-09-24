"use strict";

var modalBtn = document.querySelector('.more');
var modal = document.querySelector('.modal');
modalBtn.addEventListener('click', function () {
  modal.classList.remove('hidden');
});
modal.addEventListener('click', function (event) {
  var target = event.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');
  }
});
//# sourceMappingURL=modal.dev.js.map
