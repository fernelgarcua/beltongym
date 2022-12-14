import express, { request, response } from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const users =[]

//ENDPOINT RUTA PARA HACER SOLICITUD
app.get('/', (request, response)=> {
    response.render('index', {users})
})

app.get('/user/create', (request, response) => {
    response.render('create')
})

app.post('/user/create', (request, response) => {
    const user =request.body
    users.push(user)
    response.redirect('/')
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