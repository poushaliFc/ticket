function exportTicket(element) {
    var textArray = [];
    var parent = element.parentNode;
    children = parent.childNodes;

    for (i = 0; i < children.length; i++) {
        var childid = children[i].type;

        if (childid == "id" || childid == "name" || childid == "role" || childid == "header") {
            var content = children[i].value;
            textArray.push(content);

        }
        if (childid == "a") {
            console.log(a.value);

        }
    }

    var myJsonString = JSON.stringify(textArray);
    console.log(myJsonString);
}

function exportAllTicket() {
    var children = document.getElementsByName("export");
    alert(children.length);
    for (j = 0; j < children.length; j++) {
        exportTicket(children[j]);

    }

}