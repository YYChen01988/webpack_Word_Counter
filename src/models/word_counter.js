
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
  return words.filter(element => element.length).length;
}

module.exports = WordCounter
