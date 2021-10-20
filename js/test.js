
document.body.style.backgroundColor = "#99CCFF"

let formDom = document.querySelector("#userForm")
formDom.addEventListener("submit", formHandler)


function formHandler(event){
    event.preventDefault()

    const userName = document.querySelector("#username")
    const task = document.querySelector("#task")
    const subTasks = document.querySelector("#subTasks")
    const name = document.querySelector("#Uname")
    
    if (userName.value && task.value && subTasks.value ) {
        name.innerHTML = userName.value
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


/*
let formDom =document.querySelector("#userForm")
formDom.addEventListener("submit",formSubmit)
function formSubmit(event){
    event.preventDefault() // form submitte default 

    // Getting infomation from form named UserForm
    let scoreInpDom = document.querySelector("#score")
    console.log(scoreInpDom.value)

    // use localStorage
     localStorage.setItem("score",scoreInpDom.value)
     
}*/