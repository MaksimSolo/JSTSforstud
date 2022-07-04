
/////Case #1
function DeleteUserAction (userId) {
    this.type = 'DELETE-USER';
    this.payload = {
        userId: userId
    }
}
//создаем объект с помощью конструктора
const action3= new  DeleteUserAction(91565165)
const action4= new  DeleteUserAction(777777)

// console.log(action3)
// console.log(action4)

////Case #2

function User (name,site,dob) {
    this.name = name;
    this.site = site;
    this.dateOfBirth = dob;
}
User.prototype.hello = function (){
    // console.log(`I am ${this.name} from ${this.site}`)
}

const u3=new User('Maksim','incubator', new Date(1983,9,4))
const u4=new User('Hanna','kamasutra', new Date(1987,9,30))

// u3.hello()
// u4.hello()