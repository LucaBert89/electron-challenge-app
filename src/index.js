import { countWords } from "./firstChallenge/countWords.js";
import {data} from "./firstChallenge/arrayList/arrayData.js"
import  {dataList}  from "./secondChallenge/arrayList/arrayData.js";
import {stringList} from "./thirdChallenge/arrayList/arrayData.js";
import {checkPalindrome} from "./thirdChallenge/checkPalindrome.js";
import  {orderItem}  from "./secondChallenge/orderItem.js";

import {visualizeData, sortKeys, createSortButtons, visualizeResult, visualizeOrder} from "./renderDom/renderDom.js"

window.load = (function() {  
    
    const randomArray = data[Math.floor(Math.random() * data.length)]
    const randomList = dataList[Math.floor(Math.random() * dataList.length)];
    const randomString = stringList[Math.floor(Math.random() * stringList.length)];
    
    const buttons = document.querySelectorAll(".app-task__button")
    const taskContainer = document.querySelectorAll(".app-task");

    // create the button to sort the second task object
    createSortButtons(sortKeys(randomList), taskContainer[1])
    // array of all the data coming from the other files
    const generalData = [randomArray, randomList, randomString];

    
    const SecondTaskButtons = document.querySelectorAll(".app-task__sort-button")
    
    taskContainer.forEach((e,i) => {
        visualizeData(generalData[i],i, e)
    })
// make every sort button clickable and call orderItem function
    SecondTaskButtons.forEach(e=> {
        e.addEventListener("click", e=> {
            const result = orderItem(e.target.innerText, randomList);
           visualizeOrder(result, taskContainer[1])
        })
    })
    
// make the other buttons visualize the result: repeated value or palindrome
    buttons.forEach(e => {
        const finalResult = document.createElement("p");
        e.addEventListener("click", e=> {
            e.target.innerText === "Show" ? visualizeResult(finalResult, taskContainer[0], countWords(randomArray)) : visualizeResult(finalResult, taskContainer[2], checkPalindrome(randomString))
        })
    })

})()





  
 





//THIRD CHALLENGE

