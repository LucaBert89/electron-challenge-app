import {data} from "./arrayList/arrayData.js"

export const countWords = (randomArray) => {
    const countArray = {};

    randomArray.forEach(e => {
        countArray[e] ? countArray[e] += 1 : countArray[e] = 1 ;
    })
    
  return mostRepeated(countArray)
};


const mostRepeated = (countArray) => {
    const values = Object.values(countArray);
    const max = Math.max(...values);

    const findValue = Object.entries(countArray).filter(([key, value]) => value === max)
    return findValue[0][0]
}

const randomArray = data[Math.floor(Math.random() * data.length)]
countWords(randomArray);   