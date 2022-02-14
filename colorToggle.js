// Appear/disappear Menu function

function appearAndDisappearMenu() {
    let appearSidebar = document.querySelector(".nav-sidebar ul");

    if (appearSidebar.style.visibility === "visible") {
        appearSidebar.style.visibility = "hidden";
    } 
    
    else {
        appearSidebar.style.visibility = "visible";
    }
}

// Add CSS-class 'highlight' function

function addHighlight(element) {
    //console.log(element);
    $(".nav-item").removeClass("highlight");
    $(element).addClass("highlight");
}


// Changing background color and using functions of (dis)appearing the menu and the highlight of the current color
document.querySelector(".linkHome")
.addEventListener("click", function () {
    document.body.style.backgroundColor = "grey";
    appearAndDisappearMenu();
    addHighlight(this);
})

document.querySelector(".linkRed").addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
    appearAndDisappearMenu();
    addHighlight(this);
});

document.querySelector(".linkOrange").addEventListener("click", function () {
    document.body.style.backgroundColor = "orange";
    appearAndDisappearMenu();
    addHighlight(this);
});

document.querySelector(".linkPurple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    appearAndDisappearMenu();
    addHighlight(this);
});

document.querySelector(".linkGreen").addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
    appearAndDisappearMenu();
    addHighlight(this);
});

// Show menu with mouseover 
document.querySelector(".menuIcon").addEventListener("mouseover", function () {
    appearAndDisappearMenu();
});

/* Closes on mouseout, however this is
annoying because than the menu disappears also when you really want to visit a menu item.

document.querySelector(".menuIcon").addEventListener("mouseout", function () {
appearAndDisappearMenu();
// }); 

*/
