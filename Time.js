const msg = document.getElementById("msg");
const img = document.getElementById("image");
const date = new Date()
//const hour = date.getHours()
var hour = 1
function carregar() {


    if (hour >= 0 && hour < 12) {
        //BOM DIA
        img.src = "/img/manha.jpg";
        document.body.style.background = "#e2cd9f"
        msg.innerHTML = `Agora São ${hour}Hrs da Manhã`

    } else if (hour >= 12 && hour < 18) {
        //BOA TARDE
        img.src = "/img/tarde.jpg";
        document.body.style.background = "#b9846f"
        msg.innerHTML = `Agora São ${hour}hrs da Tarde`
    } else {
        //BOA NOITE
        img.src = "/img/noite.jpg";
        document.body.style.background = "#515154"
        msg.innerHTML = `Agora São ${hour}hrs da Noite`
    }
}