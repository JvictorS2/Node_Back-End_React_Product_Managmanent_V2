import mysql from 'mysql';
// Configuração de banco de dados
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'max123',
    database:'product_managment'
})

export {db}