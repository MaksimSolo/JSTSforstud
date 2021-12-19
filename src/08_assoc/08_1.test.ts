
type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(()=>{
    users = {
        '20934': {id: 20934, name: 'Maksim'},
        '3985938': {id: 3985938, name: 'Anna'},
        '574839': {id: 574839, name: 'Miroslav'},
        '9183': {id: 9183, name: 'Kamilla'}
    }
})
test('update name of user', ()=>{
    users[574839].name = "Miro"
    expect(users[574839].name).toBe('Miro')
    expect(users[574839]).toStrictEqual({id: 574839, name: 'Miro'})
})

test('delete user', ()=>{

    delete users['3985938']

    expect(users['3985938']).toBe(undefined)
    expect(Object.keys(users).length).toBe(3)
})



