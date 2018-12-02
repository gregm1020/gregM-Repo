window.addEventListener('DOMContentLoaded',init,false);

function init() {
    alert ('The page has loaded');                  /* gpm 2018-11-30 creates an alert for when the page is loaded */
    var buttons = document.getElementsByTagName("button")
buttons[0].addEventListener('click', changeStyle,false)
buttons[1].addEventListener('click', changePic,false)
buttons[2].addEventListener('click', revealEmail,false)
buttons[3].addEventListener('click', hideInfo,false)

var fieldset = document.getElementsByTagName('input');
for (var i = 0; i < fieldset.length; i++) {
    fieldset[i].addEventListener('click', toggle, false);
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

function toggle() {
    var id=this.id
    switch (id) {       /* gpm 2018-12-2 this goes through multiple cases for our checkboxes at the start of the resume document */
        case "EDtoggle": {                  /* gpm 2018-12-2 This case is for if the id is education info */
            var educ = document.getElementsByClassName("EdInfo");
            for (var i = 0; i < educ.length; i++) {
                educ[i].classList.toggle("on")
            }
        };
        break;
        case "CLASStoggle": {           /* gpm 2018-12-2 This case is for if the id is class info */
             var class = document.getElementsByClassName("ClassInfo");
             for (var i = 0; i < class.length; i++) {
                 class[i].classList.toggle("on")
        }   
    };
         break;
         case "VOLtoggle": {                /* gpm 2018-12-2 This case is for if the id is volunteer info */
                 var vol = document.getElementsByClassName("VolunteerInfo");
                 for (var i = 0; i < vol.length; i++) {
                        vol[i].classList.toggle("on")
         }
    };
         break;
         case "SKILLtoggle": {          /* gpm 2018-12-2 This case is for if the id is skill info */
             var skill = document.getElemtnsByClassName("SkillInfo");
             for (var i = 0; i < skill.length; i++) {
                        skill[i].classList.toggle("on")
         }
    };
        break;
        case "INTERtoggle": {           /* gpm 2018-12-2 This case is for if the id is interests info */
            var inter = document.getElementsByClassName("InterestInfo");
            for (var i = 0; i < inter.length; i++) {
                        inter[i].classList.toggle("on")
        }
    };
        break;
        case "PLACEtoggle": {           /* gpm 2018-12-2 This case is for if the id is a place */
            var place = document.getElementsByClassName("place");
            for (var i = 0; i < place.length; i++) {
                        place[i].classList.toggle("on")
        }
    };
    break;
    }
  }  
}

window.onload = init;