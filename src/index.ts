import Koa from 'koa'
import Express from 'express'
import portscanner from 'portscanner'
// import map from 'lodash/map'

export * as ExpressConfig from './configs/express'
export * as KoaConfig from './configs/koa'

export const findPort = async () => portscanner.findAPortNotInUse(
    3000,
    3999,
    '127.0.0.1'
)

type callback = (
    port: number,
    type: 'Express' | 'Koa'
) => any

class KoaPress {
    apps = {
        koa: new Koa(),
        express: Express()
    }

    async listen(callback: callback) {
        const expressPort = await findPort()
        this.apps.express.listen(
            expressPort,
            callback(
                expressPort,
                'Express',
            ),
        )

        const koaPort = await findPort()
        this.apps.koa.listen(
            koaPort,
            callback(
                koaPort,
                'Koa',
            ),
        )
    }
}

export default KoaPress
