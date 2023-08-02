
const input =document.getElementById('input');
const todoList =document.getElementById('todoList');


function addtask() {
  if(input.value=== ''){
    alert("you must write something!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    todoList.appendChild(li);

    let span =document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span)
  }
  input.value="";
  saveFiles();
  
}
todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveFiles();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveFiles();
  }
}, false);

function saveFiles() {
  localStorage.setItem("files",todoList.innerHTML);
  
}
function showtask() {
  todoList.innerHTML=localStorage.getItem("files");
}
showtask();


 
