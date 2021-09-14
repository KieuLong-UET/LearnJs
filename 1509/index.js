var request = require('request');
console.log('Start fetching...');

function load(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (error !== null) {
                reject(error);
            }
            resolve(body);
        });
    })
}

Promise.all([
    load('https://jsonplaceholder.typicode.com/todos/1'),
    load('https://jsonplaceholder.typicode.com/todos/2'),
    load('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(resolved) {
    console.log(resolved);
    console.log('Done');
}).catch(function(err){
    console.log(err);
});

