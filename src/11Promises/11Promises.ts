import axios from "axios";

console.log('lesson 14 Promises');

function findUserInDB(userId: number) {
    return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        responseType: "json",
        withCredentials: true,
    }))
}

const promise1 = axios.get('https://jsonplaceholder.typicode.com/albums/8/photos', {
    responseType: "json",
    withCredentials: true,
});
promise1.then((data) => {
    //console.log(data)
})


const promise2 = findUserInDB(7)
promise2
    .then((resp) => {
        //console.log(resp.data.name)
    })
    .catch(() => {
    })


//standard class Promise
//const anotherPromise = Promise.all([promise1,promise2])
const anotherPromise2 = Promise.allSettled([promise1, promise2])
//anotherPromise.then((results)=>{
//     const albumsUserData = results[0];
//     const userDataFromDB = results[1];
//     console.log(albumsUserData.data[8].title+':::::::'+userDataFromDB.data.name)
// }).catch(()=>{
//     console.log('Try later, my friend!!!!!!!!!!')
// })

anotherPromise2.then((results) => {
    // const albumsUserData = results[0].status === 'fulfilled' ? results[0].value.data : {data: null};
    // const userDataFromDB = results[1].status === 'fulfilled' ? results[1].value.data : {data: null}
    //console.log(albumsUserData[8].title + '----' + userDataFromDB.name)
})
    .catch((err) => {
        //console.log('Try later, my friend!!!!!!!!!!', err)
    })


console.log('Finita la comedia')


/////////////////////////////




// just a plug
export default function foo() {
};