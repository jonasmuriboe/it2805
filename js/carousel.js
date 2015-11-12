//Gets a list of all elements with class name "hideable"
//Gets the id of the element that is currently visible
//Sets said element to be hidden
//Either increases or decreases the id depending on which button was pressed.
//Sets element[id] to be visible
function toggleSlide(dir) {
    var elements = document.getElementsByClassName("hideable");
    var visibleID = getVisible(elements);
    elements[visibleID].style.display = "none"; 
    if((dir)) {
        var makeVisible = prev(visibleID, elements.length); 
    } else {
        var makeVisible = next(visibleID, elements.length); 
    }
    elements[makeVisible].style.display = "block";
}

//Iterates over the list elements and returns the id of the visible element
function getVisible(elements) {
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}

//Decreases the value of id by 1
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}

//Increases the value of id by 1
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}