// 導入 express 這個模組
const express = require('express');
// 利用 epxress 來建立一個 express application
const app = express();

// HTTP request
// method: get, post, put, delete, ...
app.get('/', (request, response, next) => {
    response.send("OK");
});

app.get('/about', (request, response, next) => {
    response.send("About me");
})

app.listen(3001, () => {
    console.log('start server at port 3001');
})