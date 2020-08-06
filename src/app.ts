import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import * as controllers from './application/controller'
import * as bodyParser from 'koa-bodyparser'
import middlewareLogger from './application/middleware/logger'

(async () => {
    const app = createKoaServer({
        routePrefix: '/api',
        controllers: Object.values(controllers),
    })

    app.use(middlewareLogger())
    app.use(bodyParser())

    app.listen(3000, () => {
        console.log('listen on 3000 port')
    })
})()
