var request = require('request'),
    accounts = require('./db.json'),
    args = process.argv.slice(2);

accounts.forEach(a => {
    follow(a.token, a.id, args[0], args[1])
});
//process.exit(0)

function follow(token, id, followid, reason) {
    let data = `userId=${id}&abuserId=${followid}&type=user&description=${reason}`;
    request.post({url:'http://www.socialclub.ly/api/v1/reports',headers: {'X-Access-Token': token}, form: data}, (err, res, body) => {
        if(err) return console.log(err)
        console.log(body)
    })
}