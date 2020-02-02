var fireballSize = 22;

var getFireballSpeed = function (isLeft) {
  return isLeft ? 5 : 2
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  return wizardWidth * 1.337;
};
var getWizardX = function (width) {
  return (width - wizardWidth) / 2;
};
var getWizardY = function (height) {
  return (height / 3) - getWizardHeight();
};
