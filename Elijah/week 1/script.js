var button = document.getElementById("enter");
var alpha = document.getElementById("alpha");
var ul = document.querySelector("ul");

function alphaLength() {
    return alpha.value.length;
}

function createListElement() {
    const li = document.createElement("li");
     li.appendChild(document.createTextNode(alpha.value));
     ul.appendChild(li);
     const prevState = localStorage.getItem('list')
     if (!prevState) {
        let arr = [alpha.value]
         localStorage.setItem('list', arr )
         alpha.value = "";
         return;
     }
     let newArr = [prevState, alpha.value]
     localStorage.setItem('list', newArr)
     alpha.value = "";
     return;
}

function addListAfterClick() {
    if (alphaLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (alphaLength() > 0 && event.charCode === 13) {
        createListElement();
    }
}

function getTodoList (){
    const list = localStorage.getItem('list')
    if (!list.length) {
        console.log('no list') 
    }
    console.log(list.split(','))
    let ToDoList = list.split(',')
    ToDoList.map((e, i)=>{
        console.log(e + i)
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(e));
        ul.appendChild(li);
        return;
    })
}

button.addEventListener("click", addListAfterClick);

alpha.addEventListener("keypress", addListAfterKeypress);
document.addEventListener('load', getTodoList())