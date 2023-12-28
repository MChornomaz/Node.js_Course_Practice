import { type Repository } from '../../common'
import { GenreModel, type IGenre } from './genre.model'

class GenreRepository implements Repository {
    private readonly genreModel: typeof GenreModel

    public constructor (genreModel: typeof GenreModel) {
        this.genreModel = genreModel
    }

    async findByName (payload: string): Promise<IGenre | null> {
        const genre = await GenreModel.findOne({ name: payload }).lean()

        if (genre !== null) {
            return genre as IGenre
        }

        return null
    }

    async findByID (payload: string): Promise<IGenre | null> {
        const genre = await GenreModel.findById(payload)

        if (genre !== null) {
            return genre as IGenre
        }

        return null
    }

    async findAll (): Promise<IGenre[]> {
        const genres = await GenreModel.find()
        return genres
    }

    public async create (payload: string): Promise<typeof GenreModel | null> {
        const existingGenre = await this.findByName(payload)

        if (existingGenre === null) {
            const createdGenre = new GenreModel({
                name: payload
            })

            await createdGenre.save()
            return await createdGenre.toObject()
        }
        return null
    }

    async update (id: string, data: string): Promise<IGenre | null> {
        const selectedGenre = await this.findByID(id)
        if (selectedGenre !== null) {
            selectedGenre.name = data
            const result = await selectedGenre.save()
            return result
        }
        return null
    }

    async delete (id: string): Promise<IGenre | null> {
        const genre = await this.findByID(id)

        if (genre !== null) {
            const deletedGenre = await this.genreModel.deleteOne({ _id: id })

            if (deletedGenre.deletedCount > 0) {
                return genre
            }
        }

        return null
    }
}

export { GenreRepository }
