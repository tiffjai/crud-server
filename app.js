const express = require('express')
const app = express()
const fruitRouter = require('./routes/fruitRouter')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/fruits', fruitRouter)



module.exports = app






// //Importing express framework - to setup server
// const express = require('express')

// //initialising server that's gonna allow us to receive requests and 
// const app = express()

// //above 1024 - integers
// const port = 3000

// app.get('/home', (req, res) => {
//   res.send("hey")
// })

// app.get('/dogs', (req, res) => {
//     res.send("hello, dog!")
// })
// //dynamic parameter, req params contain all the name
// app.get('/dogs/:name', (req, res) => {
//     //ress.status().send()
//     res.status(200).send(req.params.name)

//     //res.sendStatus(200)

//     //This will translate wt is sent into JSON
//     res.json()
//     //will end the res process without sending any data
//     res.end()
// })
// // server/app.METHOD('PATH', (req, res) => {
//     //logic
//     //sd bk a res
//     //res.send(<data>) if you don't include this line of code the server will keep hanging
//     // })
// // binding the server to a port, call bk is a function within a function
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })