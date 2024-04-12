let clickButtonCount = 0;
let totalCookies = 0;

function updateMessage (){
    const messageDiv = document.getElementById('message');
    clickButtonCount++;
    totalCookies++;
    if (totalCookies === 20){
    messageDiv.textContent = "Congratulations! You Win the game!"; 
 } else {
    messageDiv.textContent = "Congratulations! You won a cookie. 🍪 Total Cookies earned:"+ totalCookies;
 }

}
document.getElementById("clickButton").addEventListener('click', updateMessage)
    
