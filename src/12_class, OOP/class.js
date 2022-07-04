/////Case #1
class DeleteUserActionClass {
    constructor(userId) {
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }
}


const action5 = new DeleteUserActionClass(91565165)
const action6 = new DeleteUserActionClass(777777)

// console.log(action5)
// console.log(action6)

/////Case #2
// class UserClass {
//     constructor(name, site, dob) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//     }
//     hello () {
//         console.log(`I am ${this.name} from ${this.site}`)
//     }
// }
//
// const u5 = new UserClass('Maksim','incubator', new Date(1983,9,4))
// const u6 = new UserClass('Hanna','kamasutra', new Date(1987,9,30))
//
// u5.hello()
// u6.hello()
//
// console.log(UserClass.prototype)
// console.log(u6.hello === UserClass.prototype.hello)  //true!

//Рассмотрим свойства классов
//1. Создание однотипных объектов
/////////
// class UserClass {
//     constructor(name, site, dob) {
//         this.name = name;
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//     }
//
//     hello() {
//         debugger
//         this.counter++;
//         console.log(`I am ${this.name} from ${this.site}`)
//     }
// }
//
// const u5 = new UserClass('Maksim', 'incubator', new Date(1983, 9, 4))
// const u6 = new UserClass('Hanna', 'kamasutra', new Date(1987, 9, 30))
//
// u5.hello()
// u6.hello()
// console.log(u5.counter)  //1
// console.log(u6.counter)   //1
//
// u5.hello()
// console.log(u5.counter) //2
// console.log(u6.counter) //1

// OOP - 1.инкапсуляция - означает что в классе уже определены все необходимые свойства и
///методы, и менять свойства можно только используя внутренние методы
//снаружи нельзя вносить изменения, есть понятие приватности.
//наппример name - не лезь напрямую к нему

// class UserClass {
//     _name = '';
//     constructor(name, site, dob) {
//         //this.name = name; //- обычное написание
//         this._name = name //- приватное написание
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//     }
//     hello() {
//         debugger
//         this.counter++;
//         console.log(`I am ${this._name} from ${this.site}`)
//     }
// }
//
// const u5 = new UserClass('Maksim', 'incubator', new Date(1983, 9, 4))
// const u6 = new UserClass('Hanna', 'kamasutra', new Date(1987, 9, 30))

//console.log(u5.name) //так нельзя
// console.log(u5._name) //так тоже нельзя  - Private field '_name' must be declared in an enclosing class (at class.js:95:15)
// console.log(u5.hello()) // только так использовать это свойство
// либо еще есть геттеры и сеттеры, когда мы хотим его считывать:

// class UserClass {
//     _name = '';
//     constructor(name, site, dob) {
//         //this.name = name; //- обычное написание
//         this._name = name //- приватное написание
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//     }
//     getName(){ //назначили метод специально для доставания имени
//         return this._name
//     }
//     setName(newValue){ //назначили метод специально для изменения имени
//         this._name=newValue //этим мы контролируем процесс установки значения в то которое нужно
//     }
//     hello() {
//         debugger
//         this.counter++;
//         console.log(`I am ${this._name} from ${this.site}`)
//     }
// }
// const u5 = new UserClass('Maksim', 'incubator', new Date(1983, 9, 4))
// const u6 = new UserClass('Hanna', 'kamasutra', new Date(1987, 9, 30))
//
// console.log(u5.getName())
//
// u6.setName('Marianna')
// console.log(u6.getName())

////а нам бы хотелось присваивать проще но сохранить контроль. Тогда:
//
// class UserClass {
//     _name = '';
//     constructor(name, site, dob) {
//         //this.name = name; //- обычное написание
//         this._name = name //- приватное написание
//         this.site = site;
//         this.dateOfBirth = dob;
//         this.counter = 0;
//     }
//     get name(){ //дали геттеру название name
//         return this._name
//     }
//     set name(newValue){ //дали сеттеру название name
//         this._name=newValue //этим мы контролируем процесс установки значения в то которое нужно
//     }
//     hello() {
//         debugger
//         this.counter++;
//         console.log(`I am ${this._name} from ${this.site}`)
//     }
// }
// const u5 = new UserClass('Maksim', 'incubator', new Date(1983, 9, 4))
// const u6 = new UserClass('Hanna', 'kamasutra', new Date(1987, 9, 30))
//
// u5.name = 'Alekseiy'
// console.log(u5.name)

