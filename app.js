const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(routes)

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(PORT)