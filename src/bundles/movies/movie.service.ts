import { type Service } from '../../common'
import { type GenreRepository } from '../genres/genre.repository'
import { type IMovieData, type IMovie, type MovieModel } from './movie.model'
import { type MovieRepository } from './movie.repository'

class MovieService implements Service {
    private readonly movieRepository: MovieRepository
    private readonly genreRepository: GenreRepository

    public constructor (movieRepository: MovieRepository, genreRepository: GenreRepository) {
        this.movieRepository = movieRepository
        this.genreRepository = genreRepository
    }

    public async findByID (payload: string): Promise<IMovie | null> {
        const movie = await this.movieRepository.findById(payload)

        if (movie !== null) {
            return movie
        }
        return null
    }

    public async findAll (): Promise<IMovie[]> {
        const movies = await this.movieRepository.findAll()
        return movies
    }

    public async findByGenre (genre: string): Promise<IMovie[]> {
        const existingGenre = await this.genreRepository.findByName(genre)

        if (existingGenre !== null) {
            const movies = await this.movieRepository.findByGenre(genre)
            return movies
        }

        return []
    }

    public async create (payload: IMovieData): Promise<typeof MovieModel | null> {
        const { genre, title } = payload
        const allGenres = await this.genreRepository.findAll()
        const genreNames = allGenres.map(genre => genre.name)

        const genresAreValid = genre.every((element) => genreNames.includes(element))
        const existingMovie = await this.movieRepository.findByName(title)

        if (existingMovie !== null) {
            return null
        } else {
            if (genresAreValid) {
                const createdMovie = await this.movieRepository.create(payload)
                return createdMovie
            } else {
                throw new Error('Unknown genre provided!')
            }
        }
    }

    public async update (id: string, data: Partial<IMovie>): Promise<IMovie | null> {
        const { genre } = data
        const allGenres = await this.genreRepository.findAll()
        const genreNames = allGenres.map(genre => genre.name)

        if (genre !== undefined) {
            const genresAreValid = genre.every((element) => genreNames.includes(element))

            if (!genresAreValid) {
                throw new Error('Unknown genre provided!')
            }
        }

        const movie = await this.movieRepository.update(id, data)

        if (movie !== null) {
            return movie
        }
        return null
    }

    public async delete (id: string): Promise<IMovie | null> {
        const genre = await this.movieRepository.delete(id)

        if (genre !== null) {
            return genre
        }
        return null
    }
}

export { MovieService }
