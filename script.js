const sky = document.getElementById("sky");
let position = 0;
function main(){
    console.log(position);
    position++;
    sky.style.backgroundPositionX = position + "px";
    setTimeout(main, 50);
}
main();