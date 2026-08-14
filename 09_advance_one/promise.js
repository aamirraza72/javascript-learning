// ==================== Promise One ====================

// Create a Promise that completes after 1 second.
const promiseOne = new Promise(function(resolve, reject) {

    // Simulate an asynchronous task.
    setTimeout(function() {
        console.log('Async task is complete');

        // Fulfill the Promise.
        resolve();
    }, 1000);
});

// Runs when the Promise is fulfilled.
promiseOne.then(function() {
    console.log("Promise consumed");
});


// ==================== Promise Two ====================

// Create and handle a Promise directly.
new Promise(function(resolve, reject) {

    // Simulate another async task.
    setTimeout(function() {
        console.log("Async task 2");

        // Fulfill the Promise.
        resolve();
    }, 1000);

}).then(function() {

    // Runs after the Promise is fulfilled.
    console.log("Async 2 resolved");
});


// ==================== Promise Three ====================

// Resolve the Promise with an object.
const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve({
            username: "max",
            email: "max@example.com"
        });
    }, 1000);
});

// Receive the resolved object.
promiseThree.then(function(user) {
    console.log(user);
});


// ==================== Promise Four ====================

// Handle both success and failure.
const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {
        let error = true;

        if (!error) {

            // Resolve with user data.
            resolve({
                username: "sam",
                password: "123"
            });

        } else {

            // Reject with an error message.
            reject('ERROR: Something went wrong');
        }

    }, 1000);
});

promiseFour
    .then((user) => {

        // Handle the resolved value.
        console.log(user);

        // Pass username to the next .then().
        return user.username;

    })
    .then((username) => {

        console.log(username);

    })
    .catch(function(error) {

        // Handle Promise rejection.
        console.log(error);

    })
    .finally(() => {

        // Runs whether Promise resolves or rejects.
        console.log("Promise is either resolve or reject");
    });


// ==================== Promise Five ====================

// Create a Promise for async/await practice.
const PromiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {
        let error = true;

        if (!error) {

            // Resolve with user data.
            resolve({
                username: "javascript",
                password: "123"
            });

        } else {

            // Reject with an error.
            reject('ERROR: JS went wrong');
        }

    }, 1000);
});


// Consume the Promise using async/await.
async function consumePromiseFive() {

    try {

        // Wait for the Promise result.
        const response = await PromiseFive;
        console.log(response);

    } catch (error) {

        // Handle rejected Promise.
        console.log(error);
    }
}

consumePromiseFive();


// ==================== Fetch with Async/Await ====================

// Fetch users using async/await.
/*
async function getAllUsers() {
    try {

        // Send request and wait for the response.
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        // Parse JSON response into JS data.
        const data = await response.json();

        console.log(data);

    } catch (error) {

        // Handle request errors.
        console.log("E: ", error);
    }
}

getAllUsers();
*/


// ==================== Fetch with Promise Chaining ====================

// Fetch data from the server.
fetch('https://jsonplaceholder.typicode.com/users')

    // Get the server response.
    .then((response) => {

        // Parse the JSON response.
        return response.json();
    })

    // Receive the parsed data.
    .then((data) => {

        console.log(data);
    })

    // Handle any errors.
    .catch((error) => console.log(error));