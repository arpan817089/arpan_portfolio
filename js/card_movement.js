const card = document.querySelectorAll(".card");
const video = document.querySelectorAll(".vid");


// Select all cards from card class and giving them movement
card.forEach((item) => {
item.addEventListener("mousemove",(e) => {
const coordBox = item.getBoundingClientRect();
const centerPointX = coordBox.x + coordBox.width / 2;
const centerPointY = coordBox.y + coordBox.height / 2;

const maxRotation = 20;

//Y rotation
const rotationFactorY = maxRotation / (coordBox.width / 2);
const yRotation = Math.ceil( (e.clientX - centerPointX) * rotationFactorY );

//X rotation
const rotationFactorX = maxRotation / (coordBox.height / 2);
const xRotation = -1 * Math.ceil( (e.clientY - centerPointY) * rotationFactorX );



item.style.cssText = `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;
})
});


//Video Animation.(Translate to z 80px and translate to y -20px)
video.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    item.style.transform = `translateZ(80px) translateY(-20px)`;
  })

});

// At Mouseleave card will go to the original position in the card-container
card.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    item.style.transform = `rotateY(0deg) rotateX(0deg)`;
  })

});


// At Mouseleave video will go to the original position in the card
video.forEach((item) => {
  item.addEventListener("mouseleave", (e) => {
    item.style.transform = `translateZ(0px)`;
  })

});
