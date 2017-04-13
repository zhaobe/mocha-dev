"use strict";

var request = require("request"),
    assert = require("assert"),
    helloWorld = require("../app.js"),
    home_url = "http://localhost:3000/"; //home url at port 3000

describe("Hello World", function() {
    
    describe("GET /", function() {
        
        //checking status code of 200 success
        it("returns status 200", function() {
            request.get(home_url, function(error, response, body) {
                //expect(response.statusCode).toBe(200);
                assert.equal(200, response.statusCode);
                done(); //done callback
            });
        });
        
        //checking if hello world is in body
        it("returns Hello World for body", function() {
            request.get(home_url, function(error, response, body) {
                 //expect(body).toBe("Hello World");
                assert.equal("Hello World", body);
                helloWorld.closeServer();
                done();
            });
        });
        
    });
    
});