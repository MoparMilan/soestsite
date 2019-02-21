const woop = document.getElementById("test");


window.addEventListener("scroll", function()
    {
    let offset = window.pageYOffset;
    woop.style.backgroundPositionY = offset / 10 + "px";
    })