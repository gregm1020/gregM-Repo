window.addEventListener('DOMContentLoaded',init,false);

function init() {
    alert ('The page has loaded');
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeStyle,false)
buttons[1].addEventListener('click', changePic,false)
buttons[2].addEventListener('click', revealEmail,false)
buttons[3].addEventListener('click', hideInfo,false)
}

function changeStyle() {
var p1 = document.getElementById("changeStyle")
{p1.style.fontSize="30px";}
}

function changePic() {
var pic = document.getElementById("myImage")
{pic.style.visibility = "visible";}
}

function revealEmail() {
var reveal = document.getElementById("showEmail")
{reveal.style.show}
}

function hideInfo() {
var hide = document.getElementById("hideInfo")
{hide.style.display = "none"}
}