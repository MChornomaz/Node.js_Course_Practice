import { type Repository } from '../../common'
import { type IMovie, MovieModel, type IMovieData } from './movie.model'

class MovieRepository implements Repository {
    private readonly movieModel: typeof MovieModel

    public constructor (movieModel: typeof MovieModel) {
        this.movieModel = movieModel
    }

    async findById (id: string): Promise<IMovie | null> {
        const movie = await MovieModel.findById(id)

        if (movie !== null) {
            return movie as IMovie
        }

        return null
    }

    async findByName (payload: string): Promise<IMovie | null> {
        const movie = await MovieModel.findOne({ title: payload }).lean()

        if (movie !== null) {
            return movie as IMovie
        }

        return null
    }

    async findByGenre (payload: string): Promise<IMovie[]> {
        const movies = await MovieModel.find({
            genre: payload
        }).lean()

        return movies as IMovie[]
    }

    async findAll (): Promise<IMovie[]> {
        const movies = await MovieModel.find()
        return movies
    }

    public async create (payload: IMovieData): Promise<typeof MovieModel | null> {
        const { title, description, releaseDate, genre, director } = payload
        const existingMovie = await this.findByName(payload.title)

        if (existingMovie === null) {
            const createdMovie = new MovieModel({
                title, director, description, releaseDate, genre
            })

            await createdMovie.save()
            return await createdMovie.toObject()
        }
        return null
    }

    async update (id: string, data: Partial<IMovie>): Promise<IMovie | null> {
        const { title, director, description, releaseDate, genre } = data

        const selectedMovie = await this.findById(id)

        if (selectedMovie !== null) {
            if (title !== undefined) {
                selectedMovie.title = title
            }
            if (director !== undefined) {
                selectedMovie.director = director
            }
            if (description !== undefined) {
                selectedMovie.description = description
            }
            if (releaseDate !== undefined) {
                selectedMovie.releaseDate = releaseDate
            }
            if (genre !== undefined) {
                selectedMovie.genre = genre
            }

            const result = await selectedMovie.save()

            return result
        }

        return null
    }

    async delete (id: string): Promise<IMovie | null> {
        const movie = await this.findById(id)

        if (movie !== null) {
            const deletedMovie = await this.movieModel.deleteOne({ _id: id })

            if (deletedMovie.deletedCount > 0) {
                return movie
            }
        }

        return null
    }
}

export { MovieRepository }
