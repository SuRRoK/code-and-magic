'use strict';

(function () {
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_W = 420;
  var CLOUD_H = 270;
  var CLOUD_COLOR = 'white';
  var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var CLOUD_TEXT_COLOR = 'black';
  var CLOUD_TEXT_STYLE = '16px PT Mono';
  var CLOUD_TEXT_LINE_HEIGHT = 20;

  var histogramHeight = 150;
  var histogramColWidth = 40;
  var histogramColDist = 50;
  var histogramPlayerColor = 'rgba(255, 0, 0, 1)';
  var histogramOtherColor = function () {
    var alpha = Math.random() * (1 - 0.2) + 0.2;
    return 'rgba(0, 83, 138, ' + alpha + ')';
  };

  var findMax = function (array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  };

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = CLOUD_SHADOW_COLOR;
    ctx.fillRect(CLOUD_X + 10, CLOUD_Y + 10, CLOUD_W, CLOUD_H);
    ctx.fillStyle = CLOUD_COLOR;
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_W, CLOUD_H);
    ctx.fillStyle = CLOUD_TEXT_COLOR;
    ctx.font = CLOUD_TEXT_STYLE;
    ctx.strokeText('Ура! Вы победили!', CLOUD_X + 30, CLOUD_Y + CLOUD_TEXT_LINE_HEIGHT * 1.5);
    ctx.fillText('Список результатов:', CLOUD_X + 30, CLOUD_Y + CLOUD_TEXT_LINE_HEIGHT * 3);

    var maxTime = findMax(times);

    var colHeight = function (time) {
      return Math.floor((histogramHeight * time) / maxTime);
    };

    var histColPositionX = CLOUD_X;
    var histColPositionY = 100;
    var playerColPositionY = 0;
    var playerColHeight = 0;

    for (var i = 0; i < names.length; i++) {
      if (names[i] !== 'Вы') {
        ctx.fillStyle = histogramOtherColor();
      } else {
        ctx.fillStyle = histogramPlayerColor;
      }
      histColPositionX += histogramColDist;
      playerColHeight = colHeight(times[i]);
      playerColPositionY = histColPositionY + (histogramHeight - playerColHeight);
      ctx.fillText(Math.floor(times[i]), histColPositionX, playerColPositionY - CLOUD_TEXT_LINE_HEIGHT * 0.5);
      ctx.fillRect(histColPositionX, playerColPositionY, histogramColWidth, playerColHeight);
      ctx.fillText(names[i], histColPositionX, histColPositionY + histogramHeight + CLOUD_TEXT_LINE_HEIGHT);
      histColPositionX += histogramColWidth;
    }
  };
})();
