
import { Router } from "express";
import express from 'express'
const routerProduct = Router();

// Rotas da tabela products

routerProduct.get("/", (req: express.Request , res : express.Response ) => {
    res.send("GET solicitação")
})

routerProduct.post("/api/create", (req: express.Request , res : express.Response) => {
    res.send("Post solicitação")
})

routerProduct.put("/api/update/:id", (req: express.Request , res : express.Response ) => {
    const {id} = req.params;
    res.send(`PUT solicitação, ${id}`)
})

routerProduct.delete("/api/delete/:id", (req: express.Request , res : express.Response ) => {
    const {id} = req.params;
    res.send(`DELETE solicitação, ${id}`)
})

export {routerProduct}