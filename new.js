var lastMinute = null;
function updateClock(){
    var date=new Date();
    var hours=date.getHours().toString().padStart(2,'0');
    var mins=date.getMinutes().toString().padStart(2,'0');
    var secs=date.getSeconds().toString().padStart(2,'0');
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+secs;
       if (secs === "00" && mins !== lastMinute) {
        playAlarm();
        lastMinute = mins;
    }
}


window.setInterval(updateClock,1000);
updateClock();

var card=document.getElementById('card');
var message=document.getElementById('message');
card.addEventListener('mouseover',function(){
    card.style.backgroundColor="green";
    message.innerHTML="You are IN";
});
card.addEventListener('mouseout',function(){
    card.style.backgroundColor="red";
    message.innerHTML="You are OUT";
});
card.addEventListener('click',function(){
    card.style.backgroundColor="yellow";
    message.innerHTML="You Clicked Me!";
});


function playAlarm() {
    let sound = document.getElementById('alarmSound');
    sound.currentTime = 0; 
    sound.play().catch(err => console.log("al.mp3"));
}