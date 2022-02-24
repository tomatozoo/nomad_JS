// grab html id
const toDoForm=document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); 
const toDoList = document.getElementById("todo-list");
const toDos = [];

function saveToDos(){
    
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    // parent를 이용해서 삭제한다
    const li = (event.target.parentElement);
    li.remove();
}
// handle to do submit
function paintToDo(newTodo){
    // js 이용해서 list 생성
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

