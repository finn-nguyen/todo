const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || '8080'
app.set('port', port)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`Server is running at: ${port}`))
