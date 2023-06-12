const change = document.querySelector('.change');
const a = document.querySelectorAll(".a-nav");
const logo = document.querySelector('#img-1');
let p1 = document.querySelector('.p-1');
let arr1 = document.querySelector('.arr-1');

let setting = document.querySelector('.setting')
let choose = document.querySelector('.choose-color')



function convert(color) {
    
    if(color === "#1b2332") { 
        change.style.backgroundColor = color
        change.style.color = "white"
        change.style.transition = "1s"
        logo.style.filter = "brightness(1)"
        setting.style.filter = "brightness(1)"
        p1.style.color = "white"
        arr1.style.color = "white"
        arr1.style.fontWeight = "none"


        
        for(let j of a) { 
            j.style.color = "white"
            j.style.fontWeight ="normal"
            
        }
    }
 
    if(color === "#e76b80") {
        change.style.backgroundColor = color
        change.style.color = "white"
        change.style.transition = "1s" 
        logo.style.filter = "brightness(1)"
        p1.style.color = "white"
        arr1.style.color = "white"
        arr1.style.fontWeight = "bold"
        setting.style.filter = "brightness(0) invert(1)"


    }


    if(color === "white") {
        change.style.backgroundColor = color
        change.style.transition = "1s"
        logo.style.filter = "brightness(0) invert(0)"
        setting.style.filter = "brightness(1) invert(0)"
        p1.style.color = "black"
        arr1.style.color = "red"
        arr1.style.fontWeight = "bold"

        
        for(let i of a) {
            i.style.color = "black"
            i.style.fontWeight = "bold"
        }
    } 


    if(color === "black") {
        change.style.backgroundColor = color
        change.style.color = "white" 
        change.style.transition = "1s" 
        logo.style.filter = "brightness(1) invert(0)"
        setting.style.filter = "brightness(0) invert(1)"
 
        for(let j of a) { 
            j.style.color = "white"

        }  
    }

}
 


setting.addEventListener("click", () => {

    if(choose.style.display === "none") {
      choose.style.display = "flex"
      choose.style.transition = "2s"

    } else {
      choose.style.display = "none"  
      
    }

})


