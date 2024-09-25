const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2");
const img = document.getElementById("image");
const date = new Date()
const hour = date.getHours()

function carregar() {


    if (hour >= 0 && hour < 12) {
        //BOM DIA
        img.src = "img/manha.jpg";
        document.body.style.background = "#e2cd9f"
        msg.innerHTML = `Agora São ${hour}Hrs da Manhã`
        msg.innerHTML = `Tenha um Bom dia!! ❤❤`

    } else if (hour >= 12 && hour < 18) {
        //BOA TARDE
        img.src = "img/tarde.jpg";
        document.body.style.background = "#b9846f"
        msg.innerHTML = `Agora São ${hour}hrs da Tarde`
        msg2.innerHTML = `Tenha uma Boa tarde!! ❤❤`
    } else {
        //BOA NOITE
        img.src = "img/noite.jpg";
        document.body.style.background = "#515154"
        msg.innerHTML = `Agora São ${hour}hrs da Noite`
        msg2.innerHTML = `Tenha uma Boa Noite!! ❤❤`
    }

}