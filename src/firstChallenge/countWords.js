import {mostRepeated} from "./mostRepeated.js"

export const countWords = (randomArray) => {
    const countArray = {};
    console.log(randomArray)
    randomArray.forEach(e => {
        countArray[e] ? countArray[e] += 1 : countArray[e] = 1 ;
    })
    
  return mostRepeated(countArray)
};