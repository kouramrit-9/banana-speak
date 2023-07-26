document.addEventListener("DOMContentLoaded", function () {
    let btnTranslate = document.querySelector("#btn-translate");
    let txtInput = document.querySelector("#txt-input");
    let outputDiv = document.querySelector("#output");
    let serverUrl = "https://api.funtranslations.com/translate/minion.json";

    function getTranslationUrl(text) {
        return serverUrl + "?text=" + encodeURIComponent(text);
    }

    function errorHandler(error) {
        console.log("Error occurred: ", error);
        alert("Something wrong with the server!! Try again after some time.");
    }

    function clickHandler() {
        let inputText = txtInput.value;
        let translationUrl = getTranslationUrl(inputText);

        fetch(translationUrl)
            .then(response => response.json())
            .then(data => {
                let translatedText = data.contents.translated;
                outputDiv.innerText = translatedText;
            })
            .catch(errorHandler);
    }

    btnTranslate.addEventListener("click", clickHandler);
});