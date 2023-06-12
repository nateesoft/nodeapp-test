const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello, NodeAppJS')
})

const port = 5050 | process.env.PORT
app.listen(port, () => {
    console.log(`Server running at ${port}`)
});
