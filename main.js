var ClozeCard = require("./ClozeCard");
var BasicCard = require("./BasicCard");
var inquirer=require("inquirer");
var fs=require('fs');

var basics = [];
var clozeCards = [];
var counterCloze;
var counterBasic;

//Questions
var card1 = new BasicCard("Who was the first president of the US?", "George Washington");
var card2= new BasicCard("Who is the current president?", "Donald Trump");
var card3= new BasicCard("Does Jane know anything about politics?", "LOL NO");
var card4= new BasicCard("Who is the hottest Avenger?", "Bruce Banner");
var card5= new BasicCard("Who is the cutest avenger?", "Baby Groot");
var card6= new BasicCard("Who is the god of thunder?", "Thor");
var card7= new BasicCard("What do you need when you're sick?", "Vitamin C");
var card8= new BasicCard("What is Jane's favorite food?", "sushi");
var card9= new BasicCard("What days are homework assignments due?", "Mondays and Thursdays");
var card10= new BasicCard("What holiday is coming up next?", "Fourth of July");
var card1Cloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
var card2Cloze = new ClozeCard("Donald Trump is the current president", "Donald Trump");
var card3Cloze = new ClozeCard("Jane knows nothing about politics", "Jane");
var card4Cloze = new ClozeCard("Bruce Banner is the hottest Avenger", "Bruce Banner");
var card5Cloze = new ClozeCard("Baby Groot is the cutest Avenger", "Baby Groot");
var card6Cloze = new ClozeCard("Thor is the God of Thunder", "Thor");
var card7Cloze = new ClozeCard("Vitamin C is the most important supplement to have when you're sick", "Vitamin C");
var card8Cloze = new ClozeCard("Sushi is Jane's favorite food", "Sushi");
var card9Cloze = new ClozeCard("Mondays and Thursdays are when homework assignments are due", "Mondays and Thursdays");
var card10Cloze = new ClozeCard("Fourth of July is the holiday that is coming up next.", "Fourth of July");

basics.push(card1);
basics.push(card2);
basics.push(card3);
basics.push(card4);
basics.push(card5);
basics.push(card6);
basics.push(card7);
basics.push(card8);
basics.push(card9);
basics.push(card10);

clozeCards.push(card1Cloze);
clozeCards.push(card2Cloze);
clozeCards.push(card3Cloze);
clozeCards.push(card4Cloze);
clozeCards.push(card5Cloze);
clozeCards.push(card6Cloze);
clozeCards.push(card7Cloze);
clozeCards.push(card8Cloze);
clozeCards.push(card9Cloze);
clozeCards.push(card10Cloze);


function startBasicGame (){
    counterBasic=0;
    if (counterBasic >= basics.length) {
        console.log("You're done!");
    }
    else {
        displayBasicQuestion();
    }
}

function displayBasicQuestion(){
    if (counterBasic >= basics.length) {
        console.log("You're done! Now you can go eat sushi and ice cream!");
        runApp();
    }
    else{
        inquirer.prompt([{
            type:"input",
            message: basics[counterBasic].front,
            name: "basicAnswer"
        }]).then(function(response){
            if (response.basicAnswer===basics[counterBasic].back){
                console.log("You're almost as smart as Jane Is!")
                counterBasic++ ;
                displayBasicQuestion();
            }
            else{
                console.log("DUMBASS!")
                counterBasic++;
                displayBasicQuestion();
            }    
         });
    }
}
    

function startClozeGame (){
    counterCloze=0;
    if (counterCloze >= clozeCards.length) {
        console.log("You're done! Go get some sushi!");
    }
    else {
        displayClozeQuestion();
    }
}

function displayClozeQuestion(){
    if (counterCloze >= clozeCards.length) {
        console.log("You're done! Now you can go eat sushi and ice cream!");
        runApp();
    }
    else{
        inquirer.prompt([{
            type:"input",
            message: clozeCards[counterCloze].partialText,
            name: "clozeAnswer"
        }])
        .then(function(response){
            if (response.clozeAnswer===clozeCards[counterCloze].cloze){
                console.log("You're almost as smart as Jane is!")
                counterCloze++ ;
                displayClozeQuestion();
            }
            else{
                console.log("DUMBASS!")
                counterCloze++;
                displayClozeQuestion();
            }    
         });
    }
}

function runApp(){
    inquirer.prompt([{
        type:"list",
        message: "Which game would you like to play?",
        choices: ["cloze","basic"],
        name: "answer"
    }]).then(function(response){
        if (response.answer=="cloze"){
            startClozeGame();
        }
        else{
            startBasicGame();
        }
    });
}

runApp();