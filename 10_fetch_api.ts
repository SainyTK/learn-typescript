let data: any = { x: "xxx" };
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => {
        // console.log(json);
        data = json;
        console.log(data);
    });

// using async/await
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log("response: ", response);
}

getPosts();

// create a post
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


// ===== update ====
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// === filter ===
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => response.json())
    .then((json) => console.log(json)); 