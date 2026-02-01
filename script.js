setInterval(runTime, 1000);

function runTime(){
    const time = new Date();
    const h = time.getHours();
    const sec = time.getSeconds();
    const min = time.getMinutes();

 document.getElementById("time").innerHTML = `
   ${h} :
   ${min} :
   ${sec}
   `;
}

// now run the dateTime function every second using setInterval;

