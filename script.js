function updateMessage (){
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Congratulations! You won a cookie. 🍪 "
}

document.getElementById("clickButton").addEventListener('click', updateMessage)
    
