import { Router } from "express";
import { getUsers } from "../controllers/user";
import express from 'express'
const routerUser = Router();

// Rotas da tabela user

routerUser.get("/api/users", getUsers)

export {routerUser};