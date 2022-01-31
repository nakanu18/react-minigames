import { filterByFirstLetter } from "./filter";

describe("filter tests", () => {
    it("should return an empty array for invalid parameters", () => {
        expect(filterByFirstLetter(undefined, undefined)).toEqual([]);
        expect(filterByFirstLetter(undefined, null)).toEqual([]);
        expect(filterByFirstLetter(undefined, "")).toEqual([]);

        expect(filterByFirstLetter(null, undefined)).toEqual([]);
        expect(filterByFirstLetter(null, null)).toEqual([]);
        expect(filterByFirstLetter(null, "")).toEqual([]);
    });

    it("should return an empty array for an empty parameter array", () => {
        expect(filterByFirstLetter([], undefined)).toEqual([]);
        expect(filterByFirstLetter([], null)).toEqual([]);
        expect(filterByFirstLetter([], "")).toEqual([]);
    });

    it("should return all words that start with a lowercase a", () => {
        const words = ["apple", "big", "corn", "act", "", "Alpha"];
        const letter = "a";

        expect(filterByFirstLetter(words, letter)).toEqual(["apple", "act"]);
    });

    it("should return all words that start with a uppercase a", () => {
        const words = ["apple", "big", "corn", "act", "", "Alpha"];
        const letter = "A";

        expect(filterByFirstLetter(words, letter)).toEqual(["Alpha"]);
    });

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
