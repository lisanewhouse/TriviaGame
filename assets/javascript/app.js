$(document).ready(function(){

var count=120;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     alert("times up");
          return;
  }
  $("#timer").html(count);
}





$("input").click(function(){
        $(this.question).hide();
    });
    $("#show").click(function(){
        $("p").show();
    });

//when the game begins, all questions are hidden
//when start is pressed, questions are shown
//as each questions are answered, they are hidden.
//once all quesitons have been answered, the game will end
// OR  once the timer is up, the game will end
//score will be shown a the the game ends,
 //  questions will still be hidden at this time




});
