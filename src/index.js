const express = require("express")
const { sendMessage, getTextMessageInput } = require("./messageSender");

const app = express()

app.use(express.json())

app.get("/", (_,res) => {
    const data = getTextMessageInput(process.env.RECIPIENT_WAID, 'Conversão bem sucedida');
    
    const result = sendMessage(data)
    .then(function (response) {
      //response.redirect('/');
      //response.sendStatus(200);
      console.log(response)
      return 200
    })
    .catch(function (error) {
      //console.log(error);
      //console.log(error.response.data);
      return 500
    });
    return res.send().status(result)
})

app.listen(3000, () => console.log(`Servidor iniciado na porta 3000`))