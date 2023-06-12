const errorE = document.getElementById('errorE')
const errorP = document.getElementById('errorP')
const errorN = document.getElementById('errorN')
const errorS = document.getElementById('errorS')

let btn = document.querySelector('.singIn')
let inputEmail = document.querySelector('.email-box') // <=== value
let inputPassword = document.querySelector('.password-box') // <=== value
let nameBox = document.querySelector('.name-box') 

let checkMark1 = document.querySelector('.checkmark-1') 
let checkMark2 = document.querySelector('.checkmark-2') 
let checkMark3 = document.querySelector('.checkmark-3')

function ValidateName() {

    if(nameBox.value.length == 0 ) {
       checkMark1.style.visibility = "hidden"
       return errorN.innerHTML = "Name is Required";
        
    } 
    if(nameBox.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*/)  ) {
      errorN.innerHTML = "";
      return checkMark1.style.visibility = "visible"
    }  
    if(nameBox.value.match(/^[A-Za-z0-9]*\s{1}[A-Za-z0-9]*/)) {
        errorN.innerHTML = "Name is Required";
        return checkMark1.style.visibility = "hidden"
  
    }
    if(nameBox.value.match(/^[A-Za-z0-9]*\s{0}[A-Za-z0-9]*/)) {
        errorN.innerHTML = "Write full name";
        return checkMark1.style.visibility = "hidden"
  
    }

     return errorN.innerHTML = "Write full name";
    

}

function ValidateEmail() {
    
    if(inputEmail.value.length == 0) {
         checkMark2.style.visibility = "hidden";
         errorE.innerHTML = "Email is Required";
         return false;
    }
    if(!inputEmail.value.match(/^[a-zA-Z0-9-._]*@[a-zA-Z]+\.[a-zA-Z]{2,4}/) ) {
         errorE.innerHTML = "Email invalid";
         checkMark2.style.visibility = "hidden";

         return false;
    }

         errorE.innerHTML = "";
         checkMark2.style.visibility = "visible";
         return true;
 
}

function ValidatePassword() {
    let count = 10;
    let left = count - inputPassword.value.length ;

    if(inputPassword.value.length == 0) {
        errorP.innerHTML = "10 Character Required";
        checkMark3.style.visibility = "hidden"
    }
    if(inputPassword.value.length > 0) {
        errorP.innerHTML = left + " Character remaining";
        checkMark3.style.visibility = "hidden"
    }
    if(inputPassword.value.length >= 10) {
        errorP.innerHTML = '';
        checkMark3.style.visibility = "visible"
    }


}

btn.addEventListener("click",function (e) {
    e.preventDefault()
    if( !ValidateName() || !ValidateEmail() || !ValidatePassword() ) {
        errorS.style.display = "block"
        errorS.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            errorS.style.display = "none"
        }, 3000)
        return false; 
    }

})


 




// let i = "haval_mariwan123@outlook.com"
// let j = i.match(/^[a-zA-Z0-9]+[-._]+[a-zA-Z0-9]+/g)
// let o = i.match(/^[a-zA-Z0-9]+[-._]+[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}/g)

// match(/^[a-zA-Z0-9]+[-._]+[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}/g)
// match(/^[a-zA-Z]+\.[a-zA-Z]+[0-9]*/g)
// match(/^[a-zA-Z]+[.-_]+[a-zA-Z]+[0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,4}$/g)
// match(/^[a-zA-Z0-9.-_]*@[a-zA-Z]+\.[a-zA-Z]{2,4}/)

// console.log(o)


/* btn.addEventListener('click', function(e) {
    e.preventDefault()
    let mess = []
    if(inputEmail.value === '' || inputEmail.value === null ) {
         alert1.style.visibility = "visible"
         checkMark1.style.visibility = "hidden"

    } if(inputEmail.value !== '' || inputEmail.value === null) {
        alert1.style.visibility = "hidden"
        checkMark1.style.visibility = "visible"

    }

    const myPromise = new Promise( (resolve, reject) => {
        
        if (inputPassword.value.length <= 6) {
            alert2.style.visibility = "visible" 
            checkMark2.style.visibility = "hidden"
            reject("password must be greater than 6 characters")
             
        }

        if(inputPassword.value.length > 6) {
           alert2.style.visibility = "hidden"
           checkMark2.style.visibility = "visible"
           resolve("Succeed")
        
    } })

    myPromise.then((data) => {
        console.log(data)
     })
 
     myPromise.catch((error) => {
        console.log(error)
     })

       
 
})
 */










