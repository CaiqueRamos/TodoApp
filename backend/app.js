const express = require('express')
const port = 3003
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '11!caique',
    database: 'mydb'
});

db.connect((error)=>{
    if(error) { console.log(error); } console.log("MYsql esta conectado.....");
})

app.get('/', (req, res) => {
    res.send('oi ne');
})

app.listen(port, () => {
    console.log(`esta funcionando na porta ${port}`)
})