require('./common');

// Suite for shot function.
var shot_suite = vows.describe("Tests for the shot function in the Dribbble´s client");
shot_suite.addBatch({
    "The Shot function":{
        "with correct id numeric":{
            topic: function(){
                dribbble.shot(21603, this.callback);
            },
            "Should to do a correct JS object with the shot information": function(err, shot){
                assert.isNull(err);
                assert.typeOf(shot, 'object');
            }
        },
        "with incorrect id numeric":{
            topic: function(){
                var fail_number_id = 01200020
                dribbble.shot(fail_number_id, this.callback);
            },
            "Should return a err not null with a error message": function(err, shot){
                assert.isNotNull(err);
                assert.isObject(err);
                assert.include(err, 'message');
                assert.isUndefined(shot);
            }
        }
    }
}).export(module);