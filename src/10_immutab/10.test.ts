test('some reference type test', () => {
    const user = {
        name: 'Maksim',
        age: 38
    }

    let increaseAge = function (user: {
        name: string,
        age: number
    }) {
        user.age++;
    }

    increaseAge(user)

    expect(user.age).toBe(39)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    const users = [
        {
            name: 'Maks',
            age: 38
        },
        {
            name: 'Anna',
            age: 34
        }
    ]

    const admins = users
    admins.push({name: 'Bandygan', age: 10});

    expect(users[2]).toEqual({name: 'Bandygan', age: 10})
})

test('value type test', () => {
    const usersCount = 100;
    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;


    expect(usersCount).toBe(100)

})

test('object reference type test', () => {
    const user = {
        name: 'Maksim',
        age: 38,
        address: {
            title: 'Bryansk'
        }
    }
    //let addr = user.address

    const user2 = {
        name: 'Anna',
        age: 34,
        address: user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')


})

test('array reference type test', () => {
    const address = {
        title: "Bryansk"
    }

    const user = {
        name: 'Maksim',
        age: 38,
        address: address
    }
    const user2 = {
        name: 'Anna',
        age: 34,
        address: address
    }

    const users = [
        user, user2, {name: 'Kamilla', age: 4, address: address}
    ]

    const admins= [user,user2]

    admins[0].name = 'Maksimus'

    expect(users[0].name).toBe('Maksimus')
    expect(user.name).toBe('Maksimus')

})

function pasportist(letters:Array<string>) {
    letters.sort();
    console.log(letters)
}
test('sort array test',()=>{
    const letters = ['c','d','a','z','e']

    pasportist(letters)

    expect(letters).toEqual(['a','c','d','e','z'])
})