import axios from "axios";

/*function findUserInDB(userId: number) {
    return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        responseType: "json",
        withCredentials: true,
    }))
}*/

/*const promise2 = findUserInDB(6)
const promise2_2=promise2.then((user)=>{return user.data.name})
promise2_2.then(name=>console.log(name))*/

////////////////////////////так никто не пишет, пишут по другому:

/*
findUserInDB(6)
    .then(user=>user.data.name)
    .then(name=>console.log(name))
*/

///////////////////////////


axios.get('https://jsonplaceholder.typicode.com/albums/8/photos', {
    responseType: "json",
    withCredentials: true,
})
    .then(resp=>resp.data)
    .then(data=>console.log(data))

const getTitleFromAlbumByID = (albumID:number, index:number)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumID}/photos`, {
        responseType: "json",
        withCredentials: true,
    }).then(resp=>resp.data)
        .then(data=>data[index].title)
}

getTitleFromAlbumByID(8,10).then(title=>console.log(title))











// just a plug
export default function foo() {
};