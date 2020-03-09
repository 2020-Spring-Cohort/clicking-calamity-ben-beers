class ButtonApp {
    constructor(){

        this.clickCount = 0;

        this.buddyCount = 0;
        this.buddyCost = 100;

        this.compounderCount = 0;
        this.compounderCost = 10;

        this.bashButtonText = document.getElementById("bashButtonText");
        this.buddyButtonText = document.getElementById("buddyButtonText");

        this.test = 1;

    }

    getClickCount(){return this.clickCount}
    getBuddyCount(){return this.buddyCount}
    getBuddyString(){return `You have ${this.getBuddyCount()} button buddies.`}
    getCompounderCount(){return this.compounderCount}

}

const newApp = new ButtonApp();

const buddyButton = document.getElementById("buddy");
const button = document.getElementById("button");
const compounder = document.getElementById("compounder");
const reset = document.getElementById("RESET");
const burger = document.getElementById("burger");
var menuIsOpen = false;
var textForMenu = document.getElementById("menulinks");

button.addEventListener('click',function(){
    newApp.clickCount += (1 + (newApp.compounderCount * .2));

    console.log(newApp.clickCount);

    if(newApp.clickCount < newApp.buddyCost){buddyButton.disabled = true;};
    if (newApp.clickCount < 500){compounder.disabled = true;};
    if (newApp.clickCount >= newApp.buddyCost){buddyButton.disabled = false;};
    if (newApp.clickCount >= newApp.compounderCost){compounder.disabled = false;};

    document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;

});

buddyButton.addEventListener('click',function(){
    
    if(newApp.clickCount >= newApp.buddyCost){
        newApp.buddyCount += 1;
        newApp.clickCount -= newApp.buddyCost;
        newApp.buddyCost *= 1.2;
        newApp.buddyCost = (Math.floor(newApp.buddyCost));
        console.log(`You have ${newApp.buddyCount} Button Buddies, and buddies now cost ${newApp.buddyCost}.`);
    };

    if (newApp.clickCount <= newApp.buddyCost){buddyButton.disabled = true;};
    if (newApp.clickCount < newApp.compounderCost){compounder.disabled = true;};
    document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;
    document.getElementById("buddyButtonText").innerHTML = `${newApp.getBuddyCount()} buddies. Buy another for ${newApp.buddyCost}`;
    });

buddyButton.disabled = true;
compounder.disabled = true;

compounder.addEventListener('click',function(){

    if(newApp.clickCount >= newApp.compounderCost){
        newApp.compounderCount += 1;
        newApp.clickCount -= newApp.compounderCost;
        newApp.compounderCost *= 1.2;
        newApp.compounderCost = Math.floor(newApp.compounderCost);
        console.log(`You have ${newApp.compounderCount} Button Bolsterers. Buy another for ${newApp.compounderCost}`);
    };

    if (newApp.clickCount < newApp.compounderCost){
        compounder.disabled = true;
    }

    document.getElementById("compounderText").innerHTML = `${newApp.getCompounderCount()} Button Bolsterers. Buy another for ${newApp.compounderCost}`;

});

reset.addEventListener('click',function(){
    newApp.clickCount = 0;
    newApp.buddyCount = 0;
    newApp.compounderCount = 0;

    newApp.buddyCost = 100;
    newApp.compounderCost = 10;

    document.getElementById("compounderText").innerHTML = `${newApp.getCompounderCount()} Button Bolsterers. Buy another for ${newApp.compounderCost}`;
    document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;
    document.getElementById("buddyButtonText").innerHTML = `${newApp.getBuddyCount()} buddies. Buy another for ${newApp.buddyCost}`;
});

const menuOpenOrClose = function(menuBool){

    menuBool = menuIsOpen;
    
    if(!menuBool){
        textForMenu.innerHTML = `<A HREF = "aboutme.html">About Me</A> <A HREF = "http://orteil.dashnet.org/cookieclicker/">The Original Cookie Clicker</A>`
        menuIsOpen = true;
    };

    if(menuBool){
        textForMenu.innerHTML = ``
        menuIsOpen = false;    
    };
    
    console.log("You clicked the burger!")

    };

burger.addEventListener('click',menuOpenOrClose);

setInterval(function(){
    newApp.clickCount += newApp.buddyCount;
    document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;},
    1000);