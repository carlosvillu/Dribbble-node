require('./common');

// Suite for testing the client.
var client_suite = vows.describe("Basic tests for Dribbble´s client");
client_suite.addBatch({
    "A Dribbble client": {
        topic: dribbble,
        "should be a object": function(topic){
            assert.ok(typeof topic === 'object');
        },
        "Should have a function to get the 'shots'":function(topic){
            assert.ok(typeof topic.shots === 'function');
        },
        "Should have a function to get a set of rebounds":function(topic){
            assert.ok(typeof topic.rebounds === 'function');
        },
        "Should have a function to get the set of comments for the shot specified":function(topic){
            assert.ok(typeof topic.comments === 'function');
        },
        "Should have a function to get the list of shots":function(topic){
            assert.ok(typeof topic.list === 'function');
        },
        "Should have a function to get the most recent shots for the player":function(topic){
            assert.ok(typeof topic.shots_for_player === 'function');
        },
        "Should have a function to get the most recent shots published by those the player":function(topic){
            assert.ok(typeof topic.shots_following_for_player === 'function');
        },
        "Should have a function to get shots liked by the player":function(topic){
            assert.ok(typeof topic.shots_likes_for_player === 'function');
        },
        "Should have a function to get the player":function(topic){
            assert.ok(typeof topic.player === 'function');
        },
        "Should have a function to get the player followers":function(topic){
            assert.ok(typeof topic.player_followers === 'function');
        },
        "Should have a function to get the player following":function(topic){
            assert.ok(typeof topic.player_following === 'function');
        },
        "Should have a function to get the list of players drafted":function(topic){
            assert.ok(typeof topic.player_draftees === 'function');
        }
    },
}).export(module);