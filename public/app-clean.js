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
  // select page elements and save to variables
  var quotesSection = document.querySelector("#quotes");
  var newQuoteSection = document.querySelector("#newQuoteSection");
  var newQuoteButton = document.querySelector(".newQuoteButton");
  
  for (var i = 0; i < quotes.length; i++) {
    appendQuote(quotes[i]);
  };

    var deleteButtonsCollection = document.querySelectorAll("#deleteButton");
    var blockQuotesCollection = document.querySelectorAll("section#quotes blockquote");

    //this function returns a function with the appropriate and matching index, to the index of the delete button, hard coded into each returned function separately
    var makeDeleteQuoteFunction = function(index){
      var deleteThisQuote = function(){
        blockQuotesCollection[index].parentNode.removeChild(blockQuotesCollection[index]);
      }//.bind(this)
      return deleteThisQuote;
    }

    for (var i = 0; i < blockQuotesCollection.length; i++){
      deleteButtonsCollection[i].onclick = makeDeleteQuoteFunction(i);
    }

  createAddQuoteForm();
  newQuoteButton.onclick = showAddQuoteForm;

};


var addQuoteForm = document.createElement("form");
addQuoteForm.classList.add("add-quote");
var addQuoteText = document.createElement("input");
addQuoteText.autofocus = true;
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

  // #### SECOND PLACE I TRIED PUTTING THE DYNAMIC PREVIEW


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

  // THIRD ATTEMPT AT DYNAMIC PREVIEW:
  var quoteObject = {
    text: addQuoteText.value,
    author: addQuoteAuthor.value
  }
  var quotesSection = document.querySelector("#quotes")
  quoteArticleLive = document.createElement("article");

  quoteArticleLive.classList.add("quote");
  blockQuoteLive = document.createElement("blockquote");
  blockQuoteLive.classList.add("blockquote-live");

  quotesSection.appendChild(quoteArticleLive);
  quoteArticleLive.appendChild(blockQuoteLive);

};

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

  //messy messy messy, WET WET WET
  // try bring all the delete functionally creation out into it's own function - to run on DOMload and rerun when quoteblocks are added - commit first - I fear scope issues
  var deleteButtonsCollection = document.querySelectorAll("#deleteButton");
  var blockQuotesCollection = document.querySelectorAll("section#quotes blockquote");
  
  var makeDeleteQuoteFunction = function(index){
    var deleteThisQuote = function(){
      blockQuotesCollection[index].parentNode.removeChild(blockQuotesCollection[index]);
    }//.bind(this)
    return deleteThisQuote;
  }

  for (var i = 0; i < blockQuotesCollection.length; i++){
    deleteButtonsCollection[i].onclick = makeDeleteQuoteFunction(i);
  }

};//appendQuote function


  // ### FIRST PLACE I TRIED PUTTING THE DYNAMIC PREVIEW
// addQuoteText.onfocus = function(event){
  //created multiple stacking preview quotes on unfocussing and re-focussing the quote text input box


addQuoteText.oninput = function(event){
  blockQuoteLive.innerHTML = this.value;
};

addQuoteAuthor.onfocus = function(){
  citeLive = document.createElement("cite");
  blockQuoteLive.appendChild(citeLive);
}

addQuoteAuthor.oninput = function(event){
  citeLive.innerHTML = "- " + this.value;
};


addQuoteForm.onsubmit = function(event){
  event.preventDefault();
  addQuoteArgs = {
    text: addQuoteText.value,
    author: addQuoteAuthor.value
  };


  addQuoteText.value = "";
  addQuoteAuthor.value = "";

  quoteArticleLive.parentNode.removeChild(quoteArticleLive);

  hideAddQuoteForm();

  //had to move these to the end, as if the new quote is appended before the addQuoteForm has it's text box values reset and the form itself is hidden. The submit causes the autofocus to jump into the still-displaying first input box, and an additional preview quoteblock was created with the already-properly-added quote information, 
  var additionalQuote = new Quote(addQuoteArgs);
  appendQuote(additionalQuote);
}

window.onload = domLoaded;