const express = require('express')
const app = express()
const port = process.env.PORT || 1234

app.use(express.static('src'))

app.get('/', (req, res) => {
    res.sendFile(`../src/index.html`, null, null);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})