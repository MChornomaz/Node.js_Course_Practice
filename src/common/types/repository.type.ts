interface Repository<T = unknown> {
    findByName?: (payload: string) => Promise<T>
    findById?: (payload: string) => Promise<T>
    findAll?: () => Promise<T[]>
    create?: (payload: any) => Promise<T>
    update?: (id: string, data: any) => Promise<T>
    delete?: (payload: string) => Promise<T>
}

export { type Repository }
