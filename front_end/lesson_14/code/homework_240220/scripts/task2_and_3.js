/*
2. Напишите функцию, 
    которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. 
    Первый элемент каждого внутреннего массива ключ, второй - значение. 
    
    Например такой:
                    [
                        [ 'height', 170 ],
                        [ 'weight', 80 ],
                        [ 'sport', 'regbi' ],
                        [ 'full name', 'John Doe' ],
                        [ 'sing', 'love' ],
                        [ 'speed', 90 ]
                    ]
3. Функция должна принимать объект и возвращать строку, 
    где будут перечислены все значения свойств объекта через запятую.

    Пример работы функции:
    { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
*/

const taskArr =[
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
]

const taskObj = {};
taskArr.forEach ( ([key, value]) => { taskObj[key] = value } );
console.log(taskObj);

// -- №3 --
const taskString = Object.values(taskObj).join(', ');
console.log(taskString);
