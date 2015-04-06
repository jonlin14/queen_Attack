

var queenAttack = function(queen, attack) {
    if (queen[0] - attack[0] < 2)
    {
        return true;
    }

    else if(queen([1] - attack[1]) < 2)
    {
        return true;
    }
    else if ((queen[0] - attack[0] < 2) && (queen[1] - attack[1] < 2))
    {
        return true;
    }

    else if(queen[1] === attack[1])
    {
        return true;
    }
    else if (queen[0] === attack[0])
    {
        return true;
    }
    else {
    return false;
    }
};

/*describe('queenAttack', function() {

  it("is false if the coordinates are not horizontally, vertically, or diagnally in line with each other",      function(){
      expect(queenAttack([1,1],[2,3])).to.equal(false);
 });
  it("is true if the coordinates are within one horizontally", function() {
      expect(queenAttack([1,1],[2,1])).to.equal(true);
  });
 });


*/

/*
var x_Sum = queenPosition['qx'] - attackPosition['ax'];
var y_Sum = queenPosition['qy'] - attackPosition['ay'];

if (x_Sum > 1) {
    return false;
} else if (y_Sum >1 ) {
    return false;
}
*/

// var queenAttack = function(x, y) {
//     var first = x - y;
//
//
//     if (first > 1) {
//         return false;
//     } else if (first < 1 ) {
//         return false;
//     }
// };

//
// var testThis = function(x)
// {
//     if(x < 5){
//         return true;
//     }
//     else {
//         return false;
//     }
// };
