async function apiRequest() {

const personNumber = document.querySelector('input').value
try {
    const response = await fetch(`https://first-node-project-1b1c8312afb3.herokuapp.com/api/${personNumber}`)
    const data = await response.json()
    console.log(data)
}catch(error) {
    console.log(error)
}

}