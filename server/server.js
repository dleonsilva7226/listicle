import express from 'express'

// Creates app
const app = express()

//Sends files from public directory
app.use('/public', express.static('../client/public'))

//Allows client to use files in client/scripts directory
app.use('/scripts', express.static('../client/public/scripts'))

//Gets root route and sends the content in the function to the root route of the website
app.get('/', (req, res) => {
    //Sends this
    res.status(200).send("<h1 style='color: blue; font-family: Arial;'>Revolution API Works</h1>")
})

//Assigns PORT
const PORT = process.env.PORT || 3001

//Checking activity on current PORT
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
}) 