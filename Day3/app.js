
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))



let students = [
    {
        id:'123',
        name:'join'
    },
    {
        id:'234',
        name:'jam'
    }
]

app.get('/', (req, res) => {
    res.send(students)
})

app.get('/id/:Studentid',(req,res)=>{
    let id = req.params.Studentid
    let student = students.find( s => s.id === id)
    res.send(student)
})

app.get('/sayHI', (req, res) => {
    res.send("Hello")
})

app.get('/student',(req,res)=>{
    res.render('addStudent')
})

app.post('/student',(req,res)=>{
    console.log(req.body.id);
    console.log(req.body.user);
    students.push({id:req.body.id,name:req.body.user})
    console.log(students)
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})