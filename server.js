const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'myuser',
    password: 'password',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Mario')`;
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Registry successfully inserted in the database!');
});

app.get('/', (req, res) => {
    let resultHtml = '';
    const query = `SELECT name FROM people`;
    connection.query(query, (err, result) => {
        if (err) throw err;
        resultHtml = '<h1>Full Cycle Rocks!</h1>';
        resultHtml += '<ul>';
        result.map((row) => resultHtml += `<li>${row.name}</li>`);
        resultHtml += '</ul>';
        res.send(resultHtml);
    });
});

app.listen(3000, () => {
    console.log('Node training listening on port ' + port);
});

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});