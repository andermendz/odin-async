let valuePromise = new Promise ((resolve, reject) => {

    let value = 60;

    if (value > 30) {
        resolve('value is acceptable')
    } else {
        reject('value cannot be accepted')
    }
})


valuePromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})