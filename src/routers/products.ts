
import { Router } from "express";
const router = Router();

router.get("/", (req , res ) => {
    res.send("GET solicitação")
})

router.post("/api/create", (req , res ) => {
    res.send("Post solicitação")
})

router.put("/api/update/:id", (req  , res ) => {
    const {id} = req.params;
    res.send(`PUT solicitação, ${id}`)
})

router.delete("/api/delete/:id", (req , res ) => {
    const {id} = req.params;
    res.send(`DELETE solicitação, ${id}`)
})

export {router}