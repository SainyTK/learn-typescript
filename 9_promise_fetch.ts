const zeroNumber = (x: number) => {
    return new Promise((resolve, reject) => {
        const cid = setInterval(() => {
            console.log(++x);
            if (x === 5)
                clearInterval(cid);
        }, 1000);

        if (x === 0)
            resolve(0);
        else
            reject(new Error("It is not 0!!"));
    });
}
zeroNumber(0)
    .then((x) => console.log(x))
    .catch((error) => console.error(error));
console.log("=== End program ====")