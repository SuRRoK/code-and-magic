'use strict';

(function () {
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
    '#e6e848',
  ];

  var WIZARDS_COUNT = 4;


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

  var wizardsList = document.querySelector('.setup-similar-list');
  var onWizardsListLoad = function(wizards) {
    var wizardHTML;
    var wizardsHTML = document.createDocumentFragment();

  };
  // var wizards = window.backend.load();
  // console.log(wizards);
  // var wizardsGenerate = function (count) {
  //   var wizardHTML;
  //   var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  //   var wizardsHTML = document.createDocumentFragment();
  //   for (var i = 0; i < count; i++) {
  //     wizards[i] = {
  //       name: randomItem(SECOND_NAME) + ' ' + randomItem(FIRST_NAME),
  //       coatColor: randomItem(COAT_COLORS),
  //       eyesColor: randomItem(EYES_COLORS),
  //     };
  //     wizardHTML = wizardTemplate.cloneNode(true);
  //     wizardHTML.querySelector('.setup-similar-label').textContent = wizards[i].name;
  //     wizardHTML.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  //     wizardHTML.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  //     wizardsHTML.appendChild(wizardHTML);
  //   }
  //   return wizardsHTML;
  // };
  //
  // var wizardsList = document.querySelector('.setup-similar-list');
  // wizardsList.appendChild(wizardsGenerate(WIZARDS_COUNT));

  window.data = {
    COAT_COLORS,
    EYES_COLORS,
    FIREBALL_COLORS,
    hiddenToggle,
  }
})();
