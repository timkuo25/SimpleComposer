import mongoose from 'mongoose'
import User from './models/user.js'

const db = mongoose.connection

const addUser = async (id, name, key, octave, sheet) => {
    const existing = await User.findOne({name})
    if (existing) throw new Error(`user ${name} exists!!`)
    try{
        const newUser = new User({id, name, key, octave, sheet})
        console.log("Created user", newUser)
        return newUser.save()
    } catch(e) {throw new Error("User creation error: " + e)}
}

const updateUser = async (name, key, octave, sheet) => {
    const doc = await User.findOne({name})
    try{
        doc.key = key
        doc.octave = octave
        doc.sheet = sheet
        await doc.save()
        console.log("Data saved!")
        return 
    } catch(e) {throw new Error("User update error: " + e)}
}

const deleteDB = async () => {
    try{
        await User.deleteMany({})
        console.log("DB deleted")
    } catch(e){ throw new Error("DB deletion failed")}
}

const queryUser = async (name) => {
    try{        
        const result = await User.findOne({name})
        return result
    } catch(e) {throw new Error("User query error: " + e)}
}

export {db, addUser, deleteDB, queryUser, updateUser}