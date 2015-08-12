---
---

function setIdenticons() {
    hashes = [];
    {% for tutorial in site.data.tutorials %}
        var shaObj = new jsSHA("SHA-512", "TEXT");
        shaObj.setHMACKey("abc", "TEXT");
        shaObj.update("{{ tutorial.title }}");
        var hmac = shaObj.getHMAC("HEX");
        hashes[{{ forloop.index0 }}] = hmac;
    {% endfor %}

    // base64 encoded PNG
    for (i = 0; i < hashes.length; i++) {
        data = new Identicon(hashes[i], 300).toString();
        document.getElementById("img-"+i).src="data:image/png;base64," + data;
    }
}

window.onload = setIdenticons;
