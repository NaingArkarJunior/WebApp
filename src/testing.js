const SECOND = 1000;
const MINUTE = 60 * SECOND

let t1 = 2 * SECOND;
let t2 = 3 * SECOND;

const t1Function = () => {
    console.log("Start Couinting")
} 


const t2Function = () => {
    console.log("Ending")
} 

// setTimeout(()=>{
//     t1Function();
//     setTimeout(()=>{
//         t2Function()
//     },t2)
// },t1)



const timer = (cb,timer) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return reject("Processing error")
            cb()
            resolve("Success")
        },timer)
    }) 
}

timer(t1Function,t1)
    .then((data)=>timer(t2Function,t2))
    .then((data)=>timer(t2Function,t2))
    .then((data)=>timer(t2Function,t2))
    .catch(error=>console.log("ERROR ",error))

// async function process(){
//     try {
//         await timer(t1Function,t1)
//         await timer(t2Function,t2)
//     } catch (error) {
//         console.log("Error",error)
//     }
// }


process()
