const server = require('./api/server.js');

//debuggin
const port = process.env.PORT || 5000;

server.listen(port, () => {
 console.log(`\n** Ah ha! Its ya boy running on port ${port} **\n`)
})