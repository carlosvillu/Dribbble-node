//
//  Dribbble.js is a client for the Dribbble´s API (http://http://dribbble.com/api)
//  Usage:
//      var dribbble = require('dribbble');
//      var callback = function(shot, err){
//          if(!err) console.log(shot);
//      }
//      
//      dribbble.shots(21603, callback);
//

var dribbble = exports;



//
// This function get the shot for a espeficed :id, then call the callback with
// callback = function(shot, err). `shot` is a object all informaction about the shot.
// If any error then `err` is not null.
//
dribbble.shots = function(id, callback){}



//
//
//
dribbble.rebounds = function(id, callback){}