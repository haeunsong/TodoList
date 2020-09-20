const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="♥ "
    const span = document.createElement("span");
    span.innerText=text;
    li.appendChild(delBtn); // 버튼을 li에 넣고
    li.appendChild(span); // span을 li에 넣고
    toDoList.appendChild(li); // li를 ul에 append
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    toDoInput.focus();
}
function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos!==null){

    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();