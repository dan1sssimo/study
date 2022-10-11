const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )
getData('https://api.github.com/users/dan1sssimo')
    .then(data => console.log(data.location))
    .catch(error => console.log(error.message))
