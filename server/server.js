import express from 'express'

const app = express()

//Sends files from public directory
app.use('/public', express.static('../client/public'))


//Allows client to use files in client/scripts directory
app.use('/scripts', express.static())