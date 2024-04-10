// Promise example
const zeroNumber = (x: number) => {
    return new Promise((resolve, reject) => {
        const cid = setInterval(() => {
            console.log(++x);
            if (x === 1)
                clearInterval(cid);
        }, 1000);

        if (x === 0)
            resolve(0);
        else
            reject(new Error("It is not 0!!"));
    });
}

// resolve promise
zeroNumber(0)
    .then((x) => console.log(x))
    .catch((error) => console.error(error));

const response = zeroNumber(0);
console.log("Response: ", response);

// async/await
(async () => {
    const response = await zeroNumber(0);
    console.log("Response: ", response);
})();