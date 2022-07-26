
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
    setTimeout(moveBeach, -160)
}
moveBeach()



