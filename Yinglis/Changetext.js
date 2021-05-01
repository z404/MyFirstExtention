function TranslateYinglis(text) {
    var text2 = text.toLowerCase();

    //Replace words
    text2 = text2.replace(' goodnight ', ' nitenite ');
    text2 = text2.replace(" i don't ", " ion ");
    text2 = text2.replace(" want to ", " wanna ");
    text2 = text2.replace(" ion wanna ", " ionwanna ");
    text2 = text2.replace(" going to ", " gonna ");
    text2 = text2.replace(" discrete ", "discrete ");
    text2 = text2.replace(" english ", " yeinglis ");
    text2 = text2.replace(" yes ", " ye ");
    text2 = text2.replace(" oh no ", " wohno ");
    text2 = text2.replace(" peace ", " pspoice ");
    text2 = text2.replace(" lol ", " xD ");
    text2 = text2.replace(" if ", " yif ");
    text2 = text2.replace(" i am ", " i iz ");
    text2 = text2.replace(" im ", " i iz ");
    text2 = text2.replace(" is ", " iz ");

    //Apply rules
    text2 = text2.replace("ing ", "in ");
    text2 = text2.replace("ck", "cc");
    text2 = text2.replace("sh ", "sh");
    text2 = text2.replace(" s", " sh");
    text2 = text2.replace(" shh", " sh");
    text2 = text2.replace(" e", " ye");
    text2 = text2.replace("k", "g");
    text2 = text2.replace("me ", "m ");
    text2 = text2.replace(" m ", " me ");
    text2 = text2.replace(" aw", " wo");
    text2 = text2.replace("y ", "i ");
    text2 = text2.replace(" qu", " qw");
    return text2;
}

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = TranslateYinglis(text);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}