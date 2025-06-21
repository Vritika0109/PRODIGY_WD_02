let [hours, minutes, seconds] = [0, 0, 0];
let watch = document.getElementById("watch");
let Start = document.getElementById("Start");
let Reset = document.getElementById("Reset");
let Lap = document.getElementById("Lap");
let store = document.getElementById("store");
let display = null ;
let Running = false ;
function Run() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours :  hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s= seconds < 10  ?  "0" +seconds  :seconds ;
    watch.innerText = `${h} : ${m} : ${s}`;
}
Start.addEventListener("click", () => {
    if (!Running) {
        display = setInterval(Run,1000);
        Running = true ;
        Start.innerText = "Stop";
    }
    else {
        clearInterval(display);
        Running = false ;
        Start.innerText = "Start";
    }
})
Reset.addEventListener("click", () => {
    clearInterval(display);
    Running = false;
    Start.innerText = "Start";
    [hours, minutes, seconds] = [0, 0, 0];
    watch.innerText = "00 : 00 : 00" ;
    store.innerHTML = " " ;
})

Lap.addEventListener("click", () =>{
    if (!Running) return ;
    const laptime=`${watch.innerText}`;
    store.innerHTML=`${laptime}<br>` + store.innerHTML
})

