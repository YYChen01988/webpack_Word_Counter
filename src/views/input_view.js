
const PubSub = require('../helpers/pub_sub.js');


const InputView = function(){

};

InputView.prototype.bindEvents = function(){
  const input = document.querySelector('#text');
  input.addEventListener('input', (event) => {
    const inputtedText = event.target.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
  })
};


module.exports = InputView;
