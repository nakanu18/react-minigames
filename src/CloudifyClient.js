var CloudifyClient = require('cloudify-js').CloudifyClient;

var client = new CloudifyClient({'endpoint' : 'http://cloudify.localhost.com'});
var logger = require('log4js').getLogger('index.nodejs');

client.blueprints.list(null, function( err, response, body){
    logger.info('this is body',body);
});