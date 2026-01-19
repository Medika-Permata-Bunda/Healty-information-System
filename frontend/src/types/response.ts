export interface ResponseData<T> {
    result: T,
    meta: Meta
}

interface Meta {
    total_data: number,
    page: number,
    size: number,
    previous: string | null,
    next: string | null
}