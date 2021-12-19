export const usersObj = {
    '0': 'Maksim',
    '1': 'Anna',
    '2': 'Miroslav',
    '3': 'Kamilla'
}

export type UsersType = {
    [key:string]: {id: number, name:string}
}
export const users: UsersType = {
    '20934': {id: 20934, name: 'Maksim'},
    '3985938': {id: 3985938, name: 'Anna'},
    '574839': {id: 574839, name: 'Miroslav'},
    '9183': {id: 9183, name: 'Kamilla'}
}
//найти например объект с id =3985938:
//users[3985938]
let user ={id:100500, name:'Igor'}
users[user.id] = user; //добавить
delete users[user.id] // удалить
users[user.id].name = 'Viktor' //обновить позицию


export const usersArray = [
    {id: 20934, name: 'Maksim'},
    {id: 3985938, name: 'Anna'},
    {id: 574839, name: 'Miroslav'},
    {id: 9183, name: 'Kamilla'}
]
//найти например обект с id =3985938:
//usersArray.find(u=>u.id=== 3985938)

//usersArray.push(user) //добавить мутабельно
//const usersCopy = [...usersArray.filter(), user]  //добавить иммутабельно
//const usersArray = usersArray.filter(u=>u.id !== user.id) //удалить



