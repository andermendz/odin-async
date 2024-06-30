let t = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Fine")
    } else {
        reject('Fail')
    }
})


t.then((message) => {
    console.log ('this is the then text ' + message)
}).catch((message) => {
    console.log('this is not  good ' + message)
})