import {mostRepeated} from "./firstChallenge/mostRepeated"
import {data} from "./firstChallenge/arrayList/arrayData"


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
