// Greetings
const express = require("express");
const app = express();

app.get('/greeting', (req, res) => {
    res.send("Hello, stranger");
});

app.get('/greeting/:name', (req, res) => {
    res.send("What's up, " + req.params.name + "!");
});

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = parseInt(req.params.total);
    let tipPercentage = parseInt(req.params.tipPercentage);
    let tip = (tipPercentage/100)*total;
    let tipString = tip.toString();
    res.send(tipString);
});

app.listen(3000, () => {
    console.log("Server is listening!!!")
});



