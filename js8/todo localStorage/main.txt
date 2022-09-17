function remove() {
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.parentNode.remove();
            localStorage.removeItem('task');
        }
    }
}

function done() {
    var current_tasks = document.querySelectorAll(".done");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.parentNode.style.backgroundColor = "#04631c";
        }
    }
}

document.querySelector('#push').onclick = function () {
    var taskValue = document.querySelector('#newtask input').value
    if (taskValue.length == 0) {
        alert("Please Enter a Task")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskValue}
                </span>
                <div class="icons">
                <button class="done">
                    <i class="fa-solid fa-check" ></i>
                </button>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                </div>
            </div>
        `;
        localStorage.setItem("task", taskValue);
        remove();
        done();
    }
}

if (localStorage.getItem('task')) {
    document.querySelector('#tasks').innerHTML += `
<div class="task">
    <span id="taskname">
        ${localStorage.getItem('task')}
    </span>
    <div class="icons">
    <button class="done">
        <i class="fa-solid fa-check" ></i>
    </button>
    <button class="delete">
        <i class="far fa-trash-alt"></i>
    </button>
    </div>
</div>
`;
    remove();
    done();
}
