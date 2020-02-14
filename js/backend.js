'use strict';
var serverStatus = new Map(

);

(function () {

  var load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      {
        try {
          if (xhr.status === 200) {
            onLoad(xhr.response);
          } else {
            onError('Статус ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
          }
        } catch (e) {
          console.log(e.message);
        }
      }
    });
    xhr.responseType = 'json';
    xhr.open('GET', URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      console.log(xhr.status);
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.responseType = 'json';
    xhr.open('POST', URL);
    xhr.send(data);
  };
  window.backend = {
    load,
    save,
  };
})();
