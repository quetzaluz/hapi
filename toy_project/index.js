module.exports = require('../lib');
var Hapi = require('hapi')

server.route({
    method: 'GET',
    path: '/hello',
    handler: function () {

        this.reply('hello world');
    }
});

server.start();

