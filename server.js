const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

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
    },
    'person4': {
       'name': 'person does not exist',
       'city': 'city not defined'
    }
    
}
    
//get request default path to the html file
app.get('/', (req, response)=>{
    response.sendFile(__dirname + '/index.html')
})

//get request for the api
app.get('/api/', (req, response)=>{
    response.json(jsonObj)
})

//get request for single item from the api with a query parameter
app.get('/api/:person', (req, response)=>{
    const person = req.params.person.toLowerCase()
    if(jsonObj[person]){
        response.json(jsonObj[person])
    }
    else {
        response.json(jsonObj['person4'])
    }
})

//listen to heroku port or local port
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is running on ${PORT}`)
})