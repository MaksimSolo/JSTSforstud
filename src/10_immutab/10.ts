export type UserType = {
    name: string
    hair: number
    address: { title: string }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}

export let moveUser = (u: UserType, newTitle: string) => {
    const copy = {...u, address: {...u.address}};
    copy.address.title = newTitle;
    return copy
}

export let moveUser2 = (u: UserWithLaptopType, newTitle: string) => {
    const copy = {...u, address: {...u.address, title: newTitle}};
    return copy
}

export let upgradeUser = (u: UserWithLaptopType, newTitle: string) => {
    const copy = {...u, laptop: {...u.laptop, title: newTitle}};
    return copy
}

export let addBookToUser = (u: UserWithBooksType, newBook: string) => {
 return (
     {...u, books: [...u.books, newBook]}
 )
}
export let updateBookToUser = (u: UserWithBooksType, newBook: string) => {
    const copy ={...u, books: [...u.books]}
    copy.books.splice(3, 1,newBook)
    const result = copy;
    return result
}






