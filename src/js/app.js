class ButtonApp {
    constructor(){

        this.clickCount = 0;
        this.buddyCount = 0;

        this.bashButtonText = document.getElementById("bashButtonText");
        this.buddyButtonText = document.getElementById("buddyButtonText");

    }

    getClickCount(){return this.clickCount;}
    getBuddyCount(){return this.buddyCount}
    getBuddyString(){return `You have ${this.getBuddyCount()} button buddies.`}

    clickTrigger = function(){
        this.clickCount += (1 + (this.buddyCount));

        console.log(this.getClickCount());

        if(this.clickCount < 100){buddyButton.disabled = true;}
        if (this.clickCount >= 100){
            buddyButton.disabled = false;
        document.getElementById("bashButtonText").innerHTML = `${this.getClickCount()}`;
    }

};

buddyTrigger = function(){
    
    if(this.clickCount >= 100){
        this.buddyCount += 1;
        this.clickCount -= 100;
        console.log(`You have ${this.buddyCount} Button Buddies.`);
    };

    if (this.clickCount <= 100){
        buddyButton.disabled = true;
    };
};

};

const newApp = new ButtonApp();

const buddyButton = document.getElementById("buddy");
const button = document.getElementById("button");

button.addEventListener('click',newApp.clickTrigger());
buddyButton.onclick = newApp.buddyTrigger();

buddyButton.disabled = false;
