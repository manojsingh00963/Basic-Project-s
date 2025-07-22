// lol what i did here 36 . 🤪🤣 (aur main kal se soch rha hoon kaha per kharab ho rakha hai ye..🤣🤣) 
const endDate = "28 september 2025 12:00 AM";

document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll('input')

const clock = () => {
    const end = Date(endDate)
    console.log(end);
    const now = new Date()
    console.log(now)
    const diff = (end - now) / 1000;
    console.log(diff)
    // convert into days;
    if (diff < 0) return;// add
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours;
    inputs[1].value = Math.floor(diff / 3600 % 24);
    // convert into minuts;
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into second;
    inputs[3].value = Math.floor(diff) % 60;


}

clock();

/*

1day = 24hrs
1hr = 60 mins
60 min = 3600 sec

*/

setInterval(() => {
    clock();
}, 1000);