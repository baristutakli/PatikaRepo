
// I'm getting information from settings.json
fetch("data/settings.json").then(
    response => response.json()
    ).then(responseJson =>
        {
           console.log(responseJson)
           console.log(responseJson.userName)
        })

// Now, let's try to get information from a website.

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
    .then(responseJson => {
        console.log(responseJson)
    }))