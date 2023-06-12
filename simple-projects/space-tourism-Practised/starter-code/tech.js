let open = document.querySelector(".open-ic");
let close = document.querySelector(".close-ic");
let nav = document.querySelector(".navbar");




function OpenNav() {   

    if(nav.style.display == "none" ) {
       nav.style.display = "flex";
       open.style.visibility = "hidden";
       close.style.visibility = "visible"; 
       
        
    } else {
        nav.style.display = "none";
        open.style.visibility = "visible";
        close.style.visibility = "hidden";
        // nav.style.position = "relative";
        // nav.style.left = "30rem"
        // nav.style.transition = "1s"
 
    }; 
 
};


function CloseNav() {

    if(nav.style.display === "flex") {
       
       nav.style.display = "none"
       open.style.visibility = "visible";
       close.style.visibility = "hidden";
    //    nav.style.position = "relative";
    //    nav.style.left = "-20rem"
       

    
    } else {
       nav.style.display ="none"
       open.style.visibility = "hidden";
       close.style.visibility = "visible";


    }


}



let techIMG1 = 
document.getElementsByClassName('tech-img')
[0].firstElementChild;

let techIMG2 = 
document.getElementsByClassName('tech-img')
[0].lastElementChild;


let techName2 = 
document.querySelector('.tech-names')
.lastElementChild;

let techP =  document.querySelector('.tech-p')
 
  
function openArticle1() { 
    let x = window.matchMedia("(min-width: 1000px)")

    if(x.matches) {
        techIMG1 = techIMG2.setAttribute('src','./assets/technology/image-launch-vehicle-portrait.jpg');
        techName2.innerText = "Launch vehicle";
        techP.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    
    }


    techIMG1.setAttribute('src', './assets/technology/image-launch-vehicle-landscape.jpg');
    techName2.innerText = "Launch vehicle";
    techP.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

};

function openArticle2() {
    let x = window.matchMedia("(min-width: 1000px)")

    if(x.matches) {
        techIMG1 = techIMG2.setAttribute('src','./assets/technology/image-spaceport-portrait.jpg');
        techName2.innerText = "Spaceport";
        techP.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    
    }


    techIMG1.setAttribute('src', './assets/technology/image-spaceport-landscape.jpg');
    techName2.innerText = "Spaceport";
    techP.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

};

function openArticle3() {
    let x = window.matchMedia("(min-width: 1000px)")

    if(x.matches) {
        techIMG1 = techIMG2.setAttribute('src','./assets/technology/image-space-capsule-portrait.jpg');
        techName2.innerText = "Space capsule";
        techP.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    
    }


    techIMG1.setAttribute('src', './assets/technology/image-space-capsule-landscape.jpg');
    techName2.innerText = "Space capsule";
    techP.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

};

