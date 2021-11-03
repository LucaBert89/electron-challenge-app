

export const checkPalindrome = (item) => {
    const checkedWord = item.split("").filter(e => e !== " ")
    const reverseWord = [].concat(checkedWord).reverse().join("").toLowerCase();
    const toString = checkedWord.join("").toLowerCase();

    return (toString  === reverseWord) ? "Palindrome!" : "Not Palindrome!"
}
