import axios from "axios";

function findUserInDB(userId: number) {
    return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        responseType: "json",
        withCredentials: true,
    }))
}

// findUserInDB(10)
//     .then(user => {
//         console.log(user.data.name)
//         return user.data.id + 1
//     })
//     .then(user2ID => {
//         return findUserInDB(user2ID)
//     })
//     .catch(() => {
//         return {
//             data: {
//                 id: 7777777777,
//                 name: 'Terminatorrrrr'
//             }
//         }   //таким образом можно встраиваться в середину и
//                        // возвращать другие данные, которые перейдут в дальнейшую цепочку
//
//     })
//     .then(user2 => {
//         console.log(user2?.data.name)
//         return user2?.data.id + 1
//     })
//     .then(user3ID => {
//         return findUserInDB(user3ID)
//     })
//     .then(user3 => console.log(user3))
//     .catch(err => console.warn(err))


//using async/await
//получаем все таки очень нагроможденный синтаксис!!!!!!!!!
async function run() {
    try {
        const user = await findUserInDB(10);
        console.log(user.data)
        let user2: any;
        try {
            user2 = await findUserInDB(user.data.id + 1)
            console.log(user2.data)
        } catch (e) {
            user2 = {
                data: {
                    id: 7777777777,
                    name: 'Terminatorrrrr'
                }
            }
            console.log(user2)
            return user2
        }
        const user3 = await findUserInDB(user2.data.id + 1)
        console.log(user3.data)
        console.warn('All friends wee see!')
    } catch (err) {
        alert(err)
    }
};
run();

/////////////////////////////////////////
