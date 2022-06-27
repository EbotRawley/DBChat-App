const username = document.getElementById("username");
username.addEventListener("keyup", function() {
    var i = username.value.length;
    i *= 5;
    if(username.value.endsWith(" ") && i <= 95){
        username.style.transform = `rotate(-${i}deg)`;
    }
});

const password = document.getElementById("password");
password.addEventListener("keyup", function() {
    var i = password.value.length;
    i *= 5;
    if(i <= 50){
        password.style.textAlign = "right";
        password.style.paddingLeft = `-${i*2}px`;
        password.style.transform = `rotate(${i}deg)`;
    }
});