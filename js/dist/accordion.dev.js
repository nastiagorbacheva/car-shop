"use strict";

var btns = document.querySelectorAll('.feature__link');
var lists = document.querySelectorAll('.feature-sub');
btns.forEach(function (btnItem, index) {
  btnItem.addEventListener('click', function () {
    btns.forEach(function (btnItem) {
      btnItem.classList.remove('feature__link_active');
    });
    btnItem.classList.add('feature__link_active');
    lists.forEach(function (listItem) {
      listItem.classList.add('hidden');
    });
    lists[index].classList.remove('hidden');
  });
});
//# sourceMappingURL=accordion.dev.js.map
