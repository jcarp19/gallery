"use strict";

// let imageArray = ["image1.jpg", "image2.jpg", "image3.jpg"]
let numPics = 9;
let counter = 1;
const miracleSliderUp = () => {

    if (counter < numPics) {
        counter = counter + 1;
        document.querySelector("#slider_wrapper").style.backgroundImage = `url(images/image${counter}.jpg)`;
    } else if (counter = numPics) {
        document.querySelector("#slider_wrapper").style.backgroundImage = `url(images/image1.jpg)`;
        counter = 1;
    };
};
const miracleSliderDown = () => {

    if (counter > 1) {
        counter = counter - 1;
        document.querySelector("#slider_wrapper").style.backgroundImage = `url(images/image${counter}.jpg)`;
    } else if (counter = 1) {
        document.querySelector("#slider_wrapper").style.backgroundImage = `url(images/image9.jpg)`;
        counter = numPics;

    };
};


document.querySelector(".right").addEventListener("click", miracleSliderUp);
document.querySelector(".left").addEventListener("click", miracleSliderDown);
