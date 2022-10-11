const getData = async (url) => {
    const res = await fetch(url)
    return await res.json()
}

const url = 'https://jsonplaceholder.typicode.com/todos/'
try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}
