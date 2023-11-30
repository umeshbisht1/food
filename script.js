function myFunction() {
    var x = document.getElementById("myNavbar");
    console.log("jai ist dev");

    if (x.className === "navbar") {
        document.getElementById("click").innerHTML = 'X';
        x.className = " responsive";
    } else {
        document.getElementById("click").innerHTML = '&#9776';
        x.className = "navbar";
    }
}