import {
    addBookToUser,
    moveUser,
    moveUser2,
    updateBookToUser,
    upgradeUser,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
} from "./10";

let makeHairStyle = (u: UserType, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}


test('some reference type test', () => {
    let user = {
        name: 'Maksim',
        hair: 1000,
        address: {title: 'Bryansk'}
    }

    const cutUser = makeHairStyle(user, 2)

    user.address.title = 'kiiv'


    expect(user.hair).toBe(1000)
    expect(cutUser.hair).toBe(500)
    expect(cutUser.address === user.address).toBe(true)
    expect(cutUser.address.title).toBe('kiiv')
})

test('change address, move user', () => {
    let user = {
        name: 'Maksim',
        hair: 1000,
        address: {title: 'Bryansk'}
    }

    let movedUser = moveUser(user, 'kiiv')

    expect(user.address.title).toBe('Bryansk')
    expect(movedUser.address.title).toBe('kiiv')

})

test('user with laptop', () => {
        let user: UserWithLaptopType = {
            name: 'Maksim',
            hair: 1000,
            address: {title: 'Bryansk'},
            laptop: {title: 'zenbook'}
        }

        let movedUser = moveUser2(user, 'kiiv')

        expect(user.address.title).toBe('Bryansk')
        expect(movedUser.address.title).toBe('kiiv')
        expect(movedUser.address).not.toBe(user.address)
        expect(movedUser.laptop).toBe(user.laptop)
    }
)

test('upgrade laptop to macbook', () => {
        let user: UserWithLaptopType = {
            name: 'Maksim',
            hair: 1000,
            address: {title: 'Bryansk'},
            laptop: {title: 'zenbook'}
        }

        let upgradedUser = upgradeUser(user, 'macbook')

        expect(user.laptop.title).toBe('zenbook')
        expect(upgradedUser.laptop.title).toBe('macbook')
        expect(upgradedUser.laptop).not.toBe(user.laptop)
        expect(user.address).toBe(upgradedUser.address)
    }
)

test('add new books', () => {
        let user: UserWithBooksType = {
            name: 'Maksim',
            hair: 1000,
            address: {title: 'Bryansk'},
            laptop: {title: 'zenbook'},
            books: ['react', 'html', 'css', 'redux']
        }

        let addedBookUser = addBookToUser(user, 'History of USSR')

        expect(user.books.length).not.toBe(addedBookUser.books.length)
        expect(addedBookUser.books.length).toBe(5)
        expect(addedBookUser.books[4]).toBe('History of USSR')
        expect(addedBookUser.books.length).toBe(5)
        expect(addedBookUser.books).not.toBe(user.books)
    }
)

test('update user books', () => {
        let user: UserWithBooksType = {
            name: 'Maksim',
            hair: 1000,
            address: {title: 'Bryansk'},
            laptop: {title: 'zenbook'},
            books: ['react', 'html', 'css', 'redux']
        }

        let updatedBookUser = updateBookToUser(user, 'History of USSR')

        expect(updatedBookUser.books.length).toBe(user.books.length)
        expect(updatedBookUser.books[3]).toBe('History of USSR')
        expect(user.books[3]).toBe('redux')
    }
)


