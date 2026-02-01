const currentDate = document.getElementById("currdt");
const userDate = document.getElementById("userdt");
const calculatorBtn = document.getElementById("btn");
const resulT = document.getElementById("result");


// Update the current date display
function updateCurrentDate(){  
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    
    currentDate.innerHTML = `
    <span>${month}/</span>
    <span>${day}</span>
    <span>${year}</span>
    `;
}

updateCurrentDate();
setInterval(updateCurrentDate, 1000);


function calculateAge(birthdate){
    const now = new Date();
    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    let days = now.getDate() - birthdate.getDate();

    // Adjust for negative values
    if(days < 0){
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if(months < 0){
        years--;
        months += 12;
    }

    return {years, months, days};
}

calculatorBtn.addEventListener("click", ()=> {
    if(userDate.value === ''){
        alert("You must enter your DOB first!");
    }else{
        const userDateVal = new Date(userDate.value);
        const age = calculateAge(userDateVal);
        resulT.innerHTML = `Your AGE is: ${age.years}years, ${age.months}months and ${age.days}days!`;
    } 
})
