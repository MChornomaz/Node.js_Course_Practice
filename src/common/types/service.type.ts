interface Service<T = unknown> {
    find?: (payload: Record<string, unknown>) => Promise<T>
    findById?: (payload: Record<string, unknown>) => Promise<T>
    findAll?: () => Promise<T[]>
    create?: (payload: any) => Promise<T>
    update?: (id: string, data: any) => Promise<T>
    delete?: (id: string) => Promise<T>
}

export { type Service }
