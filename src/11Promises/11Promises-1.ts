//import axios from "axios";

// function findUserInDB(userId: number) {
//     return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         responseType: "json",
//         withCredentials: true,
//     }))
// }

// const promise1 = axios.get('https://jsonplaceholder.typicode.com/albums/8/photos', {
//     responseType: "json",
//     withCredentials: true,
// });
//
// const promise2 = findUserInDB(7)

/////////////

/*
const resolvedPromise = Promise.resolve([{}])
console.log(resolvedPromise)
resolvedPromise
    .then(data => console.log(data))
    .catch(err => console.warn(err))
*/

/*
const rejectedPromise=Promise.reject({message:'Some fatal error'})
console.log(rejectedPromise)

rejectedPromise
     .then(data=>console.log(data))
     .catch(err=>console.warn(err))
*/


//пока бекенд еще не полностью готов - сщздаем промис в состоянии резолв с некоторым временным! результатом.
const usersAPI = {
    getAllUsers() {
        return Promise.resolve([{name: "D"}, {name: 'N'}])
    },
    login (login: string,password:string) {
        if (login!=='123' && password!=='123') {
            return Promise.reject({message: 'Invalid password or login'})
        } else {
            return Promise.resolve({name:'Mirka', id: 12, avatarUrl:''})
        }
    }
}

//const prom = usersAPI.getAllUsers()
//prom.then(users=>console.log(users))


usersAPI.login('123', '44142')
    .then(data=>{
        //make redirect
    })
    .catch(err=>{
        //show error
    })






// just a plug
export default function foo() {
};