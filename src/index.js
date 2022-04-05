const express = require('express')
const app = express()
const path = require('path')


// Configuraciones

app.set('port',4000)
app.set('views', path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')

// Middlewares


// Rutas

app.use(require('./routes/index'))

// Archivos estaticos

app.use(express.static(path.join(__dirname,'public')))

// Puerto en el que se ejecuta el servidor

app.listen(app.get('port'),()=>{
    console.log(`Server on port`,app.get('port'))
})