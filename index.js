var kudu = require('kudu-api')({
    website: 'auchenberg-timey',
    username: process.env.username,
    password: process.env.password
})

console.log('Getting Node version from Kudo instance')

kudu.command.exec('node -v', 'site/wwwroot', function(err, result) {
    if (err) throw err
    console.log(result)
})

