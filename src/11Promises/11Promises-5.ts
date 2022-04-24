//показать 1,2,3 с интервалом в 1 сек
//we received 'callback hell))))))))'

// setTimeout(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)

//////using async

// const timer = (time:number)=>{
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(true)
//         }, time)
//     })
// }
//
// async function run() {
//     await timer(1000)
//     console.log(1)
//     await timer(1000)
//     console.log(11)
//     await timer(1000)
//     console.log(111)
//
// }
// run()

// just a plug
export default function foo() {
};