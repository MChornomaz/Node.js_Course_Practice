import { genreRepository } from '../genres/genre'
import { MovieModel } from './movie.model'
import { MovieRepository } from './movie.repository'
import { MovieService } from './movie.service'

export { type IMovie, MovieModel, type IMovieData } from './movie.model'

const movieRepository = new MovieRepository(MovieModel)
const movieService = new MovieService(movieRepository, genreRepository)

export { movieRepository, movieService }

export { movieRoute } from './movie.routes'
