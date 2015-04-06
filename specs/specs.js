describe('queenAttack', function() {

    it("is false if the coordinates are not horizontally, vertically, or diagnally in line with each other",      function(){
      expect(queenAttack([1,1],[2,3])).to.equal(false);
 });
  it("is true if the coordinates are within one horizontally", function() {
      expect(queenAttack([1,1],[2,1])).to.equal(true);
  });

  it("is true if the coordinates are within one vertically", function(){
      expect(queenAttack([1,1],[1,2])).to.equal(true);
  });

  it("is true if the coordinates are within one vertically and one diagnally", function() {
      expect(queenAttack([1,1], [2,2])).to.equal(true);
  });

  it("is true if the coordinates are greater than two horizontal spaces", function() {
      expect(queenAttack([1,1], [5,1])).to.equal(true);
  });
  it("is true if the coordinates are greater than two vertical spaces", function() {
      expect(queenAttack([1,1], [1,6])).to.equal(true);
  });

  it("is true if the coordinates are two spaces horizonally and two spaces vertically", function(){
      expect(queenAttack([1,1],[3,3])).to.equal(true);
  });

  it("is true if the coordinates are 5 spaces away horizontally and five spaces away vertically", function(){
      expect(queenAttack([2,1],[1,2])).to.equal(true);
  });

 });



// describe ('queenAttack', function(){
//     it("is true", function(){
//         expect(queenAttack(5,2)).to.equal(true);
//     });
// });

/*
describe('testThis', function(){
    it("is true if the number is greater than five", function(){
        expect(testThis(5)).to.equal(false);
    });
});
it("is false for a year that is not divisible by 4", function() {
  expect(leapYear(1999)).to.equal(false);
});
*/
