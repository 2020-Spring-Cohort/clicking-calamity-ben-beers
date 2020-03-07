describe("Suite to check out butto click add thingy", function(){
    const initClickValue = 1;
    var clickValue = initClickValue;

    it("Clicking button should increase value by 1", function(){
        document.getElementById("button").onclick(clickValue += 1);

        expect(clickValue).toBe(2);

    });

});