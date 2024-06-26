function generatePassword(){
    const lowerCaseBox = document.getElementById("lower-case");
    const upperCaseBox = document.getElementById("upper-case");
    const numberBox = document.getElementById("number");
    const symbolBox = document.getElementById("symbol");

    const includeLowercase = lowerCaseBox.checked;
    const includeUppercase = upperCaseBox.checked;
    const includeNumbers = numberBox.checked;
    const includeSymbols = symbolBox.checked;

    let length = document.getElementById("password-length").value;
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        document.getElementById("password").textContent = "Password length must be at least 1";
        return;
    }
    if(allowedChars.length === 0){
        document.getElementById("password").textContent = "At least 1 set of characters needs to be selected";
        return;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    document.getElementById("password").textContent = password;
}
