

var queenAttack = function(queen, attack)
 {
    if ((queen[0] - attack[0] < 2) && (queen[1] - attack[1] < 2) || (queen[1] === attack[1]) || (queen[0] === attack[0]) || ((queen[0] - attack[0]) === (queen[1] - attack[1])))
{
    return true;
}

else
{
    return false;
}



};
