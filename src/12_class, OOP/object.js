/////Case #1
const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
    return action;
}

const action1=deleteUser('1238192384')
const action2=deleteUser('55555555')

// console.log(action1)
// console.log(action2)



/////Case #2
/////к более умным объектам

function hello(){
    // console.log(`I am ${this.name} from ${this.site}`)
}
const userFabric=(name)=>{
    const user = {
      name:name,
        site: 'it-incubator.ru',
        dateOfBirth: new Date(1983,4,9),
        hello: hello
    }
    return user;
}

const u1 = userFabric("Maksim")
const u2 = userFabric("Hanna")

// u1.hello()
// u2.hello()
//уходим от фабрик в прототитпное наследование

