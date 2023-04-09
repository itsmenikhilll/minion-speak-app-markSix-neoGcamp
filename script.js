var input=document.querySelector("#input");
var output=document.querySelector("#output");
var btnSubmit=document.querySelector("#btn-submit");


var url="https://api.funtranslations.com/translate/minion.json"


btnSubmit.addEventListener("click", eventTranslate);

function eventTranslate() {
    var inputText=input.value;
    var newURL= constructURL(inputText);
    console.log("new URL is "+ newURL);

    fetch(newURL)
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(()=> alert("something went wrong! try after sometime."))
}

function constructURL(inputText){
var encodedURI= encodeURI(inputText);
return `${url}?text=${encodedURI}`;
}
