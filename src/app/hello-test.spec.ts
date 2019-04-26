describe('Hello Test' , ()=>
{
    let expected  : string = null;
    let unKnown  : string = null
    let regExp = new RegExp(/^m/);

    beforeAll(()=>{
        expected = 'mood';
        unKnown = 'moood';
        console.log("before all");
        console.log("moods");
    });

    beforeEach(()=>{
        expected = 'mood';
        unKnown = 'moood';
        console.log("before each");
        console.log("moods");
    });

    afterEach(()=>{
        expected = null;
        unKnown = null;

        console.log("after each");
        console.log("moods");
    });

    afterAll(()=>{
        expected = null;
        unKnown = null;

        console.log("after all");
        console.log("moods");
    });

    it('checks if hellotest is not hellotest' , ()=>{
       expect(expected).not.toBe(unKnown);
    });

    it('checks if it console moods' , ()=>{
        console.log("spec");
        console.log("moods");
     });

     it('checks if expected starts with m' , ()=>{
         expect(expected).toMatch(regExp)
     })
})