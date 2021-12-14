export type ManType = {
    name: string
    age:number
}

const people: Array<ManType> = [
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

function dimychTransformator(man:ManType) {
    return {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
}

const devs1 = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Andrey', lastName: 'Ivanov'
    }
]

const devs2=[
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3=people.map(dimychTransformator)
const dev4=people.map(man=>({stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]}))

const messages = devs3.map(m=>{
    return (
        `Welcome to IT-INC, mr.${m.firstName}!`
    )
})

console.log(messages)

