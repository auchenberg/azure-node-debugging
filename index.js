var kudu = require('kudu-api')({
    website: 'node-demo-version-app',
    username: process.env.username,
    password: process.env.password
})

console.log('Getting Node version from Kudo instance')

kudu.command.exec('node -v', 'site/wwwroot', function(err, result) {
    if (err) throw err
    console.log(result)
})

