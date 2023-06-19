const express = require('express')
const app = express()
const PORT = 8000

const jsonObj = {
    'name': 'Lucy',
    'city': 'new york'
}

app.get('/', (req, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/', (req, response)=>{
    response.json(jsonObj)
})

app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT}`)
})