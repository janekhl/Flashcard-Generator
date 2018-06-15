var BasicCard = require("./BasicCard.js");

var ClozeCard = function (text, cloze){
    this.text=text;
    this.cloze=cloze;
    this.partial=function(){
        if (this.text.includes(this.cloze)){
            this.partialText=this.text.replace(this.cloze,"...");
        }else{
            var errorMessage = 'ERROR! The full text: "' + this.text + '" does not contain the cloze text: "' + this.cloze+'"';
            return errorMessage;
        }
    }
    this.partialText=this.text.replace(this.cloze,"...");
}


module.exports = ClozeCard;
