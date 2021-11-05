import {data} from "../src/firstChallenge/arrayList/arrayData";
import { countWords } from "../src/firstChallenge/countWords";
import {dataList} from "../src/secondChallenge/arrayList/arrayData"
import { stringList } from "../src/thirdChallenge/arrayList/arrayData";
import { orderItem } from "../src/secondChallenge/orderItem";
import { checkPalindrome } from "../src/thirdChallenge/checkPalindrome";

const mockArray = data[0];
const mockArraySort = dataList[0];
const mockString = stringList[0];
const mockStringNotPalindrome = stringList[2];

describe('FIRST CHALLENGE: should return the most repeated value in the array and how many times the value is repeated', () => {
    test("should return dog:3", () => {
        expect(countWords(mockArray)).toBe("dog:3");
    });
})

describe('SECOND CHALLENGE: should return the elements ordered by the choosen value', () => {
    test("should return the values ordered by ID", () => {
        expect(orderItem("libraryID", mockArraySort)).toStrictEqual(
            [
                { autore: 'Tom H. Marchiori', titolo: 'La mia vita senza acca.', libraryID: 1},
                { autore: 'Romeo J. Graifenberg', titolo: 'Il mio ritorno in cucina', libraryID: 3},
                { autore: 'Luca Dalessandro', titolo: 'Dove sono le mie ciabatte?', libraryID: 5}
            ]
        );
    });
})

describe('THIRD CHALLENGE: should return if an element is palindrome or not', () => {
    test("should return Palindrome", () => {
        expect(checkPalindrome(mockString)).toBe("Palindrome!");
    })

    test("should return Not Palindrome", () => {
        expect(checkPalindrome(mockStringNotPalindrome)).toBe("Not Palindrome!");
    })
})