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
//  When is required the :id param this can be or `1` or `simplebits`
//

var dribbble = exports;


//
// Default value of pages in the pagination
//
dribbble.PER_PAGE = 15;



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
//  This function support pagination, then you can supply a page number. Default value per page is dribbble.PER_PAGE
//
dribbble.list = function(value, page, callback){}



//
//  Returns the most recent shots for the player specified by :id.
//  This function support pagination, then you can supply a page number. Default value elements per page is dribbble.PER_PAGE
//
dribbble.shots_for_player = function(id, page, callback){}



//
//  This function returns the most recent shots published by those the player specified by :id is following.
//  This function support pagination, then you can supply a page number. Default value elements per page is dribbble.PER_PAGE
//
dribbble.shots_following_for_player = function(id, page, callback){}



//
//  This function Returns shots liked by the player specified by :id.
//  This function support pagination, then you can supply a page number. Default value elements per page is dribbble.PER_PAGE
//
dribbble.shots_likes_for_player = function(id, page, callback){}



//
//  This function returns profile details for a player specified by :id.
//
dribbble.player = function(id, callback){}



//
//  This function Returns the list of followers for a player specified by :id.
//
dribbble.player_followers = function(id, callback){}



//
//  This function Returns the list of players followed by the player specified by :id.
//
dribbble.player_following = function(id, callback){}



//
//  This function Returns the list of players drafted by the player specified by :id.
//
dribbble.player_draftees = function(id, callback){}