function dclock (){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var timeFormat = "AM";

    if(hours==0){
        hours=12;
    }
    else if(hours>12){
        hours = hours-12;
        timeFormat="PM";
    }


    //hours = hours < 10 ? '0' + hours : hours;
    //minutes = minutes < 10 ? '0' + minutes : minutes;
    //seconds = seconds < 10 ? '0' + seconds : seconds;

    hours = hours<10? hours = "0"+hours : hours;
    minutes = minutes<10? mimutes= "0"+ minutes: minutes; 
    seconds= seconds<10? seconds= "0"+ seconds: seconds; 


    var disp = `${hours}  :  ${minutes}  :  ${seconds}`;
    document.querySelector('#time').innerText = disp;
    document.querySelector("small").innerHTML = timeFormat;   
}
   setInterval(dclock,1000);