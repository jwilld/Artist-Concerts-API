import { Schema, model } from '../db/connection';

const Artist = new Schema({
    name: String
})


export default model('Artist',Artist)