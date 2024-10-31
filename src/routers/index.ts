import {router} from './products'

const allRouters = (app : any) => {
    app.use(router)

}

export {allRouters}