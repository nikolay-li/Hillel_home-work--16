'use strict';
// TASK!!

// Створіть функцію multiplyNumeric(obj), яка збільшує всі числові властивості об'єкта obj на 2.

// Наприклад:

// // до виклику функції

// let menu = {

//     width: 200,

//     height: 300,

//     title: "My menu"

// };

// multiplyNumeric(menu);

// // після виклику функції

// menu = {

//     width: 400,

//     height: 600,

//     title: "My menu"

// };

// Використовуйте typeof, щоб перевірити, що значення властивості числове.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj;
};
