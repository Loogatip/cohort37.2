
                    //  * СТРОКИ * 

//const sentence = "Сегодня мы изучаем loops";

// console.log(sentence.length);
// console.log(sentence[1]);
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

//console.log(sentence.split(''));         // -> разобьет по символьно

//console.log(sentence.substring(0,7));

// -----
//const sentence = "Сегодня, мы изучаем, loops";
//console.log(sentence.split(' '));

// const tempVar = sentence.split(',');
// console.log(tempVar);
// console.log(...tempVar);

// ----
const sentence = "Сегодня, мы изучаем, loops";
//const tempVar = sentence.replaceAll(',', '');           // -> поменять одно на другое
//console.log(tempVar);
//console.log(tempVar.split(' '));

let newSentences = '';

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !==  ","){
        newSentences += sentence[i];
    }
}
console.log(newSentences);
