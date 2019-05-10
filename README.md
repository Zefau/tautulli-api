![Logo](tautulli.jpeg)
# tautulli-api
[Tautulli is a 3rd party application](https://tautulli.com/#about) that you can run alongside your Plex Media Server to monitor activity and track various statistics. Most importantly, these statistics include what has been watched, who watched it, when and where they watched it, and how it was watched. All statistics are presented in a nice and clean interface with many tables and graphs, which makes it easy to brag about your server to everyone else.

This is a Node.js implementation of the Tautulli API (see https://github.com/Tautulli/Tautulli/blob/master/API.md).

[![NPM version](http://img.shields.io/npm/v/tautulli-api.svg)](https://www.npmjs.com/package/tautulli-api)
[![Downloads](https://img.shields.io/npm/dm/tautulli-api.svg)](https://www.npmjs.com/package/tautulli-api)
[![Travis CI](https://travis-ci.org/Zefau/tautulli-api.svg?branch=master)](https://travis-ci.org/Zefau/tautulli-api)

[![NPM](https://nodei.co/npm/tautulli-api.png?downloads=true)](https://nodei.co/npm/tautulli-api/)


## Usage
To use the API, add tautulli-api to the dependencies of your project in package.json or install it using npm
```npm install tautulli-api```. Make sure you have a running instance of Tautulli (see [installation instructions here](https://github.com/Tautulli/Tautulli-Wiki/wiki/Installation)).

### Get token
You can find your token in the Tautulli settings via _Settings_ -> _Web Interface_. Scroll down the page to the _API_ section. Make sure to check the option ```Enable API``` and copy the ```API key```.

### Constructor and exemplified commands
```js
const Tautulli = require('tautulli-api');

var tautulli = new Tautulli('192.168.2.99', '8181', '475dedbe9cbc430bb68413892fedbc74'); // ip and port of Tautulli and YOUR Tautulli API token

// Get the current activity on the PMS.
tautulli.get('get_activity').fetch(function(res) { ... use res ... });

// Get a list of all libraries on your server.
tautulli.get('get_libraries').fetch(function(res) { ... use res ... });
```


## Example
You may find a full implemented example at https://github.com/Zefau/ioBroker.tautulli.


## License
The MIT License (MIT)

Copyright (c) 2019 Zefau <zefau@mailbox.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
