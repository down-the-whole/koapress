import { Request, Response } from 'express'

type ExpressAsyncController = (req: Request, res: Response) => Promise<any>

type ExpressSyncController = (req: Request, res: Response) => void

export default class ExpressConfig {
    routes: Map<
        string, 
        ExpressAsyncController | ExpressSyncController
    > = new Map()

    constructor(options: Partial<ExpressConfig>) {
        Object.assign(this.routes, options.routes)
    }
}

