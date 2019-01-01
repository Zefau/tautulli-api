var request = require('request-promise');

/**
 * The constructor for a connection to Tautulli.
 *
 * @class Tautulli
 * @param {String}		ip
 * @param {String}		port
 * @param {String}		token
 * @param {String}		root
 * @returns {Tautulli}
 * @constructor
 * @see https://github.com/Tautulli/Tautulli/blob/master/API.md
 */
var Tautulli = function Tautulli(ip, port, token, root)
{
	if (!(this instanceof Tautulli))
		return new Bridge(ip, port, token, root);

	this.ip = ip;
	this.port = parseInt(port, 10);
	this.token = token;
	this.root = root || '';

	if (!this.ip || !this.port || !this.token || this.port < 1 || this.port > 65536)
		throw new Error('Please check the arguments!');
};

/**
 * This function requests a command.
 *
 * @param {String}			command			the name of the command
 * @param {String|Object}	[addParams]		additional get parameters
 * @returns {Promise<Object>}
 * @private
 */
Tautulli.prototype.get = function get(command, addParams)
{
	var url = 'http://' + this.ip + ':' + this.port + this.root + '/api/v2?apikey=' + this.token + '&cmd=' + command;

	if (addParams)
	{
		if (typeof addParams === "object" && addParams !== null)
			Object.keys(addParams).map(function(key, i) {url += '&' + key + '=' + addParams[key]});
		
		else if (typeof addParams === 'string')
			url += addParams;
	}
	
	return request({
		uri: url,
		json: true
	});
};

module.exports = Tautulli;