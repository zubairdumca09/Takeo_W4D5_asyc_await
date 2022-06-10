//Promise states:
//Pending
//Fulfilled
//rejected

let promiseObject = new Promise((res, rej) => {
    res("resolved");
})

let x = 1;
let promiseObjectAsync = new Promise((res, rej) => {
    if (x < 10) {
        setTimeout(() => {
            res("resolved")
        }, 4000)
    } else {
        setTimeout(() => {
            rej("rejected")
        }, 4000)
    }

})

promiseObjectAsync
    .then((data) => {
        console.log(promiseObjectAsync)
        console.log(`data=${data}`)
    }).catch((err) => {
        console.log(`Error=${err}`)
    })

