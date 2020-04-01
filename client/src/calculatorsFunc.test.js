import { compoundInterest } from './calculatorsFunc';

describe("compoundInterest", () => {

    it("should not return undefined", () => {
        const result = compoundInterest(100, 10, 5, 10);
        expect(result).toBeDefined();
    });

    it("should return an array of 60 items", () => {
        expect(compoundInterest(100, 10, 5, 10).length).toEqual(60);
        expect(compoundInterest(100, 10, 6, 10).length).toEqual(72);
        expect(compoundInterest(100, 10, 1, 10).length).toEqual(12);
    });

});