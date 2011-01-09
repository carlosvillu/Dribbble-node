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
//  This function get the rebounds for a shot :id. Then call the callback to process the result o throw a exception
//
dribbble.rebounds = function(id, callback){}



//
//  This function returns the set of comments for the shot specified by :id.
//  then call the callback with all comments in a object
//
dribbble.comments = function(id, callback){}



//
//  This function returns the specified list of shots where :list has one of the following 
//  values € {debuts, everyone, popular}. If is not a correct value throw a exception.
//  This function support pagination, then you can supply a page number. Default value elements per page is 15
//
dribbble.list = function(value, page, callback){}