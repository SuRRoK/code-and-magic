# Учебный проект «Код и Магия» [![Build status][travis-image]][travis-url]


#### Начинайте обучение!

Задача<br>
В файле setup.js
1. Покажите блок .setup, убрав в JS-коде у него класс .hidden.
2. Создайте массив, состоящий из 4 сгенерированных JS объектов, которые
будут описывать похожих персонажей. Объекты должны содержать
следующие поля:
o name, строка — случайно сгенерированное имя персонажа. Имя
генерируется из массивов имен и фамилий: нужно случайным
образом выбрать из массива имен имя, а из массива фамилий
фамилию и сложить их. При желании имя и фамилию можно
в случайном порядке менять местами:)
Имена
 Иван
 Хуан Себастьян
 Мария
 Кристоф
 Виктор
 Юлия
 Люпита
 Вашингтон
Фамилии
 да Марья
 Верон
 Мирабелла
 Вальц
 Онопко
 Топольницкая
 Нионго
 Ирвинг
o coatColor, строка — случайный цвет мантии на выбор из следующих:
 rgb(101, 137, 164)
 rgb(241, 43, 107)
 rgb(146, 100, 161)
 rgb(56, 159, 117)
 rgb(215, 210, 55)
 rgb(0, 0, 0)
o eyesColor, строка — случайный цвет глаз персонажа на выбор
из следующих:
 black
 red
 blue
 yellow
 green
3. На основе данных, созданных в предыдущем пункте и шаблона #similarwizard-template создайте DOM-элементы, соответствующие случайно
сгенерированным волшебникам и заполните их данными из массива:
o Имя персонажа name запишите как текст в блок .setup-similar-label;
o Цвет мантии coatColor задайте как цвет заливки fill в стилях
элемента .wizard-coat;
o Цвет глаз eyesColor задайте как цвет заливки fill в стилях
элемента .wizard-eyes.
4. Отрисуйте сгенерированные DOM-элементы в блок .setup-similar-list.
Для вставки элементов используйте DocumentFragment.
5. Покажите блок .setup-similar, удалив у него CSS-класс hidden.

<a href="https://htmlacademy.ru/intensive/javascript"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на интенсивном онлайн‑курсе «[Профессиональный JavaScript](https://htmlacademy.ru/intensive/javascript)», уровень 1 от [HTML Academy](https://htmlacademy.ru).

[travis-image]: https://travis-ci.com/htmlacademy-javascript/641789-code-and-magick-18.svg?branch=master
[travis-url]: https://travis-ci.com/htmlacademy-javascript/641789-code-and-magick-18
