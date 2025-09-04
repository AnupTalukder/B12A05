
function callPop(card) {
    const paragraph = card.querySelector("p").innerText;
    const number = card.querySelector("h2").innerText;

    alert("Calling " + paragraph + " Service" + " : " + number);
}

document.getElementById("National-Emergency").addEventListener("click", function (e) {
    
    const card = this.closest(".card");
    callPop(card);
})

document.getElementById("police").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Fire-Service").addEventListener("click", function (e) {
    e.preventDefault();
   const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Ambulance").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Women").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Anti-Corruption").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Electricity-Outage").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Brac").addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card");
    callPop(card);
})
document.getElementById("Bangladesh-Railway").addEventListener("click", function (e) {
    e.preventDefault();
   const card = this.closest(".card");
    callPop(card);
})




// Love Count 

const icons = document.querySelectorAll('.icon');
const counter = document.getElementById('love-count');
let Love_count = 0;

icons.forEach(icon => {
    icon.addEventListener('click', function () {
        Love_count++;
        counter.textContent = Love_count;
    });
});


//coin count 


const callButtons = document.querySelectorAll('.calls');
const coinCountEl = document.getElementById('coin-count');
let coins = parseInt(coinCountEl.textContent);

callButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        if (coins >= 20) {
            coins = coins-20;
            coinCountEl.textContent = coins;
        } else {
            alert("Not enough coins!");
        }
    });
});





