import mysql from 'mysql'

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'gymbd'
  });

  connection.connect(error => {
    if (error){
        console.log(error)
    }
    else{
        console.log('Database connected')
    }
});

/*const query = "INSERT INTO usuarios (name, lastname, age, email, phone, bday, dateinit, dateend, plan) VALUES ('Fernel Augusto', 'García Beltrán', 31, 'fernel.garcia91@gmail.com', 3184937573, '1991-05-07', '2022-12-15', '2023-12-15', 'Mensual') "

connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error){
        console.error(error)
    }
    else{
        console.log(results)
    }
})

connection.end()*/

export default connection