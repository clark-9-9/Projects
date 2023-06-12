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


let moonIMG = document.querySelector(".moon-img")
let moon = document.querySelector(".moon")
let paragraph = document.querySelector(".paragraph")
let art2 = document.querySelector(".art2")
let art4 = document.querySelector(".art4")


function openMOON() {

   moonIMG.setAttribute('src', './assets/destination/image-moon.webp');
   paragraph.innerText = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
   moon.innerText = "MOON";
   art2.innerText = "384,400 km";
   art4.innerText = "3 days";

}


function openMARS() {

    moonIMG.setAttribute('src', './assets/destination/image-mars.png');
    paragraph.innerText = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    moon.innerText = "MARS";
    art2.innerText = "225 mil. km";
    art4.innerText = "9 months";
 
}

function openEUROPA() {

    moonIMG.setAttribute('src', './assets/destination/image-europa.png');
    paragraph.innerText = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    moon.innerText = "EUROPA";
    art2.innerText = "628 mil. km";
    art4.innerText = "3 years";

}

function openTITAN() {

    moonIMG.setAttribute('src', './assets/destination/image-titan.png');
    paragraph.innerText = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    moon.innerText = "TITAN";
    art2.innerText = "1.6 bil. km";
    art4.innerText = "7 years";

} 


let crewIMG = document.querySelector('.crew-img');
let crewP = document.querySelector('.crew-p')

let names1 = document.getElementsByClassName('names')
[0].firstElementChild;

let names2 = document.getElementsByClassName('names')
[0].lastElementChild; //.children[1]

// console.log(names1,names2) 

function crew1() {

    crewIMG.setAttribute('src', './assets/crew/image-douglas-hurley.png');
    names1.innerText = "Commander";
    names2.innerText = "Douglas Hurley";
    crewP.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

}


function crew2() {

    crewIMG.setAttribute('src', './assets/crew/image-mark-shuttleworth.png');
    names1.innerText = "Mission Specialist";
    names2.innerText = "Mark Shuttleworth";
    crewP.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";

}
  
function crew3() {

    crewIMG.setAttribute('src', './assets/crew/image-victor-glover.png');
    names1.innerText = "Pilot";
    names2.innerText = "Victor Glover";
    crewP.innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";

}
function crew4() {

    crewIMG.setAttribute('src', './assets/crew/image-anousheh-ansari.png');
    names1.innerText = "Flight Engineer";
    names2.innerText = "Anousheh Ansari";
    crewP.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";

}







 
