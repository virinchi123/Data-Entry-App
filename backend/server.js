const express = require('express');
const path = require('path');
const Weapon =require('./database/schemas/Weapon');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const connect = () => {
    const uri = "mongodb+srv://botson:botson@cluster0-lvbuq.mongodb.net/discord?retryWrites=true&w=majority";
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

const app = express();
/* app.use(express.static(path.join(__dirname, '..','./public')));
console.log(path.join(__dirname, '..','./public')) */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static("public"));





app.get('/db/items',(req,res)=>{
    console.log('connecting to db')
    connect().then(async connection=>{
        const items = await Weapon.find({}).exec()
        res.status(200).json({ body: items })
    }).catch((error)=>{
        console.log(error)
    })
})
app.post('/db/items',(req,res)=>{
    //console.log(req)
    console.log('in here')
    connect().then(async connection => {
        let weapon = await Weapon.create(req.body)
        res.status(200).send(weapon)
    }).catch((error)=>{
        console.log(error)
    })
})

app.get('/', function (req, res) {
    console.log(path.join(__dirname, '..', './public', 'index.html'))
    res.sendFile(path.join(__dirname,'..','./build', 'index.html'));
});


app.listen(process.env.PORT||8080,()=>console.log('server is running'));
