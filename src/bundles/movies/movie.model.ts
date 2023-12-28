import mongoose, { type Model, Schema, type Document } from 'mongoose'
import { type IGenre } from '../genres/genre.model'

interface IMovie extends Document {
    title: string
    director: string
    description: string
    releaseDate: Date
    genre: Array<IGenre['name']>
}

interface IMovieData {
    title: string
    director: string
    description: string
    releaseDate: Date
    genre: string[]
}

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    genre: [
        {
            type: String,
            ref: 'Genre',
            required: true
        }
    ]
})

const MovieModel: Model<IMovie> = mongoose.model<IMovie>('Movie', movieSchema)

export { MovieModel, type IMovie, type IMovieData }
