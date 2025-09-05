
function callPop(card) {
    const paragraph = card.querySelector("p").innerText;
    const number = card.querySelector("h2").innerText;

    alert("Calling " + paragraph + " Service" +  number+"...");
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


//coin count and history 





const callButtons = document.querySelectorAll('.calls');
const coinCountEl = document.getElementById('coin-count');
let coins = parseInt(coinCountEl.textContent);
const callHistoryList = document.getElementById('call-history-list');
const clearBtn = document.querySelector('button');



function formatTime(date){
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let ampm = h >= 12 ? 'PM' : 'AM'
    h = h % 12
    h = h ? h : 12
    m = m < 10 ? '0'+m : m
    s = s < 10 ? '0'+s : s
    return `${h}:${m}:${s} ${ampm}`
}






callButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        if (coins >= 20) {
            coins = coins-20;
            coinCountEl.textContent = coins; 
            
            //call history
         
        let name = button.closest('.card').querySelector('h1').innerText
        let number = button.closest('.card').querySelector('h2').innerText
        let div = document.createElement('div')
        div.className = 'flex justify-between items-center p-2 bg-gray-100 rounded-lg'
        div.innerHTML = `<span class="text-gray-700 font-medium">${name}<br>${number}</span><span class="time text-gray-500 text-xs">${formatTime(new Date())}</span>`
        callHistoryList.prepend(div)
    


        } 
        
        else {
            alert("Not enough coins!");
        }
    });
});



//copy 



document.addEventListener('DOMContentLoaded', () => {
    const copies = document.querySelectorAll('.copies');
    const copy_counter = document.getElementById('copy-counter');
    let copy_count = 0;

    copies.forEach(copy => {
        copy.addEventListener('click', function () {
            const card = this.closest('.card'); 
            const number = card.querySelector('.number').innerText; 

            navigator.clipboard.writeText(number).then(() => {
                copy_count++;
                copy_counter.textContent = copy_count;
                alert("Copied: " + number);
            });
    });
});
});









// delete history 

const clearButton = document.querySelector('.clear');
const callHistory = document.getElementById('call-history-list');

clearButton.addEventListener('click', () => {
    callHistory.innerHTML = ''; 
});











