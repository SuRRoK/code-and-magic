'use strict';

(function () {
  var setupOpenIcon = document.querySelector('.setup-open');
  var setupCloseIcon = document.querySelector('.setup-close');

  setupOpenIcon.addEventListener('click', function () {
    setupOpen();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter') {
      setupOpen();
      document.addEventListener('keydown', popupEscClose);
    }
  });

  var setupOpen = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscClose);
  };

  var setupClose = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscClose);
  };

  var popupEscClose = function (evt) {
    if (evt.code === 'Escape') {
      setupClose();
      document.addEventListener('keydown', popupEscClose);
    }
  };

  setupCloseIcon.addEventListener('click', function () {
    setupClose();
  });

  setupCloseIcon.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter') {
      setupClose();
      document.removeEventListener('keydown', popupEscClose);
    }
  });

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var setupSimilar = document.querySelector('.setup-similar');
  window.data.hiddenToggle(setupSimilar);

  var nameInput = setup.querySelector('.setup-user-name');
  nameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', popupEscClose);
  });
  nameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', popupEscClose);
  });

  var nextElement = function (array, element) {
    var current = array.indexOf(element);
    if (current !== array.length - 1) {
      return array[current + 1];
    }
    return array[0];
  };

  var wizardCoat = document.querySelector('.wizard-coat');
  wizardCoat.addEventListener('click', function () {
    switchWizardCoatColor();
  });

  var switchWizardCoatColor = function () {
    var wizardCoatColor = form.elements['coat-color'].value;
    var nextColor = nextElement(window.data.COAT_COLORS, wizardCoatColor);
    form.elements['coat-color'].value = nextColor;
    wizardCoat.style.fill = nextColor;
  };

  var wizardEyes = document.querySelector('.wizard-eyes');
  wizardEyes.addEventListener('click', function () {
    switchWizardEyesColor();
  });

  var switchWizardEyesColor = function () {
    var wizardEyesColor = form.elements['eyes-color'].value;
    var nextColor = nextElement(window.data.EYES_COLORS, wizardEyesColor);
    form.elements['eyes-color'].value = nextColor;
    wizardEyes.style.fill = nextColor;
  };

  var fireball = document.querySelector('.setup-fireball-wrap');
  fireball.addEventListener('click', function () {
    switchFireballColor();
  });

  var switchFireballColor = function () {
    var fireballColor = form.elements['fireball-color'].value;
    var nextColor = nextElement(window.data.FIREBALL_COLORS, fireballColor);
    form.elements['fireball-color'].value = nextColor;
    fireball.style.backgroundColor = nextColor;
  };

  var uploadAvatar = setup.querySelector('.upload');
  uploadAvatar.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };
    var isDragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        // eslint-disable-next-line no-shadow
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          uploadAvatar.removeEventListener('click', onClickPreventDefault);
        };
        uploadAvatar.addEventListener('click', onClickPreventDefault);
      }

    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var errorHandler = function () {
    return NaN;
  };

  form.addEventListener('submit', function (evtForm) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
      console.log('before onLoad');
      console.log('XHR-Status: ' + xhr.status);
      console.log(xhr.response);
      if (xhr.status === 200) {
        setup.classList.add('hidden');
      } else {
        errorHandler('Статус ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    console.log(xhr);
    xhr.responseType = 'json';
    xhr.open('POST', URL);
    console.log(xhr);
    xhr.send(new FormData(form));
    // window.backend.save(new FormData(form), function (response) {
    //   setup.classList.add('hidden');
    //   console.log('All OK, response:' + response);
    // }, errorHandler);
    evtForm.preventDefault();
  });
  // window.backend.load();
})();
