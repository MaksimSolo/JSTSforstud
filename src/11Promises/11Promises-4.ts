import axios from "axios";

function findUserInDB(userId: number) {
    return (axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        responseType: "json",
        withCredentials: true,
    }))
}

findUserInDB(10)
    .then(user => {
        console.log(user.data.name)
    })


// function getNumber() {
//     //const prom =  Promise.resolve(Math.random());
//     const prom = new Promise((res, rej) => {
//         rej('some error!??')
//         setTimeout(() => {
//             res(Math.random())
//         }, 2000)
//     })
//     return prom;
// }

// getNumber().then(n => console.log(n));
// getNumber().then(n => console.log(n));

/////////////////////////////////////

//about asynchronous localstorage

//1-this is synchronous working
//нужна промисификация потому что синхронное сохранение тормозит интерфейс в случае
//больших данных, тогда нужно заложить вариант на будущее улучшение и создать промис

const repo = {
    save(data: any) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (err) {
            return false;
        }
        return true;
    },
    saveAsync(data: any) {
        const promise = new Promise((res, rej) => {
                try {
                    localStorage.setItem('some-key', JSON.stringify(data))
                    res(true);
                } catch (err) {
                    rej(err);
                }
            }
        )
        return promise;
    },
    read() {
        const data = localStorage.getItem('some-key');
        if (!data) {
            return null;
        } else {
             return JSON.parse(data)
        }
    },
    readAsync() {
        // @ts-ignore
        return new Promise((res, rej) => {

            const data = localStorage.getItem('some-key');
            if (!data) {
                rej('NO DATA IN REPO!')
            } else {
                res(JSON.parse(data))
            }
        })
    }
}

// const result = repo.save({name: 'IT-KAMASUTRA'})
// if (result) {
//     console.log('SAVED IN REPO!')
// } else {
//     console.warn('NOT SAVED IN REPO!')
// }
//
// const data = repo.read()
// console.log(data)
//


// repo.saveAsync({name: 'IT-KAMASUTRA'})
//     .then(()=>console.log('SAVED IN REPO!'))
//     .catch((err)=>console.warn('NOT SAVED IN REPO!::'+err))

//переходим на синтаксис эвейтов...........

const run = async () => {
    await repo.saveAsync({name: 'IT-KAMASUTRA'})
    // .then(()=>console.log('SAVED IN REPO!'))
    // .catch((err)=>console.warn('NOT SAVED IN REPO!::'+err))
    console.log('SAVED IN REPO!')

    const data = await repo.readAsync()
    console.log(data)
}

run()


// just a plug
export default function foo() {
};