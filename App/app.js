const express = require('express')
const port = 3003
const mysql = require('mysql')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: './.env'})

const app = express()

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public')
console.log(__dirname)

app.use(express.static(publicDirectory));
app.set('view engine', 'hbs')

db.connect((error)=>{
    if(error) { console.log(error); } console.log("MYsql esta conectado.....");
}) 

app.get('/', (req, res) => {
    // res.send('oi ne');
    res.render('index');
})

app.listen(port, () => {
    console.log(`esta funcionando na porta ${port}`)
})