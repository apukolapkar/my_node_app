const express = require('express')
const app = express()

app.get('/', (req, res) =>  { 
    
    console.log('I just received a GET request on port 3000!')
    res.send('Hello World! from Prod environment');
})

app.listen(3000, () => console.log('I just connected on port 3000!'))


getDockerHost = require('get-docker-host');
isInDocker = require('is-in-docker');

checkDocker = () => {
    return new Promise((resolve, reject) => {
        if (isInDocker()) {
            getDockerHost((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        } else {
            resolve(null);
        }
    });
};

checkDocker().then((addr) => {
    if (addr) {
        console.log('Docker host is ' + addr);
    } else {
        console.log('Not in Docker');
    }
}).catch((error) => {
    console.log('Could not find Docker host: ' + error);
});


