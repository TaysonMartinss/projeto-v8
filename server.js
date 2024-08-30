
const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 3306;

const db = mysql.createConnection({
  host: '',    
  user: '',        
  password: 'SPTech#2024',         
  database: 'dashboard_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});


app.use(express.static('public'));


app.get('/api/sales', (_req, res) => {
  const sql = 'SELECT * FROM sales_data';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
