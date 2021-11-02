import { countWords } from "./firstChallenge/countWords.js";
import {data} from "./firstChallenge/arrayList/arrayData.js"
import  {dataList}  from "./secondChallenge/arrayList/arrayData.js";
import {stringList} from "./thirdChallenge/arrayList/arrayData.js";
import {checkPalindrome} from "./thirdChallenge/checkPalindrome.js";
import  {orderItem}  from "./secondChallenge/orderItem.js";
//FIRST CHALLENGE


const randomArray = data[Math.floor(Math.random() * data.length)]
const randomList = dataList[Math.floor(Math.random() * data.length)];
const randomString = stringList[Math.floor(Math.random() * data.length)];



const visualizeData = (data, taskContainer) => {
    const dataField = document.createElement("p");
    dataField.innerText = data;
    taskContainer.appendChild(dataField)
}

const sortButtons = (dataList) => {
    return Object.keys(dataList[0]);
}

const createButtons = (keys, taskContainer) => {
    keys.forEach(e => {
        const button = document.createElement("button");
        button.innerText = e;
        taskContainer.appendChild(button);
    })
}

countWords(randomArray); 
window.load = (function() {  
    const taskContainer = document.querySelectorAll(".app-task");
    const generalData = [randomArray, JSON.stringify(randomList), randomString];
    taskContainer.forEach((e,i) => {
        visualizeData(generalData[i], e)
    })
    
    createButtons(sortButtons(randomList), taskContainer[1])


})()





  
 

console.log(orderItem("libraryID", dataList[1]))



//THIRD CHALLENGE
checkPalindrome(stringList)

