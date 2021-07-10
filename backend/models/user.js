import mongoose from 'mongoose'

const Schema = mongoose.Schema
const UserSchema = new Schema({
    id: String,
    name: String,
    key: String,
    octave: String,
    sheet: [[{id: Number, chord: String}]]
})

const User = mongoose.model('User', UserSchema)

export default User