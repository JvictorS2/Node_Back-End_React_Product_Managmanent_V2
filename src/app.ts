import {allRouters} from './routers/index'
import express from "express";
import cors from 'cors';

// Configuração do servidor

const app : express.Application = express()
const PORT : number = 3000;

app.use(cors())
allRouters(app)

app.listen(PORT, () => {

    console.log("Servidor iniciado")
})
