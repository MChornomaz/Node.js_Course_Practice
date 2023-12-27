import mongoose, { type Model, Schema, type Document } from 'mongoose'

interface IGenre extends Document {
    name: string
}

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const GenreModel: Model<IGenre> = mongoose.model<IGenre>('Genre', genreSchema)

export { GenreModel, type IGenre }
