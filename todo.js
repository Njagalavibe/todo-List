const activity = document.querySelector("#text")
const addButton = document.querySelector("#submit")
const addedActivity = document.querySelector(".user-input")


function addTask(){
    if(activity.value ===""){
        alert("Enter a task please!!!");
    }else{
        let li = document.createElement("li");
        li.innerText = activity.value;
        addedActivity.append(li);
        let span = document.createElement("span")
        span.innerText = "\u00d7"
        li.appendChild(span);
    }
    activity.value = "";
    saveTasks();
}

addButton.addEventListener("click",addTask);
addedActivity.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks(){
    localStorage.setItem("data",addedActivity.innerHTML);
}

function showTasks(){
    addedActivity.innerHTML = localStorage.getItem("data");
}
showTasks()
