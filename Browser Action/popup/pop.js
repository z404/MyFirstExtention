function setColorRed() {
    const makeItRed = 'document.body.style.border = "25px solid red"';
    const executing = browser.tabs.executeScript({
        code: makeItRed
    });
    executing.then(onExecuted, onError);
}

function setColorBlue() {
    const makeItBlue = 'document.body.style.border = "25px solid blue"';
    const executing = browser.tabs.executeScript({
        code: makeItBlue
    });
    executing.then(onExecuted, onError);
}

function setColorYellow() {
    const makeItYellow = 'document.body.style.border = "25px solid yellow"';
    const executing = browser.tabs.executeScript({
        code: makeItYellow
    });
    executing.then(onExecuted, onError);
}



document.getElementById("red").addEventListener("click", setColorRed);
document.getElementById("blue").addEventListener("click", setColorBlue);
document.getElementById("yellow").addEventListener("click", setColorYellow);