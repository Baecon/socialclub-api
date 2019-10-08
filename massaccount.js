var request = require('request'),
    fs = require('fs'),
    file = fs.createWriteStream('tokens.txt', { flags: 'a' }),
    args = process.argv.slice(2);

for(i = 0;i < args[0];i++) {
    makeAccount(`${args[1]}${i}@adfhvan9if.com`, `${args[2]}${i}`)
}

function makeAccount(email, username) {
    let data = `email=${email}&username=${username}&password=asdas123&name=https%3A%2F%2Fcash.app%2F%24baeconx%0A&deviceModel=bruh&countryCode=US`;
    request.post({url:'http://www.socialclub.ly/api/v1/users/signup', form: data}, (err, res, body) => {
        let parsed = JSON.parse(body)
        if(parsed.message != 'Successfully signed up! Enjoy Social Club!') return console.log('failed to signup')
        else return file.write(`\n${parsed.user.id}:${parsed.token}`)
    })
}
