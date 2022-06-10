//Using Promise: Purpose is to call fun3 after seTimeout executed 
function fun1() {
    let promiseObjectAsync = await new Promise((res, rej) => {
        setTimeout(() => {
            console.log("In Timer")
            res({})
        }, 4000)
    })
    return promiseObjectAsync;
}

function fun3() {
    console.log("In fun3")
}

function fun2() {
    let p1 = fun1();
    p1.then((data) => {
        console.log(data)
        fun3()
    }).catch((err) => {
        console.log(err)
    })
}

fun2()