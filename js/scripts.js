$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskDescription = $("input#new-task-description").val();
    var inputtedTaskImportance = $("input#new-task-importance").val();


    var newTask = { description: inputtedTaskDescription, importance: inputtedTaskImportance, item: [] };

  var item = "<li><span class='to-do'>" + newTask.description + "<button id='move'>Move</button></span></li>";

   $("ul#tasks-to-do").append(item);



   var clickedButton = $(".to-do #move").last().click(function() {
     alert("button clicked");
     var $this = $(this);
     $this.toggleClass("move");
     if($this.hasClass("move")) {
       $this.text("Move to to-do");
     } else {
       $this.text("Move to completed");
     }
     var $toDo = $(".to-do");
     $toDo.toggleClass(".to-do");
     if($toDo.hasClass(".to-do")) {
     $toDo.detach().appendTo("ul#tasks-completed");
   } else {
     $toDo.detach().appendTo("ul#tasks-to-do");
   }
   });



 //   $(".item").click(function() {
 //     $("button#move").click(function() {
 //     $(".item").detach().appendTo("ul#tasks-completed");
 //     $(this).removeClass("move").addClass("moved").appendTo("ul#tasks-completed");
 //   });
 // });

  //  $("button#move").last().click(function(){
  //   $(".to-do").detach().prependTo("ul#tasks-completed");
  //   $(this).removeClass("move").addClass("moved").appendTo("ul#tasks-completed");
  // });

    $("input#new-task-description").val("");
    $("input#new-task-importance").val("");


  $(".to-do").last().click(function() {
    $("#show-task-to-do").show();
    $("#show-task-to-do h2").text(newTask.description);
    $(".task-description").text(newTask.description);
    $(".task-importance").text(newTask.importance);
      });
    });
  });
