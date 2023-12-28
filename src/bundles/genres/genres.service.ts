import { type Service } from '../../common'
import { type IGenre, type GenreModel } from './genre.model'
import { type GenreRepository } from './genre.repository'

class GenreService implements Service {
    private readonly genreRepository: GenreRepository

    public constructor (genreRepository: GenreRepository) {
        this.genreRepository = genreRepository
    }

    public async create (payload: string): Promise<typeof GenreModel | null> {
        const createdGenre = await this.genreRepository.create(payload)

        if (createdGenre !== null) {
            return createdGenre
        }
        return null
    }

    public async findByID (payload: string): Promise<IGenre | null> {
        const genre = await this.genreRepository.findByID(payload)

        if (genre !== null) {
            return genre
        }
        return null
    }

    public async findAll (): Promise<IGenre[]> {
        const genres = await this.genreRepository.findAll()
        return genres
    }

    public async update (id: string, data: string): Promise<IGenre | null> {
        const genres = await this.genreRepository.update(id, data)

        if (genres !== null) {
            return genres
        }
        return null
    }

    public async delete (id: string): Promise<IGenre | null> {
        const genre = await this.genreRepository.delete(id)

        if (genre !== null) {
            return genre
        }
        return null
    }
}

export { GenreService }
