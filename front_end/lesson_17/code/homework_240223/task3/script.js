let todoList = [
    {task: "Купить молоко", done: false, deadline: "2024-02-23"},
    {task: "Заплатить за интернет", done: true, deadline: "2024-02-20"},
    {task: "Позвонить маме", done: false, deadline: "2024-02-22"},
    {task: "Почитать книгу", done: false, deadline: "2024-02-28"},
    {task: "Сделать домашнее задание", done: true, deadline: "2024-02-21"},
    {task: "Посмотреть фильм", done: false, deadline: "2024-02-24"},
    {task: "Помыть посуду", done: true, deadline: "2024-02-22"},
    {task: "Погулять с собакой", done: false, deadline: "2024-02-23"},
    {task: "Заказать пиццу", done: false, deadline: "2024-02-25"},
    {task: "Посетить врача", done: true, deadline: "2024-02-20"},
    {task: "Починить компьютер", done: false, deadline: "2024-02-26"},
    {task: "Подарить цветы подруге", done: true, deadline: "2024-02-21"},
    {task: "Поиграть в видеоигры", done: false, deadline: "2024-02-27"},
    {task: "Послать резюме", done: true, deadline: "2024-02-20"},
    {task: "Поехать в отпуск", done: false, deadline: "2024-02-29"},
        
  ];

const listAllElements = document.querySelector('.list');
const inputElement = document.querySelector('.task-input');
const createButton = document.querySelector('.btn');
const showAllButton = document.querySelector('#all');
const showDoneButton = document.querySelector('#completed');
const showUndoneButton = document.querySelector('#not_completed');


const updateList = (array) => {                                    
    listAllElements.innerHTML = '';                                 
    
    array.sort((a, b) => a.done - b.done);                          
    
    array.map(element => {                                           
        const newListItem = document.createElement('li');           
        newListItem.classList.add('list-item');                     
        if(element.done){                                           
            newListItem.classList.add('list-item_done');            
        }
        newListItem.textContent = element.task;                     
        newListItem.addEventListener('click', listItemClickHandler);
        listAllElements.append(newListItem);                        
    });
}

const createButtonHandler = () => {
    const newEntry = {task: inputElement.value, done: false};
    todoList.push(newEntry);
    inputElement.value = '';                                        
    updateList(todoList);
    // console.log(todoList);
}

const listItemClickHandler = (event) => {                           
    const taskText = event.target.textContent;                      
    const task = todoList.find(task => task.task === taskText);     
    task.done = !task.done;                                         
    updateList(todoList);                                           
}

createButton.addEventListener('click', createButtonHandler);        
showAllButton.addEventListener('click', () => updateList(todoList));                                
showDoneButton.addEventListener('click', () => updateList(todoList.filter(task => task.done)));     
showUndoneButton.addEventListener('click', () => updateList(todoList.filter(task => !task.done)));  

updateList(todoList); 