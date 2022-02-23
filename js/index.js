const start = document.getElementById('start')
const stop = document.getElementById('stop')
const hour = document.getElementById('hour')
const  minute = document.getElementById('minute')
const second = document.getElementById('second')

let handlerId;

function TimerHandler(){
    hour.innerHTML=new Date().getHours().toString()
    minute.innerHTML=new Date().getMinutes().toString()
    second.innerHTML=new Date().getSeconds().toString()
}

function startClickHandler(e){
    TimerHandler()
    handlerId = setInterval(TimerHandler,1000)
}

start.addEventListener('click',startClickHandler)
stop.addEventListener('click',()=>clearInterval(handlerId))