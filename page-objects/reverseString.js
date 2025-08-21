


function reverseString(str) {
    let stringToReverse = ''
    for(let i =0; i<str.lenght; i++){
        stringToReverse = str[i] + stringToReverse
    }

    return stringToReverse
}

console.log(reverseString('Hello'))