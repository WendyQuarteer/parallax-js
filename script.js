
let position = 0;
function moveSky(){
    const sky = document.getElementById("sky");
    //console.log(position);
    position++;
    sky.style.backgroundPositionX = position + "px";
    setTimeout(moveSky, 20);
}
moveSky();

let pos = 0
function moveBeach(){
    const beach = document.getElementById("beach");
    pos--;
    beach.style.backgroundPositionX = pos + "px";
    setTimeout(moveBeach, -160);
}
moveBeach()



function dogUp(e) {
    if(e.keyCode === 32){
            const dog = document.getElementById("dog");
            dog.style.bottom = "455px";
            dog.style.transition = "bottom 4s ease-in-out";
    }
}

function dogDown(e) {
    if(e.keyCode === 32){
            const dog = document.getElementById("dog");
            dog.style.bottom = "35px";
            dog.style.transition = "bottom 1s ease-in-out";
    }
}
document.addEventListener('keydown', dogUp);
document.addEventListener('keyup', dogDown);




