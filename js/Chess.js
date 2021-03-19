'use strict';

/**
* Initializes the Chess app.
*/
function Chess() {
  this.filters = {
    city: '',
    price: '',
    category: '',
    sort: ''
  };

  this.dialogs = {};

  firebase.auth().signInAnonymously()
  .catch(function(err) {
    console.log(err);
  });
}

Chess.prototype.subscribe = function(email) {
  var collection = firebase.firestore().collection('subscribers');
  return collection.add({ email });
};


window.onload = function() {
  window.app = new Chess();

  const notifyForm = document.querySelector(".form-subscribe");

  notifyForm.onsubmit = (ev) => {
    ev.preventDefault();

    const emailField = notifyForm.querySelector('[name="email"]');

    if (!emailField || !emailField.value.length) return console.log("Input not found");

    // emailField    

    app.subscribe(emailField.value);
  };
};

