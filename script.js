let clickButtonCount = 0;
let totalCookies = 0;

function updateMessage (cookieType) {
    const messageDiv = document.getElementById('message');
    clickButtonCount++;
    totalCookies++;
    if (totalCookies === 20){
    messageDiv.textContent = "Congratulations! You Win the game!"; 
 } else {
    messageDiv.textContent = "Congratulations! You won a " + cookieType + "cookie. 🍪 Total Cookies earned:"+ totalCookies;
 }

}

    
document.getElementById("cookieButton1").addEventListener('click', function() {
    updateMessage("Chocolate");
});

document.getElementById("cookieButton2").addEventListener('click',function() {
    updateMessage("Vanilla");
});

document.getElementById("cookieButton3").addEventListener('click', function() {
    updateMessage("Strawberry");
});







