let toDoListDOM = document.querySelector("#toDoList");
let toDoListButton = document.querySelector("#toDoListButton");
let toDoListText = document.querySelector("#toDoListText");
let alertToDoDOM = document.querySelector("#alertToDo");


toDoListButton.addEventListener("click" , Ekle);

let counter = 0;
function Ekle() {
    if (toDoListText.value && toDoListText.value != "") {
        let listItem = document.createElement('a');
        let removeButton = document.createElement('button');
    
        listItem.innerHTML = toDoListText.value
        removeButton.innerHTML = "X"
        removeButton.style.float = "right";
        removeButton.classList = "btn btn-danger"
        listItem.style.fontSize = "18pt"
    
        if (counter % 2 == 0) {
            listItem.classList = "list-group-item list-group-item-action list-group-item-primary"
        }
        else
        {
            listItem.classList = "list-group-item list-group-item-action list-group-item-secondary"
        }
    
        counter++;
    
        removeButton.addEventListener("click" , Sil);
        listItem.addEventListener("click" , Yapildi);
        toDoListDOM.appendChild(listItem);
        listItem.appendChild(removeButton);
        toDoListText.value = ""
    }
    else
    {
        $('.toast').toast('show')
    }
}

function Sil() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function Yapildi() {
    if (this.style.textDecoration !=  "line-through") {       
        this.classList =  "list-group-item list-group-item-action bg-success"
        this.style.textDecoration =  "line-through"
    }
    else
    {
        this.classList =  "list-group-item list-group-item-action"
        this.style.textDecoration =  "none"
    }
}