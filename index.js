import express, { request, response } from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'
import connection from './database.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



//ENDPOINT RUTA PARA HACER SOLICITUD
app.get('/', (request, response)=> {
    const query = 'SELECT * FROM usuarios'
    const users=[]

    connection.query( query, (error,results) => {
        if (error){
             console.log(error)
        }
        else{
            users.push(...results)
            
        }
    })

    
    response.render('index', {users})
})

app.get('/user/create', (request, response) => {
    response.render('create')
})

app.post('/user/create', (request, response) => {
    const {
        name,
        lastname,
        age,
        bday,
        dateinit,
        dateend,
        email,
        phone,
        plan
    } = request.body
    const query = `INSERT INTO usuarios (name, lastname, age, email, phone, bday, dateinit, dateend, plan) VALUES ('${name}', '${lastname}', ${age}, '${email}', ${phone}, '${bday}', '${dateinit}', '${dateend}', '${plan}') `

    connection.query( query, error => {
        if (error){
            console.log(error)
        }
        
    })

    

    response.redirect('/')
    
})

app.delete('/user/delete/:id', (request, response) =>{
    const {id} = request.params

    const query = `DELETE FROM usuarios WHERE id = ${id}`

    connection.query(query, error => {
        if (error) {
            console.log(error)
        }
    })
    response.sendStatus(200)
    
})

app.listen(3000, ()=>(
    console.log('Server ejecutandose en localhost:3000')
))

/*const prompt = require('prompt-sync')()
const users = []
option=0

while (option==0){
    let userName = prompt('Ingrese su nombre: ')
    users.push(userName)
    option = prompt('Si desea salir escriba 1 sino escriba 0: ')
}


users.forEach((name)=> console.log(name))*/