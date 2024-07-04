let userIsUsingPC = true
let userIsUsingAndroid = false
let userIsUsingUnknownDevice = false


let programLoading = new Promise((resolve, reject) => {
    
    if (userIsUsingPC){
        resolve({
            status: 'loading',
            EWT: '3 minutes',
        })
    } else if (userIsUsingAndroid){
         reject('This program can only be loaded on a Desktop Environment')
    } else if (userIsUsingUnknownDevice){
        reject({
            status: 'unknown device',
            EWT: 'undefined',
        })
    }
})


programLoading.then((message)=>{
    console.log(`${message.status} and Estimated wait time is ${message.EWT}`)
}). catch((error)=>{
    console.log(error)
})