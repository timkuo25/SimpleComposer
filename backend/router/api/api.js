import express from 'express'
import {addUser, queryUser, updateUser} from '../../mongo.js'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()

router.post('/', async (req, res) => {
    const data = req.body
    const query = await queryUser(data.user)
    const id = uuidv4()

    if (query === null){
        await addUser(id, data.user, data.key, data.octave, data.sheet)
        res.send("Data added!")
    }
    else{
        await updateUser(data.user, data.key, data.octave, data.sheet)
        res.send("Data saved!")
    }
})

router.get('/', async (req, res) => {
    const query = await queryUser(req.query.user)

    if (query === null){
        res.send("User not found")
    }
    else {
        res.json(query)
    }
})

export default router