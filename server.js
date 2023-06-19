const express = require('express')
const app = express()
const PORT = 8000

const jsonObj = {
    'person1': {
        'name': 'Lucy',
        'city': 'New york'
    },
    'person2': {
        'name': 'John',
        'city': 'Dallas'
    },
    'person3': {
        'name': 'Peter',
        'city': 'Los angeles'
    }
    
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