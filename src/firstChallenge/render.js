import {data} from "./arrayList/arrayData.js"

const randomArray = data[Math.floor(Math.random() * data.length)]


const countWords = () => {
    const countArray = {};

    randomArray.forEach(e => {
        countArray[e] ? countArray[e] += 1 : countArray[e] = 1 ;
    })
    
  return mostRepeated(countArray)
};


const mostRepeated = (countArray) => {
    const values = Object.values(countArray);
    const max = Math.max(...values);

    return Object.entries(countArray).map(([key, value]) =>{
        if(value === max) console.log(key);
    })
}

countWords();