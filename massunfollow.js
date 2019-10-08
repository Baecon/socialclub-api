var request = require('request'),
    accounts = require('./db.json'),
    args = process.argv.slice(2);

accounts.forEach(a => {
    follow(a.token, a.id, args[0])
});
//process.exit(0)

function follow(token, id, followid) {
    request.del({url:`http://www.socialclub.ly/api/v1/follows?followerId=${id}&followingId=${followid}`,headers: {'X-Access-Token': token}}, (err, res, body) => {
        if(err) return err
        let parsed = JSON.parse(body)
        console.log(parsed)
    })
}