var fs = require('fs'),
    txt = fs.readFileSync("./tokens.txt", "utf-8"),
    strings = txt.split("\n")
    json = []


strings.forEach(a => {
    b = a.split(':')
    json.push({token: b[1], id: b[0]})
});

var bruh = JSON.stringify(json);

fs.writeFile('db.json', bruh, 'utf8', ()=>{
    console.log('done')
})
