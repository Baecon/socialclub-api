var request = require('request'),
    accounts = require('./db.json'),
    args = process.argv.slice(2);

accounts.forEach(a => {
    follow(a.token, a.id, args[0])
})

//process.exit(0)

function follow(token, id, followid) {
    let data = `followerId=${id}&followingId=${followid}`;
    request.post({url:'http://www.socialclub.ly/api/v1/follows',headers: {'X-Access-Token': token}, form: data}, (err, res, body) => {
        if(err) return console.log(err)
        //let parsed = JSON.parse(body)
        console.log(body)
    })
}
