//making a get request to etherscan api using XMLHttpRequest
const getToDos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange' , () => {
            // research readyState and request status.
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("could not fetch data");
            }
        })
        
        request.open('GET', resource);
        request.send();
    })
}

console.log(1);
console.log(2);

// fetching api using promises
// getToDos('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9').then((data) => {
//     console.log("promise resolved", data);
//     return getToDos('some other link');
// }).then((data) => {
//     console.log('promise 2 for (some other link) resolved', data);
//     return getToDos('some other other link');
// }).catch((err) => {
//     console.log('promise rejected', err);
// });

// fetching api using fetch api
// fetch('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data['result'] * Math.pow(10, -18));
// })
// .catch((err) => {
//     console.log('promise rejected');
// })
// console.log(3);
// console.log(4);

//fetching api using async await
const fetchApi = async (address) => {
    const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9`);
    const data = await response.json();
    return data;
}

//fetchApi()
//.then(data => console.log(data['result'] * Math.pow(10, -18)));
const test = fetchApi('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');
console.log(test);
const transSet = new Set();

// return the the list of addresses from the outward transactions.
test.then((data) => {
    let transArray = data.result;
    for(let i = 0; i < transArray.length; i++) {
        if(transArray[i].to !== "") {
            transSet.add(transArray[i].to);
        }
    }
    const iterator = transSet.values();
    for(const elem of iterator) {
        console.log(elem);
    }
});
console.log(4);
console.log(test);


// // calling back an etherscan account 3 times, one after the other, but with callback hell.
// getToDos('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9', (err, data) => {
//     console.log(data);
//     getToDos('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9', (err, data) => {
//         console.log(data);
//         getToDos('https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=ECK9EWNEXGYJUEAACITH3F2N8DC6GMMHS9', (err, data) => {
//             console.log(data);
//         });
//     });
// });
// console.log(3);
// console.log(4);

// promise example. A promise is something that will take some time to do. A promise has two outcomes, resolve (we get the data we want) and reject (we get an error and reject the promise), and it takes in a function as a parameter.
const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        //if we get the data back and it is a success, we call
        resolve('some data');
        // if we get an error, we call
        //reject('some error');
    });
};

// This will return a promise, when we get a promise back from a function, we can add a .then() method
// getSomething();

// .then() will take in a function that will execute after the promise is resolved, and a second (optional) function that will execute if the promise is rejected. you can pass data in the resolve in getSomething, to use it in the .then method
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
