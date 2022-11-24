// Import the readline module of core module
const readLine = require('readline');

// Creating an interface of input and output with readline module and process function
const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

// Questions asking on someone's biography
// Inputs are:
// Name
rl.question('What\'s your name? ', (name) => {
    // Email
    rl.question('What\'s your email? ', (email) => {
        // Address
        rl.question('What\'s your address? ', (address) => {
            // Outputs
            console.log(`Hey ${name}`);
            console.log(`Oh, you're email is ${email}`);
            console.log(`And live in this address ${address}`);
            // Close the readLine module
            rl.close();
        })
    })
})