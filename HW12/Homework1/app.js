const express = require("express");
const app = express();
const path = require("path");
const Home=require("./routes/home");
const Contact=require("./routes/contact");
const About=require("./routes/about");
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/home',Home);

app.use('/contact',Contact);

app.use('/about',About);




app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});