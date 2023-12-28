import { GenreModel } from './genre.model'
import { GenreRepository } from './genre.repository'
import { GenreService } from './genres.service'
export { GenreModel, type IGenre } from './genre.model'

const genreRepository = new GenreRepository(GenreModel)
const genreService = new GenreService(genreRepository)

export { genreService, genreRepository }
export { genreRoute } from './genre.routes'
