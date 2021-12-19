/*const user = {
    name: "Maksim",
    age: 38,
    lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
    address: {
        street: {
            title: "Butlerova street",
            dom: 9
        }
    }
}*/
console.log(user)

user.address.street.title                 //'Butlerova street'
user['address']['street']['title']        //'Butlerova street'

const user = {
    'name': "Maksim",
    'age': 38,
    'lessons': [{title: '1'}, {title: '2'}, {title: '3'}],
    'address': {
        'street': {
            'title': "Butlerova street",
            'dom': 9
        }
    }
}

const city = {}
city.title = 'Bryansk'
city['citizensNumber'] = 500000
//{title: 'Bryansk', citizensNumber: 500000}

/*const users = ['Maksim', 'Anna', 'Miroslav', 'Kamilla']
users[0]   //'Maksim'
users['0']  //'Maksim'

users['map'](u=>u.toUpperCase())*/
//['MAKSIM', 'ANNA', 'MIROSLAV', 'KAMILLA']

//const users = ['Maksim', 'Anna', 'Miroslav', 'Kamilla']
const userObj = {
    0:'Maksim',
    1:'Anna',
    2: 'Miroslav',
    3: 'Kamilla'
}
userObj["0"] //'Maksim'
userObj[0] //'Maksim'

let a={1:1}
//{1: 1}

userObj[0] = 'MaksimSolo'
//{0: 'MaksimSolo', 1: 'Anna', 2: 'Miroslav', 3: 'Kamilla'}


userObj[table]='brown' //формируется ключ! Функция table, пустая, в результате выполнения которой выведется строка 'brown'
/*0: "MaksimSolo"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
function table() { [native code] }: "brown"*/

userObj['table']='brown'
/*
{0: 'MaksimSolo', 1: 'Anna', 2: 'Miroslav', 3: 'Kamilla', function table() { [native code] }: 'brown', table: 'brown'}
0: "MaksimSolo"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
function table() { [native code] }: "brown"
table: "brown"*/

userObj['привет как дела'] = "Хорошо"

Object.keys(users) //возвращает массив
/*0: "0"
1: "1"
2: "2"
3: "3"*/
Object.values(users) //возвращает массив
/*
0: "Maksim"
1: "Anna"
2: "Miroslav"
3: "Kamilla"*/

Object.keys(userObj) //возвращает массив
/*
0: "0"
1: "1"
2: "2"
3: "3"
4: "function table() { [native code] }"
5: "table"
6: "привет как дела"*/
Object.values(userObj)  //возвращает массив
/*0: "MaksimSolo"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
4: "brown"
5: "brown"
6: "Хорошо"*/

users[{}] = 'hello'
/*0: "Maksim"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
[object Object]: "hello"*/

userObj[{}] = 'hello'
/*0: "MaksimSolo"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
[object Object]: "hello"
function table() { [native code] }: "brown"
table: "brown"
привет как дела: "Хорошо"*/

userObj[{name:'Maksim'}] // [object Object]: "hello" //все равно

userObj[{name:'Maksim', toString(){return 'blabla'}}]= 'value blabla'
/*
0: "MaksimSolo"
1: "Anna"
2: "Miroslav"
3: "Kamilla"
    [object Object]: "hello"
blabla: "value blabla"
function table() { [native code] }: "brown"
table: "brown"
привет как дела: "Хорошо"*/
