import { allRouters } from "./routers/index";
import express from "express";
import cors from "cors";

// Configuração do servidor

const app: express.Application = express();
const PORT: number = 3000;

app.use(cors());

// Middleware para interpretar JSON
app.use(express.json());

// Configurações de rotas
allRouters(app);

// Inicar o servidor na port 3000
app.listen(PORT, () => {
  console.log("Servidor iniciado");
});

// nodemon --watch 'src/' --exec 'npx ts-node' src/app.ts
