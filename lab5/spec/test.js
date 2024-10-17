const p = require("../parse-to-proto.js");

describe('Player', function() {

    beforeEach(function() {
    });

    it('function should be callable', function() {
        let proto = { category: "animal" }
        let obj = p.parseToProto('{"type":"cat","name":"Mimi","age":3}', proto)
        expect(obj.age).toBe(3)
        expect(obj.category).toBe("animal")
    });
})


