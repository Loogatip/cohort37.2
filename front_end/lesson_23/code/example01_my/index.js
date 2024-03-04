
const responceFromServerPromice = (query) => {
    return fetch(query);
}

//const serverResponse = responceFromServerPromice ('https://jsonplaceholder.typicode.com/todos');
// serverResponse
// .then (responce => responce.json())
// .then (body => console.log(body))


// можно так
// async function serverWorks() {  
// }
// ---- или так ----
// const serverWorks = async (q) => {
//     //console.log('first one');
//     const serverReponse = await responceFromServerPromice(q);
//     //console.log('plain log from asyn action');
//     // fetch(q);            -> или так
//     const body = await serverReponse.json();    
//     console.log(body);
//     //console.log('sync action');
//     pushToConsole(body);
// }
// // console.log(serverWorks('https://jsonplaceholder.typicode.com/todos'));
// serverWorks('https://jsonplaceholder.typicode.com/todos')
// // .then((resultOfPromise) => console.log(resultOfPromise));

//console.log('one more plain log');

function pushToConsole(obj) {
    console.log(obj)
};

//  ----  Oбработка ошибок в асинхронных функциях  ----
// const serverWorks = async (q) => {
//     try {
//     const serverReponse = await responceFromServerPromice(q);
//     const body = await serverReponse.json();    
//     pushToConsole(body);
//     } catch {

//     } finally {

//     }
// }
// serverWorks('https://jsonplaceholder.typicode.com/todos')
// .catch()
// .finally()


// теперь проще

const serverWorks = async (q) => {
    const serverReponse = await responceFromServerPromice(q);
    const body = await serverReponse.json(); 
    pushToConsole(body);
}
serverWorks('https://jsonplaceholder.typicode.com/todos');