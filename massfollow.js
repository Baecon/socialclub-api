var request = require('request'),
    accounts = require('./notodne.json'),
    args = process.argv.slice(2);

accounts.forEach(a => {
    follow(a.token, a.id, args[0], counter)
})

//process.exit(0)

function follow(token, id, followid, i) {
    let data = `followerId=${id}&followingId=${followid}`;
    request.post({url:'http://www.socialclub.ly/api/v1/follows',headers: {'X-Access-Token': token}, form: data}, (err, res, body) => {
        if(err) return err
        let parsed = JSON.parse(body)
        console.log(parsed)
    })
}