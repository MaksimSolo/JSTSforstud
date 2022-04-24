// import axios from "axios";

// function findUserInDB(userId: number) {
//     return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//         responseType: "json",
//         withCredentials: true,
//     }))
// }

// const lastPromise = findUserInDB(1)
//     .then(user=>user.data.name)
//     .then(name=> {
//         console.log(name)
//         return 100
//     })
//     .then (number=> {
//         console.log(number)
//         return {value: number+1}
//     })
//     .then (obj=> {
//         console.log(obj.value)
//         const prom=Promise.resolve(obj.value+1)
//         return prom
//     })
//     .then (number=> {
//         console.log(number)
//         return number + 1
//     })
//     .then(console.log)


//////////////////////////////////////////
// const lastPromise2 = findUserInDB(1)
//     .then(user=>user.data.name)
//     .then(name=> {
//         console.log(name)
//         return 100
//     })
//     .then (number=> {
//         console.log(number)
//         return {value: number+1}
//     })
//     .then (obj=> {
//         console.log(obj.value)
//         const prom=findUserInDB(3)
//         return prom
//     })
//     .then (user=>user.data.name)
//     .then(console.log)
/////////////////////////////////////

//seeing CALLBACK HELL)))
// const lastPromise3 = findUserInDB(2)
//     .then(user=> {
//         console.log(user.data)
//         findUserInDB(user.data.id+1)
//             .then(user=> {
//                 console.log(user.data)
//                 findUserInDB(user.data.id+1)
//                     .then(user=>console.log(user.data))
//             })
//
//     })
////////////////////////////////


// const lastPromise4 = findUserInDB(2)
//     .then(user => {
//         console.log(user.data)
//         return findUserInDB(user.data.id + 1)
//     })
//     .then(user => {
//         console.log(user.data)
//         return findUserInDB(user.data.id + 1)
//     })
//     .then(user => console.log(user.data))
//////////////////////////////////////////


//using async/await


// async function lastPromise5() {
//     const user = await findUserInDB(2);
//     const user2 = await findUserInDB(user.data.id + 1)
//     const user3 = await findUserInDB(user2.data.id + 1)
//     console.log(user.data)
//     console.log(user2.data)
//     console.log(user3.data)
//     console.warn('All friends wee see!')
// };
// lastPromise5();

/////////////////////////////////////////








// just a plug
export default function foo() {
};