var taskInput = document.getElementById("addNewTask");
var showTasksUl = document.getElementById("showTasks");
var mainPic = document.getElementById("mainPic");
var deleteTasks = document.getElementById("deleteTasks");
var incompleteTask = document.getElementById("incompleteTask");
var completedTask = document.getElementById("completedTask");
var seeAllTasks = document.getElementById("seeAllTasks");


let tasks = [];
showTasksUl.innerHTML = '';


taskInput.addEventListener('click', addNewTask);
deleteTasks.addEventListener('click', deleteAllTask);
incompleteTask.addEventListener('click', showIncompleteTasks);
completedTask.addEventListener('click', showCompletedTasks);
seeAllTasks.addEventListener('click', showTasks);



function addNewTask() {
    if (taskInput.value !== '') {
        tasks.unshift({ name: taskInput.value, completed: false });
        taskInput.value = '';
        showTasks();
    }
}

function finishTask(event) {
    const taskIndex = Array.from(showTasksUl.children).indexOf(event.closest('li'));
    tasks[taskIndex].completed = true;
    showTasks();
}

function deleteTask(event) {
    const hiddenTaskLi = event.closest('li');
    const taskIndex = Array.from(showTasksUl.children).indexOf(hiddenTaskLi);
    tasks.splice(taskIndex, 1);
    hiddenTaskLi.remove(); 
}



function deleteAllTask(){
    tasks = [];
    showTasksUl.innerHTML = '';
    mainPic.style.display = "block";
}

function showTasks() {
    if (tasks.length > 0) {
        mainPic.style.display = "none";
        showTasksUl.innerHTML = '';
        tasks.forEach((task, index) => {
            showTasksUl.innerHTML += `
            <li>
                <div class="tasks">
                    <img src="./assets/check.svg" alt="Finished" style="display:${task.completed ? 'block' : 'none'};">
                    <span class="circle" onclick="finishTask(this)"></span>
                    <span class="completed" style="width: ${task.completed ? '100%' : '0'};"></span>
                    <p class="aTask">${task.name}</p>
                    <i class="ri-close-fill" onclick="deleteTask(this)"></i>
                </div>
            </li>`;
        });
    } else {
        mainPic.style.display = "block";
    }
}

function showIncompleteTasks() {
    if (tasks.length > 0) {
        mainPic.style.display = "none";
        showTasksUl.innerHTML = ''; // Clear the list before rendering
        tasks.forEach((task, index) => {
            if (!task.completed) {
                showTasksUl.innerHTML += `
                <li>
                    <div class="tasks">
                        <img src="./assets/check.svg" alt="Finished" style="display:none;">
                        <span class="circle" onclick="finishTask(this)"></span>
                        <span class="completed"></span>
                        <p class="aTask">${task.name}</p>
                        <i class="ri-close-fill" onclick="deleteTask(this)"></i>
                    </div>
                </li>`;
            }
        });
    } else {
        mainPic.style.display = "block";
    }
}

function showCompletedTasks() {
    if (tasks.length > 0) {
        mainPic.style.display = "none";
        showTasksUl.innerHTML = ''; // Clear the list before rendering
        tasks.forEach((task) => {
            if (task.completed) {
                showTasksUl.innerHTML += `
                <li>
                    <div class="tasks">
                        <img src="./assets/check.svg" alt="Finished" style="display:block;">
                        <span class="circle" onclick="finishTask(this)"></span>
                        <span class="completed" style="width: 100%;"></span>
                        <p class="aTask">${task.name}</p>
                        <i class="ri-close-fill" onclick="deleteTask(this)"></i>
                    </div>
                </li>`;
            }
        });
    } else {
        mainPic.style.display = "block";
    }
}