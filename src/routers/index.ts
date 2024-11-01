import {routerProduct} from './products'
import { routerUser } from './user'
import express from 'express'

//Configuração rotas
const allRouters = (app : express.Application) => {
    app.use(routerProduct)
    app.use(routerUser)

}

export {allRouters}