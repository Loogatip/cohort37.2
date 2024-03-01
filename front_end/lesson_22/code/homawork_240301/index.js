
const todosData = fetch('https://jsonplaceholder.typicode.com/todos');

todosData
    .then( (response) => {return response.json()})
    .then((result) => {result.forEach((elem) => addToList(elem))});

function addToList(obj) {
    const containerForRepo = document.querySelector('#info');
    const newElem = document.createElement('li');
    newElem.textContent = ' UserId: ' + obj.userId + ' ID: ' + obj.id + ' Title: ' + obj.title + '. Completed: ' + obj.completed;
    containerForRepo.append(newElem);
};
