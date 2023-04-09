// getting elements from indexedDB.html
var input=document.querySelector("#input");
var output=document.querySelector("#output");
var btnSubmit=document.querySelector("#btn-submit");


var url="https://api.funtranslations.com/translate/minion.json"

btnSubmit.addEventListener("click", eventTranslate)

function eventTranslate() {
    var inputText=input.value;
    output.innerText= "TRANSLATED "+ inputText
}