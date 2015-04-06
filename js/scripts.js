

var queenAttack = function(queen, attack)
 {
     if (Math.abs(queen[0] - attack[0]) < 2 && Math.abs(queen[1] - attack[1]) < 2)
     {
         return true;
     }
     else if (Math.abs(queen[0] - attack[0]) === Math.abs(queen[1] - attack[1]))
     {
         return true;
     }

     else if (queen[1] === attack[1]) {
         return true;
     }

     else if (queen[0] === attack[0]) {
         return true;
     }

     else if ((queen[0] - attack[0]) === (queen[1] - attack[1])) {
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
         var queen1 = [];
         var attacker1 = [];
         var queen_coordinates = $("input#queen_coord").val();
         var attacker_coordinates = $("input#attacker_coord").val();

         var queen_str_to_no = queen_coordinates.split(",");
         for (i = 0; i < queen_str_to_no.length; i++)
         {
             var queen = parseInt(queen_str_to_no[i]);
             queen1.push(queen);
         }


         var attacker_str_to_no = attacker_coordinates.split(",");
         for (i = 0; i < attacker_str_to_no.length; i++)
         {
         var attacker = parseInt(attacker_str_to_no[i]);
         attacker1.push(attacker);
         }


        // var queen_array = [];
        // for(var i = 0; i < queen_str_to_no.length; i++)
        // {
        //     queen_array[i] =
        // }



       var queen_kill = queenAttack(queen1, attacker1);
         $("#queen_list").prepend("<li class='text-success'>" + queen1 + "</li>");

         $("#attacker_list").prepend("<li class='text-primary'>" + attacker1 + "</li>");

         $("#queen_kill").prepend("<li class='text-warning'>" + queen_kill + "</li>");

      event.preventDefault();
     });
 });
