document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
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

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.remove();
            }
        }

        var current_tasks = document.querySelectorAll(".done");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.parentNode.style.backgroundColor = "#04631c";
            }
        }
    }
}



