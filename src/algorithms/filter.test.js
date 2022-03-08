import { filterByFirstLetter } from "./filter";

// Run this command
//      yarn test filter
// This will run all the tests in this file.
//
// You'll have to pass each test one by one to solve it all.
describe("filter tests", () => {
    // 1: Handle null value parameters
    //
    // filterByFirstLetter() should take care of invalid input.  If it does
    // not, then it will be prone to crashing.
    //
    // The parameters sent into filterByFirstLetter() are all invalid in some
    // way.  Write a condition that checks if these are valid.
    //
    // Expected return value: empty array
    //
    // Hint: you'll need to understand truthy and falsey
    // https://developer.mozilla.org/en-US/docs/Glossary/Truthy
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    it("should return an empty array for invalid parameters", () => {
        expect(filterByFirstLetter(undefined, undefined)).toEqual([]);
        expect(filterByFirstLetter(undefined, null)).toEqual([]);
        expect(filterByFirstLetter(undefined, "")).toEqual([]);

        expect(filterByFirstLetter(null, undefined)).toEqual([]);
        expect(filterByFirstLetter(null, null)).toEqual([]);
        expect(filterByFirstLetter(null, "")).toEqual([]);
    });

    // 2: Here we now have some valid parameters.  But the array is empty
    // so there's nothing to process.
    //
    // Expected return value: empty array
    it("should return an empty array for an empty parameter array", () => {
        expect(filterByFirstLetter([], undefined)).toEqual([]);
        expect(filterByFirstLetter([], null)).toEqual([]);
        expect(filterByFirstLetter([], "")).toEqual([]);
    });

    // 3. Here you'll need to compare the first letter of each string in
    // the array to the given letter.
    it("should return all words that start with a lowercase a", () => {
        const words = ["apple", "big", "corn", "act", "", "Alpha"];
        const letter = "a";

        expect(filterByFirstLetter(words, letter)).toEqual(["apple", "act"]);
    });

    // 4. Here you'll need to compare the first letter of each string in
    // the array to the given letter.  If 3 works, 4 should probably work
    // without addtional work.
    it("should return all words that start with a uppercase a", () => {
        const words = ["apple", "big", "corn", "act", "", "Alpha"];
        const letter = "A";

        expect(filterByFirstLetter(words, letter)).toEqual(["Alpha"]);
    });

    // 4. Here you'll need to handle both a and A.  toLowerCase() or
    // toUpperCase() may be useful.
    it("should return all words that start with any kind of a", () => {
        const words = ["apple", "big", "corn", "act", "", "Alpha"];
        const letter = "A";
        const isCaseSensitive = false;

        expect(filterByFirstLetter(words, letter, isCaseSensitive)).toEqual([
            "apple",
            "act",
            "Alpha",
        ]);
    });
});
