
//  *** самостоятельное задание ***

// 1. часть
// написать функцию "hello" которая принимает строку и колбэк функцию.
// и колбек функция выполнится с первым аргументом (строкой),
// и результат ее выполнения должен вернуться из функции "hello"


const hello = (str, f) => {
    return f(str);
}

// 2. часть
// вызываем функцию 'hello' и передадим ей свое имя и стрелочную функцию
// которая принимает строку и возвращает строку 'Привет *строка аргумент*'

//console.log(hello ("Juri", (str) => "Привет " + str));

const str2 = hello ("Juri", (str) => "Привет" + str);
// const str2 = hello("Juri", (str) => {
//      return "Привет ${str}"
// });

//const str = "Juri";
 const callBack = str => "Привет " + str;
 console.log(callBack("Juri"));