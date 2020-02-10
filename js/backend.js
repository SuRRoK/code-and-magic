'use strict';
var serverStatuses = new Map(

);

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var load = function () {
    var xhr1 = new XMLHttpRequest();
    var onLoad = function() {
      return JSON.parse(xhr1.responseText);
    };
    // console.log(onLoad());
    xhr1.addEventListener('load', function () {
      {
        try {
          console.log(onLoad(xhr1.responseText));
        } catch (e) {
          console.log(e.message);
        }
      }
    });

    xhr1.open('GET', URL);
    xhr1.send();
  };
  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    console.log(data);

    xhr.addEventListener('progress', function () {
      console.log("before onLoad");
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
  //window.backend = {};
  window.backend = {
    load,
    save,
  };
})();
