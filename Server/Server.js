import express from 'express'
import cors from 'cors'
import { conectionMongo } from '../DataBase/conection.js'
import { routes } from '../Routes/Routes.js'

export class Server {
    constructor() {
        this.app = express()
        this.activateBody()
        this.conectionBD()
        this.meetRequests()
    }
    activateBody() {
        this.app.use(express.json())
        this.app.use(cors())
    }
    wakeServer() {
        const PORT = process.env.PORT || PORT
        this.app.listen(PORT, () => {
            console.log(`Server on ${PORT}`)
        })
    }
    conectionBD = () => conectionMongo()
    meetRequests = () => this.app.use('/', routes)
}