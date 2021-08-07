const Name = prompt()
let Hosgeldin = document.querySelector("#Hosgeldin");
let day;

if (new Date().getDay() == 1) {
    day = "Pazartesi"
}
else if (new Date().getDay() == 2) {
    day = "Salı"
}
else if (new Date().getDay() == 3) {
    day = "Çarşamba"
} 
else if (new Date().getDay() == 4) {
    day = "Perşembe"
} 
else if (new Date().getDay() == 5) {
    day = "Cuma"
} 
else if (new Date().getDay() == 6) {
    day = "Cumartesi"
} 
else if (new Date().getDay() == 0) {
    day = "Pazar"
}

Hosgeldin.style.textAlign = "center";
Hosgeldin.style.marginTop = "30vh";

setInterval(myTimer, 1000);

function myTimer() {
    Hosgeldin.innerHTML = `
    Merhaba ${Name}! Hoşgeldin. <br>
    ${new Date().getHours()}.${new Date().getMinutes()}.${new Date().getSeconds()} ${day} <br>
    tarihinde <small style="color:orange;"> Kodluyoruz Frontend Web Development Patikası</small>'nın JavaScript <br> Bölümü 1. Ödevindesiniz.
    `;
}