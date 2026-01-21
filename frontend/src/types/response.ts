export interface ResponseMessage {
    status: string
    message: string
}

export interface ResponseDataPagination<T> {
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

export interface ResponseData<T> {
    result: T,
    status: string
}