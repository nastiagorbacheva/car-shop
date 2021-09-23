"use strict";

var tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
var tabsContentElems = document.querySelectorAll('[data-tabs-field]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var btn = _step.value;
    btn.addEventListener('click', function () {
      tabsHandlerElems.forEach(function (item) {
        item.classList.remove('design-list__item_active');
        btn.classList.add('design-list__item_active');
        tabsContentElems.forEach(function (content) {
          if (content.dataset.tabsField === btn.dataset.tabsHandler) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });
  };

  for (var _iterator = tabsHandlerElems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=tabs.dev.js.map
