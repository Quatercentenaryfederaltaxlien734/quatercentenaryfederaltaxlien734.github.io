function displayLastModified() {
    let lastMod = document.lastModified;

    document.getElementById("lastModified").innerHTML =
        "Last Modified: " + lastMod;
}