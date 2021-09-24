"use strict";

var form = document.querySelector('.form-test-drive');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var data = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = form.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value,
          name = _step$value.name,
          value = _step$value.value;

      if (name) {
        data[name] = value;
      }
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

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function (response) {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  }).then(function (data) {
    alert('Данные успешно сохранены!');
    form.reset();
  })["catch"](function (error) {
    alert('Произошла ошибка, статус ' + error.message);
  });
});
//# sourceMappingURL=sendForm.dev.js.map
