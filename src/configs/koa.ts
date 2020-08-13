import { Middleware } from 'koa'

export default class KoaConfig {
    routes: Map<string, Middleware> = new Map()

    constructor(options: Partial<KoaConfig>) {
        Object.assign(this.routes, options.routes)
    }
}
