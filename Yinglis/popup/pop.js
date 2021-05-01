function changeText() {
    // const Changetextpath = "Changetext.js";

    const executing = browser.tabs.executeScript({
        file: "/Changetext.js"
    });
    executing.then(onExecuted, onError);
}

document.getElementById("addtext").addEventListener("click", changeText);