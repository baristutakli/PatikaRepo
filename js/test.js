
document.body.style.backgroundColor = "#99CCFF"

let formDom =document.querySelector("#userForm")
formDom.addEventListener("submit",formSubmit)
function formSubmit(event){
    event.preventDefault() // form submitte default 

    // Getting infomation from form named UserForm
    let scoreInpDom = document.querySelector("#score")
    console.log(scoreInpDom.value)

    /* use localStorage
     localStorage.setItem("score",scoreInpDom.value)
     */
}