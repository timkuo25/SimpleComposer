import mongoose from 'mongoose'
import dotenv from 'dotenv-defaults'
import api from './router/api/api.js'
import {db} from './mongo.js'

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', api)

const port = process.env.PORT || 4000

dotenv.config()
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => console.log("mongo db connection created."))

db.on('error', err => console.log(err))
db.once('open', async () => {
    console.log("use db to perform actions")
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})