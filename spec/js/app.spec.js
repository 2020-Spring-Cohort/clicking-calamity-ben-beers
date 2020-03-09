// ./spec/js/app.js
//TESTS GO HERE

describe("Dummy test", function(){
    underTest = new ButtonApp();
    it("returns 1", function(){
        expect(underTest.test).toBe(1);
    });
        });

describe("Suite to check out button click add thingy", function(){
    beforeEach(() => {
        underTest = new ButtonApp();
    })
 
    it("Clicking button should increase value by 1", function(){
       
       clickTrigger();
       expect(underTest.getClickCount()).toBe(1);

    });

});

describe("Suite to return correct description string", function(){
    beforeEach(() => {
        underTest = new ButtonApp();
    })

    it("The getBuddyNumber function should return total purchased button buddies", function(){
        expect(underTest.getBuddyString()).toBe(`You have 0 button buddies.`);
    });
});

describe("Make sure you can buy button bolsterers a.k.a Collective Culmination Compounders", function(){
    beforeEach(() => {
        underTest = new ButtonApp();
    })

    it()

});
