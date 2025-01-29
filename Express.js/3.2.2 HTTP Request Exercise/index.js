import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me!</h1><p>My phone number is 012.345.6789</p>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Me!</h1><p>My name is Lily!</p>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})