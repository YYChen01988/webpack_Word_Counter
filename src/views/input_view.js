
const PubSub = require('../helpers/pub_sub.js');


const InputView = function(){

};

InputView.prototype.bindEvents = function(){

  // const form = document.querySelector('#wordcounter-form');
  // form.addEventListener('submit',(event) => {
  //     event.preventDefault();
  //     const inputtedText = event.target.text.value;
  //     PubSub.publish('InputView:text-inputted', inputtedText);
  // })

  const input = document.querySelector('#count_word');

  input.addEventListener('click', (event) => {
    const text = document.querySelector('#text');
    const inputtedText = text.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
  })
};


module.exports = InputView;
