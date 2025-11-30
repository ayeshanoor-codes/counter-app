let count = 0

function increment (){
    count++;
    document.getElementById("value").textContent= count;
}
function decrement (){
    count--;
    document.getElementById("value").textContent=count;
}
function reset (){
    count=0;
    document.getElementById("value").textContent=count;
}