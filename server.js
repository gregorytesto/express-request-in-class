const express = require('express');
const app = express();
const rocks = require("./models/rock.js");

require("dotenv").config();

app.get("/", (req, res)=>{
    res.send("<h1>Welcome to Express Minerals App</h1>");
});


app.get("/rocks", (req, res)=>{
    res.send(rocks);
});

app.get("/rocks/awesome", (req, res) => {
    res.send(`
      <h1>rocks are awesome!</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pyrite_-_Huanzala_mine%2C_Huallanca%2C_Bolognesi%2C_Ancash%2C_Peru.jpg/260px-Pyrite_-_Huanzala_mine%2C_Huallanca%2C_Bolognesi%2C_Ancash%2C_Peru.jpg" >
    `);
});

app.get("/rocks/:index", (req, res)=>{
    let { index } = req.params;
    if(rocks[index]){
        res.send(rocks[index]);
    } else {
        res.send("No rock at that index");
    }
});

app.get("/add/:numOne/:numTwo", (req, res)=>{
    let {numOne, numTwo} = req.params;
    res.send(`You wanted me to add ${numOne} and ${numTwo}`);
});

app.get("/calculator/:operator", (req, res)=>{
    let { operator } = req.params;
    const { num1, num2 } = req.query;
    console.log(operator, num1, num2);
    if(operator === "add"){
        res.send("Your solution is: " + (Number(num1) + Number(num2)) );
        return;
    }
    res.send("Your operation is not supported yet");
})


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`💎💎💎 Listening on port ${PORT} 💎💎💎`);
});