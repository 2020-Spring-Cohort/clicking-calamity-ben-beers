class ButtonApp {
    constructor(){

        this.clickCount = 0;

        this.buddyCount = 0;
        this.buddyCost = 100;

        this.compounderCount = 0;

        this.bashButtonText = document.getElementById("bashButtonText");
        this.buddyButtonText = document.getElementById("buddyButtonText");

    }

    getClickCount(){return this.clickCount}
    getBuddyCount(){return this.buddyCount}
    getBuddyString(){return `You have ${this.getBuddyCount()} button buddies.`}
    getCompounderCount(){return this.compounderCount}

    compounderTrigger = function(){
        if(this.clickCount >= 500){
            this.compounderCount += 1;
            this.clickCount -= 500;
            console.log(`You have ${this.compounderCount} Button Bolsterers.`);
        };
        if (this.clickCount < 500){
            compounder.disabled = true;
        }
        document.getElementById("compounderText").innerHTML = `${this.getCompounderCount()}`;
    }

};

const newApp = new ButtonApp();

const buddyButton = document.getElementById("buddy");
const button = document.getElementById("button");
const compounder = document.getElementById("compounder");

button.addEventListener('click',function(){
    newApp.clickCount += (1 + (newApp.buddyCount + (newApp.compounderCount * 5)));

    console.log(newApp.clickCount);

    if(newApp.clickCount < 100){buddyButton.disabled = true;};
    if (newApp.clickCount < 500){compounder.disabled = true;};
    if (newApp.clickCount >= 100){buddyButton.disabled = false;};
    if (newApp.clickCount >= 500){compounder.disabled = false;};

    document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;

});

buddyButton.addEventListener('click',function(){
    
    if(newApp.clickCount >= newApp.buddyCost){
        newApp.buddyCount += 1;
        newApp.clickCount -= 100;
        newApp.buddyCost *= 1.2;
        newApp.buddyCost = (Math.floor(newApp.buddyCost));
        console.log(`You have ${newApp.buddyCount} Button Buddies, and buddies now cost ${newApp.buddyCost}.`);
    };

if (newApp.clickCount <= newApp.buddyCost){buddyButton.disabled = true;};
if (newApp.clickCount < 500){compounder.disabled = true;};
document.getElementById("bashButtonText").innerHTML = `${newApp.getClickCount()}`;
document.getElementById("buddyButtonText").innerHTML = `${newApp.getBuddyCount()}`;
});

buddyButton.disabled = true;
