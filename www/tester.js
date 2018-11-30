window.addEventListener('DOMContentLoaded',init,false);

function init() {
    alert ('The page has loaded');                  /* gpm 2018-11-30 creates an alert for when the page is loaded */
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeStyle,false)
buttons[1].addEventListener('click', changePic,false)
buttons[2].addEventListener('click', revealEmail,false)
buttons[3].addEventListener('click', hideInfo,false)
}

function changeStyle() {
var p1 = document.getElementById("changeStyle")     /*  gpm 2018-11-30 when you click the button this changes the font size to 30px  */
{p1.style.fontSize="30px";}
}

function changePic() {
var pic = document.getElementById("myImage")
{pic.style.visibility = "visible";}             /* gpm 2018-11-30 makes it so the picture is hidden from view and change to another picture when I click a button */
}

function revealEmail() {
var reveal = document.getElementById("showEmail")       /* gpm 2018-11-30 this reveals my email by clicking the button */
{reveal.style.show} 
}

function hideInfo() {
var hide = document.getElementById("hideInfo")      /* gpm 2018-11-30 hides the info/paragraph when clicking the button */
{hide.style.display = "none"}
}