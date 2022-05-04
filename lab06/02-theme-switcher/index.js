/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

// use StyleSheet.css

const changeToDefault = () => {
   document.querySelector("body").className = "";
}

const changeToDesert = () => {
   document.querySelector("body").className = "desert";
}

const changeToOcean = () => {
   document.querySelector("body").className = "ocean";
}

const changeToHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
}

document.getElementById("default").addEventListener("click", changeToDefault);
document.getElementById("ocean").addEventListener("click", changeToOcean);
document.getElementById("desert").addEventListener("click", changeToDesert);
document.getElementById("high-contrast").addEventListener("click", changeToHighContrast);

