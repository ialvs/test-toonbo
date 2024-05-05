const express = require("express")
const { sendMessage, getTextMessageInput } = require("./messageSender");

const app = express()

app.use(express.json())

app.get("/", (_,res) => {
    const data = getTextMessageInput(process.env.RECIPIENT_WAID, 'Conversão bem sucedida');
    
    const result = sendMessage(data)
    .then(function () {
      return 200
    })
    .catch(function () {
      return 500
    });
    return res.send().status(result)
})

app.listen(3000, () => console.log(`Servidor iniciado na porta 3000`))