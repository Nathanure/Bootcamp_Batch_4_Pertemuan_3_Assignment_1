// Core Module
// File System
const fs = require('fs');
// console.log(fs);


// Membaca file dengan readFile
fs.readFile('text.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    // Membuat file dengan writeFileSync
    log = fs.writeFileSync("text.txt", data + "\nHi menggunakan writeFileSync");
    console.log(data);
});