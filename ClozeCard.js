var BasicCard = require("./BasicCard.js");

var ClozeCard = function (text, cloze){
    this.text=text;
    this.cloze=cloze;
    this.partial=function(){
        if (this.text.includes(this.cloze)){
            return this.text.replace(this.cloze,"...");
        }else{
            var errorMessage = 'ERROR! The full text: "' + this.text + '" does not contain the cloze text: "' + this.cloze+'"';
            return errorMessage;
        }
    }
}

var card1 = new BasicCard("Who was the first president of the US?", "George Washington");
// console.log(card1.front);
// console.log(card1.back);

var card2= new BasicCard("Who is the current president?", "Donald Trump");
// console.log(card2.front);
// console.log(card2.back);

var card3= new BasicCard("Does Jane know anything about politics?", "LOL NO");
// console.log(card3.front);
// console.log(card3.back);

var card4= new BasicCard("Who is the hottest Avenger?", "Bruce Banner");
// console.log(card4.front);
// console.log(card4.back);

var card5= new BasicCard("Who is the cutest avenger?", "Baby Groot");
// console.log(card5.front);
// console.log(card5.back);

var card6= new BasicCard("Who is the god of thunder?", "Thor");
// console.log(card6.front);
// console.log(card6.back);

var card7= new BasicCard("What do you need when you're sick?", "Vitamin C");
// console.log(card7.front);
// console.log(card7.back);

var card8= new BasicCard("What is Jane's favorite food?", "sushi");
// console.log(card8.front);
// console.log(card8.back);

var card9= new BasicCard("What days are homework assignments due?", "Mondays and Thursdays");
// console.log(card9.front);
// console.log(card9.back);

var card10= new BasicCard("What holiday is coming up next?", "Fourth of July");
// console.log(card10.front);
// console.log(card10.back);

var card1Cloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
// console.log(card1Cloze.text);
// console.log(card1Cloze.cloze);
// console.log(card1Cloze.partial());

var card2Cloze = new ClozeCard("Donald Trump is the current president", "Donald Trump");
// console.log(card2Cloze.text);
// console.log(card2Cloze.cloze);
// console.log(card2Cloze.partial());

var card3Cloze = new ClozeCard("Jane knows nothing about politics", "Jane");
// console.log(card3Cloze.text);
// console.log(card3Cloze.cloze);
// console.log(card3Cloze.partial());

var card4Cloze = new ClozeCard("Bruce Banner is the hottest Avenger", "Bruce Banner");
// console.log(card4Cloze.text);
// console.log(card4Cloze.cloze);
// console.log(card4Cloze.partial());

var card5Cloze = new ClozeCard("Baby Groot is the cutest Avenger", "Baby Groot");
// console.log(card5Cloze.text);
// console.log(card5Cloze.cloze);
// console.log(card5Cloze.partial());

var card6Cloze = new ClozeCard("Thor is the God of Thunder", "Thor");
// console.log(card6Cloze.text);
// console.log(card6Cloze.cloze);
// console.log(card6Cloze.partial());

var card7Cloze = new ClozeCard("Vitamin C is the most important supplement to have when you're sick", "Vitamin C");
// console.log(card7Cloze.text);
// console.log(card7Cloze.cloze);
// console.log(card7Cloze.partial());

var card8Cloze = new ClozeCard("Sushi is Jane's favorite food", "Sushi");
// console.log(card8Cloze.text);
// console.log(card8Cloze.cloze);
// console.log(card8Cloze.partial());

var card9Cloze = new ClozeCard("Mondays and Thursdays are when homework assignments are due", "Mondays and Thursdays");
// console.log(card9Cloze.text);
// console.log(card9Cloze.cloze);
// console.log(card9Cloze.partial());

var card10Cloze = new ClozeCard("Fourth of July is the holiday that is coming up next.", "Fourth of July");
// console.log(card10Cloze.text);
// console.log(card10Cloze.cloze);
// console.log(card10Cloze.partial());


module.exports = ClozeCard;
