//Using Callback: Purpose is to call fun3 after seTimeout executed 

function fun1(callback) {
    setTimeout(() => {
        console.log("in timer")
        if (typeof callback === "function") {
            callback()
        }
    }, 4000)
    let x = 10;
    console.log(x);
}

function fun3() {
    console.log("In fun3")
}

function fun2() {
    fun1(fun3);
    //fun3()
}

fun2()