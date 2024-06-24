import { sum } from "../sum";

test("Sum fuction should calcutae the sum of the numbers ",() => {
    const result = sum(3,4);
expect(result).toBe(7);
    // expect result.toBe(7);
})