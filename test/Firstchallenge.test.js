import {data} from "../src/firstChallenge/arrayList/arrayData"
import { countWords } from "../src/index";

const mockArray = data[0];

describe('should return the most repeated value in the array', () => {
    test("should return dog", () => {
        expect(countWords(mockArray)).toBe("dog");
    });
})