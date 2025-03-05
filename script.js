let passwordresult = document.getElementById("password")

function generatePassword(){
    let inputlength = document.getElementById("length").value
    let ifnumbers = document.getElementById("numbers").checked
    let ifsymbols = document.getElementById("symbols").checked
    

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = upperCase + lowerCase;
    if(ifnumbers)allChars += numbers;
    if(ifsymbols)allChars += symbols;


    let password =""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]

    if(ifnumbers) {
        password += numbers[Math.floor(Math.random()*numbers.length)]
    } 
    if(ifsymbols) {
        password += symbols[Math.floor(Math.random()*symbols.length)]
    }

    while (inputlength > password.length) {
        password += allChars[Math.floor(Math.random()*allChars.length)]
    }

    passwordresult.value = password
}

function copyPassword() {
    passwordresult.select();
    document.execCommand("copy");
}
