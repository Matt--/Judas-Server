//=============================
// config
var config = { };

// should end in /
config.rootUrl = process.env.ROOT_URL || 'http://localhost:5000/';

config.facebook = {
    appId: process.env.FACEBOOK_APPID || '130243393811111',
    appSecret: process.env.FACEBOOK_APPSECRET || 'c82696768ae4ad8b63db874cb64e6789',
    appNamespace: process.env.FACEBOOK_APPNAMESPACE || 'snappest',
    redirectUri: process.env.FACEBOOK_REDIRECTURI || config.rootUrl + 'login/callback'
};

//====================================
// dummy data for testing
//====================================

config.spots = [
  { position: { longitude : 174.7777222, latitude : -41.288889, accuracy: 0.0005, datestamp : '2014-04-20 1300'}, auth: {uid: 'Matt', accessToken : 'Possum'}},
  { position: { longitude : 174.7777222, latitude : -41.288889, accuracy: 0.0005, datestamp : '2014-04-20 1300'}, auth: {uid: 'Fred', accessToken : 'Stoat'}},
];

config.pests = [
  {name : 'Possum', colour : 'grey', danger : 'eats trees', found : 'look in trees'},
  {name : 'Stoat', colour : 'black and white', danger : 'eats eggs', found : 'around tree bottoms'}
];

config.users = [ 
	{userId : 'Matt', name : 'Matt Stevens', password : 'stuff'},
	{userId : 'Fred', name : 'Freddy Mercury', password : 'f'},
	{userId : 'Mike', name : 'Mike the Plumber', password : '56tygh'}
];
// end dummy data


module.exports = config;
