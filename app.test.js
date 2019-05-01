"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });



describe("Carelesswhisper", function () {

    it("open create-a-whisper, then type whisper title and body", function (done) {
        nightmare.goto("http://localhost:3000")
            .wait(2000)
            .click("#create-whisper")
            .wait("#filled-required")
            .type("#filled-required", "A Careless Whisper")
            .wait(1000)
            .select("#filled-select-category-native", "Miscellaneous")
            .wait(1000)
            .type("#filled-multiline-static", "And I'm never gonna dance again. Guilty feet have got no rhythm.")
            .wait(2000)
            .click("#save-button")
            .wait(3000)
            .click("#media")
            .wait(5000)
            .end()
            .then(function (result) {
                console.log(result);
                done();
            })
            .catch(function (error) {
                console.error("Search failed:", error);
                done();
            });
    }, 30000);

  

});

