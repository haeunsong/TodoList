const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // Object -> string
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1
    delBtn.innerText="Θ "
    span.innerText=text;
    li.appendChild(delBtn); // 버튼을 li에 넣고
    li.appendChild(span); // span을 li에 넣고
    li.id = newId; // li에도 id 부여
    toDoList.appendChild(li); // li를 ul에 append
    const toDoObj = {
        text:text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    toDoInput.focus();
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){ // 내용이 있으면
        const parsedToDos = JSON.parse(loadedToDos); // string -> Object
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();