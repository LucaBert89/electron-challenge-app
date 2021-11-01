import {mostRepeated} from "./firstChallenge/mostRepeated.js"
import {data} from "./firstChallenge/arrayList/arrayData.js"
import { names } from "./thirdChallenge/names.js";

//FIRST CHALLENGE
export const countWords = (randomArray) => {
    const countArray = {};

    randomArray.forEach(e => {
        countArray[e] ? countArray[e] += 1 : countArray[e] = 1 ;
    })
    
  return mostRepeated(countArray)
};

const randomArray = data[Math.floor(Math.random() * data.length)]
countWords(randomArray); 


//SECOND CHALLENGE




//THIRD CHALLENGE
const nome = names[1]

const checkedWord = nome.split("").filter(e => e !== " ")
const reverseWord = [].concat(array).reverse().join("").toLowerCase();
const toString = array.join("");

if(toString  === reverseWord) {
    console.log("Ok")
} else {
    console.log("no")
}