////OOP - 2. наследование: когда у нас на основании класса созданы
//экземпляры, с которыми мы выполняем необходимые действия не обращаясь больше
//к самому классу

class UserClass {
    _name = '';

    constructor(name, site, dob) {
        //this.name = name; //- обычное написание
        this._name = name //- приватное написание
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    get name() { //дали геттеру название name
        return this._name
    }

    set name(newValue) { //дали сеттеру название name
        this._name = newValue //этим мы контролируем процесс установки значения в то которое нужно
    }

    hello() {
        this.counter++;
        console.log(`I am ${this._name} from ${this.site}`)
    }
}

const u5 = new UserClass('Maksim', 'incubator', new Date(1983, 9, 4))
const u6 = new UserClass('Hanna', 'kamasutra', new Date(1987, 9, 30))

u5.name = 'Alekseiy'
//console.log(u5.name)
//let users = [u5, u6]
//users.forEach(u => u.hello())

//теперь допустим нам нужно добавить всем usersам свойство быть программерами
//начинаем наследование):

// class Coder extends UserClass {
//     constructor(name, site, dob, tech) { //вот здесь я обязан сначала вызвать конструктор ЮзерКласса словом super
//         super(name, site, dob,);
//         this.tech = tech; //добавляем свойство tech
//     }
//
//     code() {
//         console.log(`I am ${this.name},thats my ${this.tech} code: a=b+c)))`)
//     }
// }
//
// const coder1 = new Coder('Maksim', 'terminator.rf', new Date(1955, 5, 5), 'Python')
// coder1.hello()
// //coder1 является экземпляром класса Кодер, а класс Кодер наследуется от
// //класса UserClass , значит доступны все методы
// coder1.code()

//еще нюанс - мы можем переопределить поведение метода hello, не трогая родительское поведение!!!
class Coder extends UserClass {
    constructor(name, site, dob, tech) { //вот здесь я обязан сначала вызвать конструктор ЮзерКласса словом super
        super(name, site, dob,);
        this.tech = tech; //добавляем свойство tech
    }

    code() {
        console.log(`I am ${this.name},thats my ${this.tech} code: a=b+c)))`)
    }

    hello() { //отнаследовали изменили
        super.hello();
        console.log('get out! dumb asshole...')
    }
}

const coder1 = new Coder('Maksim', 'terminator.rf', new Date(1955, 5, 5), 'Python')
//coder1.hello()



// class Hacker extends Coder {
//     constructor(a, c, v, b) {
//         super();
//         this.tech = 'XXX'
//         this._name = 'XXXXXXXX'
//     }
//     code () {
//         console.log('I will hack everything')
//     }
//
// }
// const hacker1 = new Hacker('Maksim', 'terminator.rf', new Date(1955, 5, 5), 'Python')
// // hacker1.hello()
// // hacker1.code()
//
// //////OOP - 3. Полиморфизм
//
// let users= [u5,u6,coder1,hacker1]
// users.forEach(u=>u.hello()) //все здороваются по разному,
//хотя они все экземпляры одной сущности!!!!!



////////принцип подстановки Барбары Лисков
//например мы хотим переопределить hello

class Hacker extends Coder {
    constructor(a, c, v, b) {
        super();
        this.tech = 'XXX'
        this._name = 'XXXXXXXX'
    }
    code () {
        console.log('I will hack everything')
    }
    hello (){
        throw new Error( 'I am DarkHacker')
    }

}
const hacker1 = new Hacker('Maksim', 'terminator.rf', new Date(1955, 5, 5), 'Python')

// и вот теперь скорее всего часть кода которая использоваала все экземпляры
// просто упадет и не будет адекватно работать

let users= [u5,u6,coder1,hacker1]
users.forEach(u=>u.hello())

//или напрмиер с длиной массива
//где то поменяли длину массива  - и  теперь легла вся итерация
// то есть нельзя так делать

/////////////////////////////////////
// ABout React Component
class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }
 render() {
     return 'it-kamasutra-subscribe'
 }
}

////есть библиотека REACT
// и если мы отрисовали где то тегом <ProfilePage age={1}/>
// реакт внутри себя создает с помощью new экземпляр и запоминает его
//const comp1 = new ProfilePage ({age:1})
//const jsx= comp1.render()
//jsx=>html
//comp1.componentDidMount();

//потом когда что то поменялось в стейте например:
//comp1.shouldComponentUpdate(){ true? false?
//const newJsx = comp1.render()
//jsx=>html
//comp1.componentDidUpdate();
//}

