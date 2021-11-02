

export const checkPalindrome = (item) => {
    const nome = item[1]

    const checkedWord = nome.split("").filter(e => e !== " ")
    const reverseWord = [].concat(checkedWord).reverse().join("").toLowerCase();
    const toString = checkedWord.join("");
    
    if(toString  === reverseWord) {
        console.log("Ok")
    } else {
        console.log("no")
    }
}
