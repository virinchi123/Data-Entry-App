const express = require('express');
const path = require('path')

const app = express();
/* app.use(express.static(path.join(__dirname, '..','./public')));
console.log(path.join(__dirname, '..','./public')) */

app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.get('/server', function (req, res) {
    console.log(path.join(__dirname, '..', './public', 'index.html'))
    res.sendFile(path.join(__dirname,'..','./build', 'index.html'));
});


app.listen(process.env.PORT||8080,()=>console.log('server is running'));