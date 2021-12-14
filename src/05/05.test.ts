import {ManType} from "./05";


let people: Array<ManType> = []

beforeEach(() => {
    people = [

        {
            name: 'Andrey Ivanov',
            age: 33
        },
        {
            name: 'Aleksandr Petrov',
            age: 24
        },
        {
            name: 'Dmitry Sidorov',
            age: 18
        }
    ]
})

test.skip('should get array of greeting messages', () => {

    const getGreetMessage = (people:Array<ManType>)=>{return people.map(man => `Welcome to IT-INC, mr. ${man.name.split(' ')[0]}!`)}
    const messages = getGreetMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Welcome to IT-INC, mr. Andrey!')
    expect(messages[1]).toBe('Welcome to IT-INC, mr. Aleksandr!')
    expect(messages[2]).toBe('Welcome to IT-INC, mr. Dmitry!')

})