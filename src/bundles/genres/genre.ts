import { GenreModel } from './genre.model'
import { GenreRepository } from './genre.repository'
import { GenreService } from './genres.service'

const genreRepository = new GenreRepository(GenreModel)
const genreService = new GenreService(genreRepository)

export { genreService, genreRepository }
export { GenreModel, type IGenre } from './genre.model'
export { genreRoute } from './genre.routes'
