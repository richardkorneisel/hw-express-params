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

//Magic 8 Ball
app.get('/magic/:phrase',(req,res) => {    

    let answer = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    let randomAnswer =Math.floor(Math.random()*answer.length);
    let returnAnswer = answer[randomAnswer];
    let finalAnswer =returnAnswer.toString();
    
    res.send(req.params.phrase + '? ' + finalAnswer)
});

app.listen(3000, () => {
    console.log("Server is listening!!!")
});
    




