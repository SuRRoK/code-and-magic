'use strict';

var SECOND_NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
var FIRST_NAME = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var WIZARS_COUNT = 4;


var random = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var randomItem = function (array) {

  return array[random(0, array.length - 1)];
};

var hiddenToggle = function (object) {
  if (object.classList.contains('hidden')) {
    object.classList.remove('hidden');
  } else {
    object.classList.add('hidden');
  }
};

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
var wizardsList = document.querySelector('.setup-similar-list');
var setupSimilar = document.querySelector('.setup-similar');
hiddenToggle(setupSimilar);

var wizards = [];

var wizardsGenerate = function (count) {
  var wizardHTML;
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardsHTML = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    wizards[i] = {
      name: randomItem(SECOND_NAME) + ' ' + randomItem(FIRST_NAME),
      coatColor: randomItem(COAT_COLORS),
      eyesColor: randomItem(EYES_COLORS),
    };
    wizardHTML = wizardTemplate.cloneNode(true);
    wizardHTML.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardHTML.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardHTML.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    wizardsHTML.appendChild(wizardHTML);
  }
  return wizardsHTML;
};

wizardsList.appendChild(wizardsGenerate(WIZARS_COUNT));

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
  var wizardCoatColor = document.forms[0].elements['coat-color'].value;
  var nextColor = nextElement(COAT_COLORS, wizardCoatColor);
  document.forms[0].elements['coat-color'].value = nextColor;
  wizardCoat.style.fill = nextColor;
};

var wizardEyes = document.querySelector('.wizard-eyes');
wizardEyes.addEventListener('click', function () {
  switchWizardEyesColor();
});

var switchWizardEyesColor = function () {
  var wizardEyesColor = document.forms[0].elements['eyes-color'].value;
  var nextColor = nextElement(EYES_COLORS, wizardEyesColor);
  document.forms[0].elements['eyes-color'].value = nextColor;
  wizardEyes.style.fill = nextColor;
};

var fireball = document.querySelector('.setup-fireball-wrap');
fireball.addEventListener('click', function () {
  switchFireballColor();
});

var switchFireballColor = function () {
  var fireballColor = document.forms[0].elements['fireball-color'].value;
  var nextColor = nextElement(FIREBALL_COLORS, fireballColor);
  document.forms[0].elements['fireball-color'].value = nextColor;
  fireball.style.backgroundColor = nextColor;
};
