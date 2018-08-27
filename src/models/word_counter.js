
const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function(){

};

WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:text-inputted", (event) => {
    const inputtedText = event.detail;
    const result = this.numberOfWords(inputtedText);
    PubSub.publish("WordCounter:result", result);
  });
}

WordCounter.prototype.numberOfWords = function(text){
  var words = text.split(" ");
  // console.log(words);
  words = words.filter(element => element.length>0);
  // console.log(words);
  return words.length;
}


module.exports = WordCounter
