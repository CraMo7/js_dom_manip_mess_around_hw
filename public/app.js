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
    
    // var deleteQuote = function(index){
    //   blockQuotesCollection[index].parentNode.removeChild(blockQuotesCollection[index]);
    // };

    //adding event listeners to delete buttons
    //this invokes the function within the loop and so deletes the elements immediately
    //plan B, write a function to make each delete function
    // for (var i = 0; i < blockQuotesCollection.length; i++){
    //   deleteButtonsCollection[i].onclick = deleteQuote(i);
    // }

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


  // var quoteObject = {
  //   text: addQuoteText.value,
  //   author: addQuoteAuthor.value
  // }
  // var quotesSection = document.querySelector("#quotes")
  // quoteArticleLive = document.createElement("article");
  // // deleteButtonLive = document.createElement("button");
  // // deleteButtonLive.id = "deleteButton";
  // // deleteButtonLive.innerText = "- delete -";
  // quoteArticleLive.classList.add("quote");
  // blockQuoteLive = document.createElement("blockquote");
  // blockQuoteLive.classList.add("blockquote-live");
  // // blockQuoteLive.innerHTML = quoteObject.text;
  // // citeLive = document.createElement("cite");
  // // citeLive.classList.add("cite-live");
  // // blockQuoteLive.appendChild(deleteButtonLive);
  // // citeLive.innerHTML = "- " + quoteObject.author;

  // // citeLive = document.createElement("cite");
  // // citeLive.classList.add("cite-live")
  // quotesSection.appendChild(quoteArticleLive);
  // quoteArticleLive.appendChild(blockQuoteLive);
  // // blockQuoteLive.appendChild(citeLive);
  // // citeLive.innerHTML = "fgh";

  // // blockQuoteLive.appendChild(citeLive);
  // // citeLive.innerHTML = "- " + quoteObject.author;

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
  // deleteButtonLive = document.createElement("button");
  // deleteButtonLive.id = "deleteButton";
  // deleteButtonLive.innerText = "- delete -";
  quoteArticleLive.classList.add("quote");
  blockQuoteLive = document.createElement("blockquote");
  blockQuoteLive.classList.add("blockquote-live");
  // blockQuoteLive.innerHTML = quoteObject.text;
  // citeLive = document.createElement("cite");
  // citeLive.classList.add("cite-live");
  // blockQuoteLive.appendChild(deleteButtonLive);
  // citeLive.innerHTML = "- " + quoteObject.author;

  // citeLive = document.createElement("cite");
  // citeLive.classList.add("cite-live")
  quotesSection.appendChild(quoteArticleLive);
  quoteArticleLive.appendChild(blockQuoteLive);
  // blockQuoteLive.appendChild(citeLive);
  // citeLive.innerHTML = "fgh";

  // blockQuoteLive.appendChild(citeLive);
  // citeLive.innerHTML = "- " + quoteObject.author;

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

  //messy messy messy, WET WET WET
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
  // try bring all the delete functionally creation out into it's own function - to run on DOMload and rerun when quoteblocks are added - commit first - I fear scope issues

};//appendQuote function


  // ### FIRST PLACE I TRIED PUTTING THE DYNAMIC PREVIEW
// addQuoteText.onfocus = function(event){
//   var quoteObject = {
//     text: addQuoteText.value,
//     author: addQuoteAuthor.value
//   }
//   var quotesSection = document.querySelector("#quotes")
//   quoteArticleLive = document.createElement("article");
//   // deleteButtonLive = document.createElement("button");
//   // deleteButtonLive.id = "deleteButton";
//   // deleteButtonLive.innerText = "- delete -";
//   quoteArticleLive.classList.add("quote");
//   blockQuoteLive = document.createElement("blockquote");
//   blockQuoteLive.classList.add("blockquote-live");
//   blockQuoteLive.innerHTML = quoteObject.text;
//   citeLive = document.createElement("cite");
//   citeLive.classList.add("cite-live");
//   quotesSection.appendChild(quoteArticleLive);
//   blockQuoteLive.appendChild(citeLive);
//   quoteArticleLive.appendChild(blockQuoteLive);
//   // blockQuoteLive.appendChild(deleteButtonLive);
//   // citeLive.innerHTML = "- " + quoteObject.author;
// }

// addQuoteAuthor.onfocus = function(event){
//   citeLive = document.createElement("cite");
//   citeLive.classList.add("cite-live")
//   blockQuoteLive.appendChild(citeLive);
//   citeLive.innerHTML = "- " + quoteObject.author;

// };

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
  // blockQuoteLive.parentNode.removeChild(blockQuoteLive);
  // citeLive.parentNode.removeChild(citeLive);

  hideAddQuoteForm();
  var additionalQuote = new Quote(addQuoteArgs);
  appendQuote(additionalQuote);
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
