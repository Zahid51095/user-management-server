const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Zahid Hasan', email: 'Zahid1306@gmail.com'},
    {id: 2, name: 'Salsabil Hasan', email: 'Salsabil1306@gmail.com'},
    {id: 3, name: 'Zamil Hasan', email: 'Zamil1306@gmail.com'},
]


app.get('/', (req, res) => {
    res.send('Users Management server is running');
});

app.get('/users', (req, res) => {
    res.send(users);
})


app.listen(port, () => {
    console.log(`Server is runninng on PORT: ${port}`);
})