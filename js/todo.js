// grab html id
const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // parent를 이용해서 삭제한다
    const li = (event.target.parentElement);
    toDos = toDos.filter(todo=>todo.id!= parseInt(li.id));
    saveToDos();
    li.remove();
}
// handle to do submit
function paintToDo(newTodo){
    // js 이용해서 list 생성
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

// submit 함수의 기본 동작인 새로고침을 막음
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // 새로운 변수에 값을 복사하는 것임
    toDoInput.value = ""; // value 칸 지우기

    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function sayHello(item){
    console.log("Hello", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    console.log(parsedToDos);
}
