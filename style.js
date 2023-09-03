

//Add new style class to item divs mouseenter
let change = function () {
    this.classList.add('newstyle');
}


//Remove new style class to item divs mouseleave
let changeBack = function () {
    this.classList.remove('newstyle');
}




//Listeners for item divs

for (let i = 0; i < document.querySelectorAll(".item").length; i++) {

    document.querySelectorAll('.item')[i].addEventListener("mouseenter", change);  
    document.querySelectorAll('.item')[i].addEventListener("mouseleave", changeBack) 
    };






 //Add new style for person divs   

let personChange = function () {
this.classList.add('personNewStyle');
}

//Remove new style for person divs

let personChangeBack = function () {
    this.classList.remove('personNewStyle');
}



//Listeners for person divs

for (let x = 0; x < document.querySelectorAll('.person').length; x++) {

    document.querySelectorAll('.person')[x].addEventListener('mouseenter', personChange);
    document.querySelectorAll('.person')[x].addEventListener('mouseleave', personChangeBack);

}



    
    