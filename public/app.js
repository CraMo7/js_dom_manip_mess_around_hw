var Quote = function(args){
  this.text = args.text;
  this.author = args.author;
};

var quotes = [];
var quote1 = new Quote({text: "Visual Basic is the way forward, I don't know why we are doing JavaScript.", author: "Jay Chetty"})
var quote2 = new Quote({text: "The only CSS you need to know is background-color: tomato", author: "Rick"})
var quote3 = new Quote({text: "Are those hand-cut artisan crisps?", author: "Keith"})
var quote4 = new Quote({text: "Scaffolding is nothing but a fiery hell.", author: "Valerie"})
quotes = [quote1, quote2, quote3, quote4];

var domLoaded = function(){
  //
  var quotesSection = document.querySelector("#quotes");
  var newQuoteSection = document.querySelector("#newQuoteSection");
  var newQuoteButton = document.querySelector(".newQuoteButton");
  
  for (var i = 0; i < quotes.length; i++) {
    appendQuote(quotes[i]);
    // var quoteArticle = document.createElement("article");
    // quoteArticle.classList.add("quote");
    // var blockQuote = document.createElement("blockquote");
    // blockQuote.innerHTML = quotes[i].text;
    // var cite = document.createElement("cite");
    // quotesSection.appendChild(quoteArticle);
    // quoteArticle.appendChild(blockQuote);
    // blockQuote.appendChild(cite);
    // cite.innerHTML = "-" + quotes[i].author;

  };

    var deleteButtonsCollection = document.querySelectorAll("#deleteButton");
    var blockQuotesCollection = document.querySelectorAll("section#quotes blockquote");
    
    var deleteQuote = function(index){
      blockQuotesCollection[index].parentNode.removeChild(blockQuotesCollection[index]);
    };

    //adding event listeners to delete buttons
    //this invokes the function within the loop and so deletes the elements immediately
    //plan B, write a function to make each delete function
    for (var i = 0; i < blockQuotesCollection.length; i++){
      deleteButtonsCollection[i].onclick = deleteQuote(i);
    }


    var makeDeleteQuoteFunction = function(index){
      function deleteThisQuote(){
        deleteButtonsCollection[index].onclick = 
      }
    }


  // console.log(deleteButtonsCollection);
  // console.log(blockQuotesCollection);
  // console.log(deleteButtonsCollection.length);
  // console.log(blockQuotesCollection.length);

  // deleteButton.onclick = deleteQuote;

  createAddQuoteForm();
  newQuoteButton.onclick = showAddQuoteForm;

};


var addQuoteForm = document.createElement("form");
addQuoteForm.classList.add("add-quote");
var addQuoteText = document.createElement("input");
addQuoteText.type = "text";
var addQuoteAuthor = document.createElement("input");
addQuoteAuthor.type = "text";
var addQuoteSubmit = document.createElement("input");
addQuoteSubmit.type = "submit";
var quoteInputLabel = document.createElement("label");
quoteInputLabel.innerHTML = "Quote: ";
var quoteAuthorLabel = document.createElement("label");
quoteAuthorLabel.innerHTML = "Author: ";



var createAddQuoteForm = function(){
  addQuoteForm.appendChild(quoteInputLabel);
  addQuoteForm.appendChild(addQuoteText);
  addQuoteForm.appendChild(quoteAuthorLabel);
  addQuoteForm.appendChild(addQuoteAuthor);
  addQuoteForm.appendChild(addQuoteSubmit);
  newQuoteSection.appendChild(addQuoteForm);
  addQuoteForm.style.display = "none";
};

var hideNewQuoteButton = function(){
  var qutBttn = document.querySelector(".newQuoteButton");
  qutBttn.style.display = "none";
};

var showNewQuoteButton = function(){
  var qutBttn = document.querySelector(".newQuoteButton");
  qutBttn.style.display = "block";
};

var showAddQuoteForm = function(){
  hideNewQuoteButton();
  addQuoteForm.style.display = "block";
}

var hideAddQuoteForm = function(){
  addQuoteForm.style.display = "none";
  showNewQuoteButton();
};

var appendQuote = function(quoteObject){
  var quotesSection = document.querySelector("#quotes")
  var quoteArticle = document.createElement("article");
  var deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";
  deleteButton.innerText = "- delete -";
  quoteArticle.classList.add("quote");
  var blockQuote = document.createElement("blockquote");
  blockQuote.innerHTML = quoteObject.text;
  var cite = document.createElement("cite");
  quotesSection.appendChild(quoteArticle);
  quoteArticle.appendChild(blockQuote);
  blockQuote.appendChild(cite);
  blockQuote.appendChild(deleteButton);
  cite.innerHTML = "-" + quoteObject.author;
};


addQuoteForm.onsubmit = function(event){
  event.preventDefault();
  addQuoteArgs = {
    text: addQuoteText.value,
    author: addQuoteAuthor.value
  };

  var additionalQuote = new Quote(addQuoteArgs);
  appendQuote(additionalQuote);

  addQuoteText.value = "";
  addQuoteAuthor.value = "";

  hideAddQuoteForm();
}

// //////////////////////////////////////////////////
// var quoteArticle = document.createElement("article");
// quoteArticle.classList.add("quote");

// var blockQuote = document.createElement("blockquote");
// blockQuote.innerText = "New Quote.......";

// var cite = document.createElement("cite");
// cite.innerText = "Albert Einstein";

// blockQuote.appendChild(cite);

// quoteArticle.appendChild(blockQuote);
// //////////////////////////////////////////////////


window.onload = domLoaded;
