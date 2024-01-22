//UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
describe("Function calculateArea",() => {
    it("should be defined",() => {
        expect(calculateArea).toBeDefined();
    });
        
        it("should take two numbers as arguments",()=>{
            expect(calculateArea.length).toBe(2);
        });
            
        it("should return the rectangle area by multiplying the two numbers",()=>{
            expect( calculateArea(1,2)).toEqual(2);
            expect( calculateArea(2,3)).toEqual(6);
            expect( calculateArea(7,7)).toEqual(49);
        });
        it("should return undefined if any of the arguments is not prodived",()=>{
            expect( calculateArea(1) ).toEqual(undefined);
            expect( calculateArea() ).toEqual(undefined);
            expect( calculateArea(undefined, 1) ).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not number", ()=>{
            expect( calculateArea(1,"2")).toEqual(undefined);
            expect( calculateArea("2", 3)).toEqual(undefined);
            expect( calculateArea("7","8")).toEqual(undefined);
        });
    });
});

            
        


