
function validatePassword(pass,pass2){
    if (pass === pass2){
        let splitPass = pass.split("")
        if (splitPass.length >= 8){
            let hasNum = false;
            let hasLower = false;
            let hasUpper = false;
            for (let index = 0; index < splitPass.length; index++){
                if(!isNaN(splitPass[index])){
                    hasNum = true;
                }else if(splitPass[index] === splitPass[index].toLowerCase()){
                    hasLower = true;
                }
                else if(splitPass[index] === splitPass[index].toUpperCase()){
                    hasUpper = true;
                }
                
            }
            if (hasNum && hasLower && hasUpper){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function reversePassword(pass){
    let splitPass = pass.split("")
    let reversed = ""
    for (let index = 0; index < splitPass.length; index++){
        reversed = splitPass[index] + reversed;
    }
    return reversed;
}

function storePassword(name,pass,pass2){
    let newPass = pass;
    if (validatePassword(pass,pass2)){
        newPass = reversePassword(pass);        
    }
    const user = {
        name: name,
        newPassword: newPass
    }
    return user;
}

console.log(storePassword("John Valid", "Pass1234", "Pass1234"))
console.log(storePassword("John Invalid", "Pass123", "Pass12345"))