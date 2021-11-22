
document.body.style.backgroundColor = "#d8e2dc"

let formDom = document.querySelector("#userForm")
formDom.addEventListener("submit", formHandler)


function formHandler(event){
    event.preventDefault()

    const userName = document.querySelector("#username")
    const task = document.querySelector("#task")
    const subTasks = document.querySelector("#subTasks")
    const name = document.querySelector("#Uname")
    
    if (userName.value && task.value && subTasks.value ) {
        
        addItem(task.value,subTasks.value)
        name.innerHTML = ""
        task.value = ""
        subTasks.value = ""
        alert("Task is added!")

    } else {
        alert("Hey! You forgot something. All fields should be completed")
    }

}
let userListDom = document.querySelector("#userList")
function addItem(task,subTasks){
    let liDom = document.createElement("li")
    liDom.innerHTML = `
    ${task}
    <span class="badge badge-primary badge-pill">${subTasks}</span>
    `
    liDom.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDom.append(liDom)
}


