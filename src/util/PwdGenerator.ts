import { Alert } from "react-native"

//Function that creates a random password based in 5 input parameters
//The array i shuffled to increse the chance of mix the content

export function GeneratePwd(upperCase: boolean, lowerCase: boolean, symbol: boolean, numbers: boolean, size: number){
    if(!upperCase && !lowerCase && !symbol && !numbers){
        Alert.alert("Error While Generating Password", "At least one parameter must be checked!")
        return null;
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const nums  = "0123456789"
    const sym   = "%$#&@!()[]{}<>/\|^~*"

    let pwdSource = '';

    if(upperCase)
        pwdSource += upper

    if(lowerCase)
        pwdSource += lower

    if(numbers)
        pwdSource += nums
    
    if(symbol)
        pwdSource += sym
    
    let pwdArr  = pwdSource.split('')
    let pwd     = ''
    let arrLen  = pwdArr.length

    pwdArr = shuffleArray(pwdArr)

    for(let i=0;i<size;i++){
        pwd += pwdArr[Math.floor(Math.random()*arrLen)];
    }

    return pwd
}

function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}  
  