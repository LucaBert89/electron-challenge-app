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
var library = [
    { autore: 'Romeo J. Graifenberg', titolo: 'Il mio ritorno in cucina', libraryID: 1234},
    { autore: 'Tom H. Marchiori', titolo: 'La mia vita senza acca.', libraryID: 5678},
    { autore: 'Luca Dalessandro', titolo: 'Dove sono le mie ciabatte?', libraryID: 9101}
  ];
  
  // sort by name
  const orderItem = (item) => {
     return typeof item === String ?
     library.sort(function(a, b) {
        var stringA = a[item].toUpperCase(); // ignore upper and lowercase
        var stringB = b[item].toUpperCase(); // ignore upper and lowercase
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      }) : 
      library.sort(function(a, b) {
        return a - b;
      });
  }

  console.log(orderItem("libraryID"))



//THIRD CHALLENGE
const nome = names[1]

const checkedWord = nome.split("").filter(e => e !== " ")
const reverseWord = [].concat(checkedWord).reverse().join("").toLowerCase();
const toString = checkedWord.join("");

if(toString  === reverseWord) {
    console.log("Ok")
} else {
    console.log("no")
}

