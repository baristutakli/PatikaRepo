


// I'm getting information from settings.json
fetch("data/settings.json").then(
    response => response.json()
    ).then(responseJson =>
        {
           console.log(responseJson)
           console.log(responseJson.userName)
        })

// Now, let's try to get information from a website, and added information to a table.

let table = document.querySelector("#elements")
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
    .then(responseJson => {
        responseJson.forEach(element => {
            let tr = document.createElement("tr")
            let thId = document.createElement("th")
            thId.scope ="row"
            thId.textContent = "" +element.userId
            let tdTitle = document.createElement("td")
            tdTitle.textContent  = element.title
            let tdBody = document.createElement("td")
            tdBody.textContent  = element.body.slice(0,50)+ "..."
            tr.append(thId,tdTitle,tdBody)
            table.append(tr)
        });
    }))