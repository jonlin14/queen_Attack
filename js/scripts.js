

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

 // fire up jQuery

 $(document).ready(function(){

     $("form#get_coordinates").submit(function(event){
         var queen_coordinates = $("input#queen_coord").val();
         var attacker_coordinates = $("input#attacker_coord").val();

         var queen_str_to_no = queen_coordinates.split(",");
         var queenX = parseInt(queen_str_to_no[0]);
         var queenY = parseInt(queen_str_to_no[1]);

         var attacker_str_to_no = attacker_coordinates.split(",");
         var attackerX = parseInt(attacker_str_to_no[0]);
         var attackerY = parseInt(attacker_str_to_no[1]);

        // var queen_array = [];
        // for(var i = 0; i < queen_str_to_no.length; i++)
        // {
        //     queen_array[i] =
        // }



       var queen_kill = queenAttack(queen_coordinates, attacker_coordinates);
         $("#queen_list").prepend("<li class='text-success'>" + queen_str_to_no + "</li>");

         $("#attacker_list").prepend("<li class='text-primary'>" + attacker_coordinates + "</li>");

         $("#queen_kill").prepend("<li class='text-warning'>" + queen_kill + "</li>");

      event.preventDefault();
     });
 });
