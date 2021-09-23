"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var linksHead = document.querySelectorAll('.menu-list__link');
var mainScroll = document.querySelector('.main__scroll');
var newArray = [].concat(_toConsumableArray(linksHead), [mainScroll]);
newArray.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var ID = e.target.getAttribute('href').substr(1);
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
//# sourceMappingURL=smoothscroll.dev.js.map
