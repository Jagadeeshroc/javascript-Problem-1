let myPromise8 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
async function myAsyncFunction() {
    try {
        let result = await myPromise8;  // Wait for the promise to resolve
        console.log(result);  // Will log "Operation successful!" if resolved
    } catch (error) {
        console.log(error);  // Will log "Operation failed!" if rejected
    }
}

myAsyncFunction();