const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

let app = express();
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMsg: 'Welcome To HBS!'
    });
});


app.use(bodyParser.json()); //might cause errors!!!
app.post('/fighter',(req,res)=>{
    console.log(req.body); 
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle:'About Page',
    });
});

app.get('/bad',(req,res) => {
    res.send({
        errorMessage: 'Unable to fulfill that request!'
    });
});
app.listen(port,() => {
    console.log('server is up on port 3000....');
});