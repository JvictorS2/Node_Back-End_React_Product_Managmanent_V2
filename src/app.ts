import { errors } from "undici-types";

const express = require("express")
const app = express()
const PORT = 3000;

app.listen(PORT, (error : Error | null) => {
    if(error){
        console.log("Erro ao iniciar servidor")
        return;
    }

    console.log("Servidor iniciado")
})