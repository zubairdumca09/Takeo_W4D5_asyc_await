async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await res.json();
    console.log(data);
    console.log("xyx")
}



