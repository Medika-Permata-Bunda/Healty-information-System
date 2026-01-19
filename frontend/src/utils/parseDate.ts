export function ParseDate(date: string): string {
    const slice: string[] = date.split("T")

    return slice[0]
}