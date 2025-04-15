/**initier express */
const express = require('express')
/**creer execution du serveur express */
const app = express()
/**creer le port localhost */
const port = 5000

/**on va utliser serveur express */
app.use(express.json());

/**routage et avec statutspagecode res.status(404).send et en place de  hello page not found */
app.get("/" , (req , res) =>{
    res.send("hello")
})

/**voir serveur */
app.listen(port , ()=>{
    console.log("serveur is running");
})