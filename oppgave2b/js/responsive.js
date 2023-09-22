var hidden = true;

function showLinks() {
    var x = document.getElementById("links");
    if (x.className === "links") {
        console.log(x.className);
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}