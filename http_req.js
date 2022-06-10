//HTTP REQUESTS(HTTP VERBS):

//GET - Retreive Data from back-end
//fetch("http://y.com/products", { method: 'GET'}) //second parameter is optional 
//POST - Post data to back-end 
//fetch("http://y.com/products/1", { method: 'POST', body: JSON.stringigy(data)}) //second parameter is optional 
//PUT - Update data onto the back-end
//fetch("http://y.com/products/1", { method: 'PUT', body: JSON.stringigy(data)}) //second parameter is optional 
//DELETE - Delete data from back-end

function getData() {
    let promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
    promise.then(res => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
    console.log("xyz")
}

function postData() {
    let data = {
        title: "x",
        completed: false,
        userId: 1
    }
    let promise = fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    promise.then(res => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}
function deleteData() {
    let promise = fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'DELETE',
    });
    promise.then(res => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}

function putData() {
    let data = {
        title: "x",
        completed: false,
        userId: 1
    }
    let promise = fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    promise.then(res => {
        return res.json()
    }).then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}